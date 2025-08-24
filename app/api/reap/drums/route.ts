// app/api/reap/drums/route.ts
import { Midi } from "@tonejs/midi";

// Ensure Node.js runtime (not Edge), which is friendlier for MIDI work
export const runtime = "nodejs";
// If you see caching weirdness in dev, you can also add:
// export const dynamic = "force-dynamic";

type Section = "Intro" | "A" | "B" | "Bridge" | "Outro";
type Part =
  | "Kick"
  | "Snare"
  | "HatsStraight"
  | "HatsSwung"
  | "Shaker"
  | "Tambourine"
  | "Ride"
  | "PercAccents"
  | "Fills";

export async function POST(req: Request) {
  const { grid, tempo, swing, humanizeMs, velCurve } = await req.json();

  const midi = new Midi();
  const t = typeof tempo === "number" ? tempo : 80;
  midi.header.setTempo(t);
  // PPQ defaults to 480 in @tonejs/midi; we’ll read it just in case:
  const ppq = midi.header.ppq || 480;

  // One GM drum track on channel 10 (0-indexed = 9)
  const drumTrack = midi.addTrack();
  drumTrack.channel = 9;

  // GM drum map
  const D = {
    Kick: 36,
    Snare: 38,
    HatsStraight: 42,
    HatsSwung: 42,
    Shaker: 82,
    Tambourine: 54,
    Ride: 51,
    PercAccents: 56,
    Fills: 40,
    HatsOpen: 46,
    HatPedal: 44,
  } as const;

  // Per-instrument velocity profiles (0..1)
  const VPROFILE: Record<string, { scale: number; cap: number; jitter: number }> = {
    Kick:         { scale: 0.90, cap: 0.62, jitter: 0.02 }, // soft, subby
    Snare:        { scale: 1.00, cap: 0.95, jitter: 0.05 }, // wider dynamics
    HatsStraight: { scale: 0.90, cap: 0.80, jitter: 0.04 },
    HatsSwung:    { scale: 0.90, cap: 0.80, jitter: 0.04 },
    HatsOpen:     { scale: 0.95, cap: 0.85, jitter: 0.03 },
    HatPedal:     { scale: 0.85, cap: 0.75, jitter: 0.02 },
    Shaker:       { scale: 0.85, cap: 0.75, jitter: 0.03 }, // narrow
    Tambourine:   { scale: 0.95, cap: 0.90, jitter: 0.04 },
    Ride:         { scale: 0.90, cap: 0.85, jitter: 0.03 },
    PercAccents:  { scale: 1.00, cap: 1.00, jitter: 0.02 },
    Fills:        { scale: 1.00, cap: 0.90, jitter: 0.05 },
  };

  function profileVel(partKey: keyof typeof VPROFILE, base: number) {
    const p = VPROFILE[partKey];
    let v = base * p.scale + (Math.random() * 2 - 1) * p.jitter; // jitter
    v = Math.min(p.cap, Math.max(0.05, v));
    return curvedVel(v); // still pass through the global curve
  }

  const sections: Section[] = ["Intro", "A", "B", "Bridge", "Outro"];
  const barsPerSection = 8;

  const swingPct = Math.max(50, Math.min(75, typeof swing === "number" ? swing : 55));
  const swingRatio = (swingPct - 50) / 50; // 0..0.5
  const swingPush = (ppq / 8) * swingRatio; // delay 16th offbeats

  function humanizeTicks(absTicks: number) {
    if (!humanizeMs || humanizeMs <= 0) return absTicks;
    const msPerBeat = 60000 / t;
    const ticksPerMs = ppq / msPerBeat;
    const jitter = (Math.random() * 2 - 1) * humanizeMs * ticksPerMs;
    return Math.max(0, Math.round(absTicks + jitter));
  }

  function curvedVel(v: number) {
    const curve = typeof velCurve === "number" ? velCurve : 1;
    return Math.max(0.05, Math.min(1, Math.pow(v, curve)));
  }

  let currentBar = 0;
  for (const s of sections) {
    for (let bar = 0; bar < barsPerSection; bar++) {
      const barStart = (currentBar + bar) * ppq * 4;

      // KICK: 1 & 3 with optional 4e
      if (grid?.[s]?.Kick) {
        const hits = [
          { step: 0, vel: 0.95 },
          { step: 2, vel: 0.9 },
          { step: 3.5, vel: Math.random() < 0.4 ? 0.8 : 0 },
        ];
        for (const h of hits) {
          if (!h.vel) continue;
          const tick = humanizeTicks(barStart + Math.round(h.step * ppq));
          drumTrack.addNote({
            midi: D.Kick,
            time: tick / ppq,
            duration: 0.05,
            velocity: curvedVel(h.vel),
          });
        }
      }

      // SNARE: backbeats + ghosts
      if (grid?.[s]?.Snare) {
        [1, 3].forEach((step) => {
          const tick = humanizeTicks(barStart + step * ppq);
          drumTrack.addNote({
            midi: D.Snare,
            time: tick / ppq,
            duration: 0.04,
            velocity: curvedVel(0.9),
          });
        });
        [0.75, 1.75, 2.75, 3.75].forEach((step) => {
          if (Math.random() < 0.45) {
            const tick = humanizeTicks(barStart + step * ppq);
            drumTrack.addNote({
              midi: D.Snare,
              time: tick / ppq,
              duration: 0.03,
              velocity: curvedVel(0.35),
            });
          }
        });
      }

      // HATS straight 8ths (alternate strokes, rare open-hat bleed + choke)
      if (grid?.[s]?.HatsStraight) {
        for (let i = 0; i < 8; i++) {
          const step = i * 0.5; // eighths
          const base = barStart + step * ppq;
          const isBack = i % 2 === 1;
          const tick = humanizeTicks(base);
          // occasional open-hat bleed on an offbeat (about 6% chance)
          const doOpen = isBack && Math.random() < 0.06;

          if (doOpen) {
            // open hat hit
            drumTrack.addNote({
              midi: D.HatsOpen,
              time: tick / ppq,
              duration: 0.12, // rings
              velocity: profileVel("HatsOpen", isBack ? 0.62 : 0.72),
            });
            // quick choke with a closed/pedal hat a 16th later
            const chokeTick = humanizeTicks(base + ppq * 0.25);
            drumTrack.addNote({
              midi: D.HatsStraight,
              time: chokeTick / ppq,
              duration: 0.02,
              velocity: profileVel("HatsStraight", 0.55),
            });
          } else {
            drumTrack.addNote({
              midi: D.HatsStraight,
              time: tick / ppq,
              duration: 0.02,
              velocity: profileVel("HatsStraight", isBack ? 0.56 : 0.70),
            });
          }
        }
      }

      // HATS swung 8ths (alternate + light offbeat delay)
      if (grid?.[s]?.HatsSwung) {
        for (let i = 0; i < 8; i++) {
          const onbeat = barStart + (i * 0.5) * ppq;
          const isOff = i % 2 === 1;
          const tick = humanizeTicks(isOff ? onbeat + swingPush : onbeat);
          const doOpen = isOff && Math.random() < 0.08; // a tad more in swung feels
          if (doOpen) {
            drumTrack.addNote({
              midi: D.HatsOpen,
              time: tick / ppq,
              duration: 0.14,
              velocity: profileVel("HatsOpen", 0.66),
            });
            // close it shortly after
            const chokeTick = humanizeTicks(onbeat + ppq * 0.25 + swingPush * 0.25);
            drumTrack.addNote({
              midi: D.HatsSwung,
              time: chokeTick / ppq,
              duration: 0.02,
              velocity: profileVel("HatsSwung", 0.54),
            });
          } else {
            drumTrack.addNote({
              midi: D.HatsSwung,
              time: tick / ppq,
              duration: 0.02,
              velocity: profileVel("HatsSwung", isOff ? 0.58 : 0.70),
            });
          }
        }
      }

      // SHAKER 16ths with natural alternation (forward/back), beat accents, slight backstroke delay
      if (grid?.[s]?.Shaker) {
        for (let i = 0; i < 16; i++) {
          const sixteenthBase = barStart + (i * 0.25) * ppq;

          // forward = even 16ths, back = odd 16ths (alternating hand motion)
          const isBackstroke = i % 2 === 1;

          // velocity: forward a bit louder, back a bit softer
          let vel = isBackstroke ? 0.42 : 0.68;

          // add gentle “beat accents” on the downbeats (i = 0,4,8,12)
          if (i % 4 === 0) vel += 0.10;

          // micro-variation to avoid machine-gun (±0.04)
          vel += (Math.random() * 0.08 - 0.04);

          // slight timing bias: backstrokes land a touch late (feel of air pushing granules)
          const backstrokeNudge = isBackstroke ? swingPush * 0.25 : 0;

          const tick = humanizeTicks(sixteenthBase + backstrokeNudge);
          drumTrack.addNote({
            midi: D.Shaker,
            time: tick / ppq,
            duration: 0.02,
            velocity: curvedVel(Math.max(0.2, Math.min(vel, 0.95))),
          });
        }
      }

      // TAMBOURINE on halves
      if (grid?.[s]?.Tambourine && bar % 2 === 0) {
        [0, 2].forEach((step) => {
          const tick = humanizeTicks(barStart + step * ppq);
          drumTrack.addNote({
            midi: D.Tambourine,
            time: tick / ppq,
            duration: 0.06,
            velocity: curvedVel(0.75),
          });
        });
      }

      // RIDE 8ths
      if (grid?.[s]?.Ride) {
        for (let i = 0; i < 8; i++) {
          const step = i * 0.5;
          const tick = humanizeTicks(barStart + step * ppq);
          drumTrack.addNote({
            midi: D.Ride,
            time: tick / ppq,
            duration: 0.04,
            velocity: curvedVel(0.55),
          });
        }
      }

      // Perc accents (& of 4, sparse)
      if (grid?.[s]?.PercAccents) {
        [3, 3.75].forEach((step) => {
          if (Math.random() < 0.5) {
            const tick = humanizeTicks(barStart + step * ppq);
            drumTrack.addNote({
              midi: D.PercAccents,
              time: tick / ppq,
              duration: 0.08,
              velocity: curvedVel(0.8),
            });
          }
        });
      }

      // Fills: only one block, with snare buzz lead-in and fill notes
      if (grid?.[s]?.Fills && Math.random() < 0.35) {
        // mini snare buzz before the fill (two 32nds leading in)
        const beat4 = barStart + 3 * ppq;
        const t32 = ppq / 8; // 32nd-note ticks
        const pre1 = humanizeTicks(beat4 - t32 * 2); // two 32nds before beat 4
        const pre2 = humanizeTicks(beat4 - t32 * 1);
        drumTrack.addNote({
          midi: D.Snare,
          time: pre1 / ppq,
          duration: 0.03,
          velocity: profileVel("Snare", 0.40),
        });
        drumTrack.addNote({
          midi: D.Snare,
          time: pre2 / ppq,
          duration: 0.03,
          velocity: profileVel("Snare", 0.48),
        });

        // fill notes
        for (let i = 12; i < 16; i++) {
          const tick = humanizeTicks(barStart + (i * 0.25) * ppq);
          drumTrack.addNote({
            midi: D.Fills,
            time: tick / ppq,
            duration: 0.06,
            velocity: profileVel("Fills", 0.70),
          });
        }
      }
    }
    currentBar += barsPerSection;
  }

  // Convert Uint8Array -> ArrayBuffer slice for a safe binary body
const bytes = midi.toArray(); // Uint8Array

return new Response(
  (bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer),
  {
    status: 200,
    headers: { "Content-Type": "audio/midi" },
  }
);



}
