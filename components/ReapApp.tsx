"use client";

import { useMemo, useState } from "react";

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

const SECTIONS: Section[] = ["Intro", "A", "B", "Bridge", "Outro"];
const PARTS: Part[] = [
  "Kick",
  "Snare",
  "HatsStraight",
  "HatsSwung",
  "Shaker",
  "Tambourine",
  "Ride",
  "PercAccents",
  "Fills",
];

type GridState = Record<Section, Record<Part, boolean>>;

const defaultGrid = (): GridState =>
  Object.fromEntries(
    SECTIONS.map((s) => [
      s,
      Object.fromEntries(PARTS.map((p) => [p, false])) as Record<Part, boolean>,
    ])
  ) as GridState;

export default function ReapApp() {
  const [grid, setGrid] = useState<GridState>(() => {
    // try to load preset from localStorage
    if (typeof window !== "undefined") {
      const raw = localStorage.getItem("reap-drum-grid");
      if (raw) {
        try {
          return JSON.parse(raw);
        } catch {}
      }
    }
    return defaultGrid();
  });

  const [tempo, setTempo] = useState<number>(80);
  const [swing, setSwing] = useState<number>(55); // %
  const [humanizeMs, setHumanizeMs] = useState<number>(8);
  const [velCurve, setVelCurve] = useState<number>(1.0); // 0.6–1.4 range
  const [busy, setBusy] = useState(false);

  const toggle = (s: Section, p: Part) => {
    setGrid((g) => {
      const copy = structuredClone(g);
      copy[s][p] = !copy[s][p];
      return copy;
    });
  };

  const savePreset = () => {
    localStorage.setItem("reap-drum-grid", JSON.stringify(grid));
  };

  const payload = useMemo(
    () => ({ grid, tempo, swing, humanizeMs, velCurve }),
    [grid, tempo, swing, humanizeMs, velCurve]
  );

  const generate = async () => {
    try {
      setBusy(true);
      const res = await fetch("/api/reap/drums", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to generate MIDI");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "reap_drums.mid";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      alert((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">REAP Drum Builder</h1>
      <p className="opacity-80">
        Pick parts per section. We’ll swing/humanize and print to MIDI. Hammer is
        awesome.
      </p>

      <div className="grid grid-cols-[150px_repeat(9,minmax(90px,1fr))] gap-2">
        <div />
        {PARTS.map((p) => (
          <div key={p} className="text-sm font-semibold">
            {p}
          </div>
        ))}

        {SECTIONS.map((s) => (
          <div key={s} className="contents">
            <div className="font-semibold">{s}</div>
            {PARTS.map((p) => (
              <label
                key={p}
                className="flex items-center justify-center border rounded-lg p-2 hover:bg-black/5 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  checked={grid[s][p]}
                  onChange={() => toggle(s, p)}
                />
              </label>
            ))}
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <label className="space-y-1">
          <div className="text-sm font-medium">Tempo</div>
          <input
            type="number"
            min={40}
            max={160}
            value={tempo}
            onChange={(e) => setTempo(parseInt(e.target.value || "80", 10))}
            className="w-full border rounded p-2"
          />
        </label>
        <label className="space-y-1">
          <div className="text-sm font-medium">Swing %</div>
          <input
            type="number"
            min={50}
            max={75}
            value={swing}
            onChange={(e) => setSwing(parseInt(e.target.value || "55", 10))}
            className="w-full border rounded p-2"
          />
        </label>
        <label className="space-y-1">
          <div className="text-sm font-medium">Humanize (ms)</div>
          <input
            type="number"
            min={0}
            max={30}
            value={humanizeMs}
            onChange={(e) =>
              setHumanizeMs(parseInt(e.target.value || "8", 10))
            }
            className="w-full border rounded p-2"
          />
        </label>
        <label className="space-y-1">
          <div className="text-sm font-medium">Velocity Curve</div>
          <input
            type="number"
            step="0.05"
            min={0.6}
            max={1.4}
            value={velCurve}
            onChange={(e) => setVelCurve(parseFloat(e.target.value || "1"))}
            className="w-full border rounded p-2"
          />
        </label>
      </div>

      <div className="flex gap-3">
        <button
          onClick={savePreset}
          className="px-4 py-2 rounded-xl border hover:bg-black/5"
        >
          Save Preset
        </button>
        <button
          onClick={generate}
          disabled={busy}
          className="px-4 py-2 rounded-xl bg-black text-white disabled:opacity-50"
        >
          {busy ? "Generating…" : "Generate MIDI"}
        </button>
      </div>
    </div>
  );
}
