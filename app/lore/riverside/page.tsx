// app/lore/riverside/page.tsx
import { Cinzel_Decorative, Crimson_Pro } from "next/font/google";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RiversidePage() {
  return (
    <main className="relative min-h-screen text-white">
     {/* Gradient background layer */}
<div
  className="fixed inset-0 -z-20 bg-gradient-to-b from-[#0b1022] via-[#141a2f] to-[#0b1022]"
  aria-hidden="true"
/>

{/* Story image layer */}
<div
  className="story-bg fixed inset-0 bg-cover bg-no-repeat -z-10"
  style={{
    backgroundImage: "url(/images/riverside.jpg)",
    backgroundPosition: "50% 30%",
  }}
  aria-hidden="true"
/>



      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      {/* Page content */}
      <article className="relative z-10 max-w-3xl mx-auto px-6 py-24 md:py-28">
        <h1
          className={`${cinzelDecorative.className}
            text-3xl md:text-4xl font-bold mb-6
            text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-cyan-300 to-pink-300
            glow-pulse`}
        >
          Riverside
        </h1>

        <div className={`${crimsonPro.className} space-y-4 text-lg leading-relaxed`}>
          <p>
            The morning air smelled of river reeds and damp wood. Aria dangled her legs off the dock, kicking at the air while her fishing line floated lazily downstream.
          </p>

          <p>“Papa,” she said, squinting at the water, “Do fish ever get bored waiting for us?”</p>

          <p>Her father laughed, adjusting his own rod. “If they do, they never complain.”</p>

          <p>
            Aria giggled. She started humming—a lazy, drifting version of a piano tune still half-stuck in her fingers. As she hummed, the water beneath her line rippled, though no fish had bitten. The bobber dipped once, twice, then stilled again.
          </p>

          <p>Her father froze. Slowly, he turned his gaze to her. “Aria… can you hum that again for me?”</p>

          <p>She blinked. “Why?”</p>

          <p>“Just try.”</p>

          <p>
            She hummed the same wandering tune as a tiny glowing rune etched itself into the dock. This time, tiny fish darted from the shadows, circling just below her feet as if drawn to her voice.
          </p>

          <p>Aria’s eyes went wide. “Papa, look! I’m really good at fishing today!”</p>

          <p>
            Her father crouched beside her, watching the fish still circling in the shallows. His brow furrowed, but his tone stayed calm. “Aria… I’ve never seen fish act like this before...”
          </p>

          <p>She blinked. “What do you mean?”</p>

          <p>
            He hesitated, searching for the right words. “Your voice… it didn’t just call the fish—it marked the dock. Aria, I think that was a Cantor’s song.”
          </p>

          <p>Aria tilted her head, repeating the strange word. “Cantor? What’s that?”</p>

          <p>
            Her father smiled faintly. “A Cantor is someone who uses music like a tool,” he said. “Or maybe more like a key. Their songs can do wonderous things.” He paused, considering. “Actually, you already know a Cantor or two. Remember Mistress Elowen, the healer?”
          </p>

          <p>Aria nodded eagerly. “She made Old Mara’s cough go away!”</p>

          <p>
            “Exactly. She doesn’t just keep that harp around as a hobby. She plays it to heal people. And Master Jorin, the mason who hums while he works—he’s not just passing time. His songs steady the stone, make the walls stronger than they should be. That’s Cantor work too.”
          </p>

          <p>Aria’s eyes widened. “So… they use music like magic?”</p>

          <p>
            “Yes, a kind of magic,” he said. “But one you have to learn, like a language.” he said. “Cantors are rare, but every town is lucky to have one. Some towns have many of them.” He paused, glancing at the dock again. “See this little rune? That’s a mark left by your song.”
          </p>

          <p>
            She hugged her knees, as if her voice might slip out again if she didn’t hold it close. “If I am a Cantor… does that mean I get to go to music school?”
          </p>

          <p>
            Her father chuckled, shaking his head. “Good question. I’m not sure if you’re old enough yet, but we might have to look into enrolling you in Dova Academy next year.”
          </p>

          <p>Aria’s eyes lit up. “Will I get to play piano all day?”</p>

          <p>
            He laughed again, but his smile softened. “If that’s what you want, sure. But not just piano—you could learn how to play anything. Different instruments can do different things in the hands of a Cantor.”
          </p>

          <p>Aria tilted her head, a thoughtful frown tugging at her mouth. “So… what else can Cantors do?”</p>

          <p>
            Her father’s expression grew more serious. He looked out across the river, watching the current tug against the reeds. “Aria... the very best Cantors carry a responsibility greater than the music itself. Did your mother ever tell you the story of the First Song?”
          </p>
           <p>The rune on the dock pulsed once more, then faded into the grain like it had always been there.</p> 

          <hr className="border-white/20 my-4" />

          <p className="italic text-white/85">
            Whenever the rains fall over Dova, the statue in the square hums a ghostly tune. Legend blames the mishap on Jorin Thalen, the town’s most famous architect, who sneezed during a repair song and left the note trapped in stone. Strangers find it unsettling. Locals find it strangely endearing.
          </p>
        </div>
      </article>
    </main>
  );
}
