// app/lore/rails-to-remos-squeaky-pedal/page.tsx
import { Cinzel_Decorative, Crimson_Pro } from "next/font/google";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RailsToRemosPage() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Gradient background layer */}
<div
  className="fixed inset-0 -z-20 bg-gradient-to-b from-[#0b1022] via-[#141a2f] to-[#0b1022]"
  aria-hidden="true"
/>
      {/* Background image */}
      <div
  className="story-bg fixed inset-0 bg-cover bg-no-repeat"
  style={{
    backgroundImage: "url(/images/squeaky-pedal.jpg)",
    backgroundPosition: "50% 30%", // default crop for normal screens
  }}
  aria-hidden="true"
/>


      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      {/* Page content */}
      <article className="relative z-10 mx-auto max-w-3xl px-6 py-24 md:py-28">
        <h1
          className={`${cinzelDecorative.className}
            text-3xl md:text-4xl font-bold mb-6
            text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-cyan-300 to-pink-300
            glow-pulse`}
        >
          Squeaky Pedal <em>(Rails to Remos)</em>
        </h1>

        <div className={`${crimsonPro.className} space-y-4 text-lg leading-relaxed`}>
          <p>
            The train swayed as it wound through the canyons, iron wheels keeping time like a
            metronome. Kiro rested his guitar across his knees, picking a lazy rhythm while Daro
            drummed fingertips against the window ledge.
          </p>
          <p>
            Across from them, Aria flicked her wrist, and a piano of soft white light shimmered
            into being before her. She pressed a chord, testing its weight as the glow settled into
            something solid.
          </p>
          <p>“Did you ever fix that pedal?” Kiro asked without looking up.</p>
          <p>Aria grinned and rolled her eyes. “Its not broken...”</p>
          <p>
            “I only ask because I’d hate to see Maestra Luthren throw another shaker at your head
            during rehearsal.”
          </p>
          <p>Aria snorted. “Pfft, she was aiming at Daro.”</p>
          <p>
            Daro’s eyes went wide. “Hey, I was just trying to spice up the song!” He broke into
            laughter anyway, tapping a quick roll against the window.
          </p>
          <p>
            Aria smiled in spite of herself and pressed down the pedal. It gave a familiar,
            mouse-like squeak. She held it a beat too long, daring them to complain.
          </p>
          <p>“I didn’t realize lumen-pianos even needed maintenance,” Daro said, smirking.</p>
          <p>
            “Seriously, oil it before we get there...or.. whatever you do to fix lumens. We just
            need everything to be perfect.” Kiro added.
          </p>
          <p>Aria just grinned and hit another chord, letting the squeak blend into the rhythm of the rails.</p>

          <hr className="border-white/20 my-4" />

          <p>“Anyway,” Daro cut in, “think she’ll go easy on us this time?”</p>
          <p>Aria raised a brow. “The final rehearsal in Remos? She’ll eat us alive.”</p>
          <p>“Good,” Kiro said. “If we can survive her, we can survive anything. Even the First Song.”</p>
          <p>That quieted them. For a moment only the rails spoke, the rhythm steady and unchanging.</p>
          <p>
            Daro broke it with a half-smile. “Strange, isn’t it? Last cycle was only fifty years
            ago. My grandfather played percussion for the opening verse. Said it was like the world
            itself leaned in to listen.”
          </p>
          <p>Kiro strummed a single note and let it ring. “And here we are, three kids with too much to prove.”</p>
          <p>“Not kids,” Aria corrected softly, eyes on the passing cliffs. “By the time we leave Remos, we’ll be the musicians of this age.”</p>
          <p>“Yeah—<em>if</em> we get through auditions,” Kiro shot back.</p>
          <p>
            Aria smirked. “Exactly. We’re only going up against the best Cantors from all over
            Sonaris. What if we don’t make the cut?”
          </p>
          <p>
            “Not a chance,” Daro said quickly. “I’ve never played beside a sharper ear than Kiro,
            and your hands make that piano sing - even with a squeaky pedal.” He shot Aria a quick wink.
          </p>
          <p>Kiro gave a lopsided grin. “Same goes for you, Daro. Nobody makes a train car sound like a drum kit quite like you.”</p>
          <p>
            The three of them laughed, the weight of their task lifting for just a breath. The
            train kept time, the pedal squeaked, and together it almost felt like music.
          </p>

          <hr className="border-white/20 my-4" />

          <p className="italic text-white/85">
            <span className="font-semibold"></span> The tunnel to Mirae took three years to renovate
            in preparation for the Sonarail’s expansion — an entire third story added so more
            passengers could make the rare, days-long journey across Sonaris aboard the only train
            that runs its rails.
          </p>
        </div>
      </article>
    </main>
  );
}
