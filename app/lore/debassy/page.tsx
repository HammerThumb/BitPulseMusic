// app/lore/debassy/page.tsx
import { Cinzel_Decorative, Crimson_Pro } from "next/font/google";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function DebassyPage() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Gradient background layer */}
      <div
        className="story-bg fixed inset-0 bg-cover bg-no-repeat -z-10 bg-debassy"
        style={{ backgroundPosition: "50% 30%" }}
        aria-hidden="true"
      />

      {/* Story image layer */}
      <div
        className="story-bg fixed inset-0 bg-cover bg-no-repeat -z-10"
        style={{
          backgroundImage: "url(/images/debassy.jpg)",
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
          Debassy
        </h1>

        <div className={`${crimsonPro.className} space-y-4 text-lg leading-relaxed`}>
          <p>They walked the lakebed without getting wet.</p>

          <p>
            Lysa’s spell held around them as a clear sphere, humming like a throat. Outside the bubble,
            the cold pressed like a second planet; inside, it smelled faintly of crushed kelp and resin.
            A wash of soft light bled from the spell itself—the bubble’s skin gave off a sea-glass glow
            that pushed the dark back a few paces and colored the silt and stone in pale greens. Ecko kept
            his eyes ahead. Skatii squeezed in beside them, boots braced, staring at the dim green world and
            the long white ribbon of the waterfall above.
          </p>

          <p>
            “Isn’t it a little early in the journey for the water level?” Skatii muttered. “I’m still not
            sure about this whole ‘wait outside in the bubble’ plan.”
          </p>

          <p>“You’ll be fine,” Lysa said. “The spell will hold. If Ecko’s right, the temple’s kept more than memories sealed.”</p>

          <p>“Hmm, I suppose I’d rather face water pressure than silence incarnate,” Skatii said.</p>

          <p>
            They followed the cliff wall until the temple’s door found them: ancient stone arches rising from the water,
            surfaces weathered smooth, columns etched with curling runes that faintly glowed. The door rested within,
            a large bronze iris with similar etching. <em>Debassy. Staff Temple of Mirae.</em>
          </p>

          <p>
            At the threshold, Lysa brought the bubble to a halt. “All right,” she told Skatii, unstrapping the harp.
            “I’ll open it; you keep it open. Hold the two blue strings together—steady, no flourish—until we’re through.
            If the bubble complains, keep holding.”
          </p>

          <p>“I’ll be ready to leave,” Skatii said, dry as driftwood, softened by a small smile.</p>

          <p>“You’ve got this,” Ecko said, smiling.</p>

          <p>
            Lysa set her fingers on invisible intervals as teal-green light gathered between her hands and wove into a lumen-harp.
            The bubble’s inner skin trembled in anticipation. Filaments of radiance strung themselves between her knuckles like
            spun riverlight. She launched into an intricate melody—glass-bright runs braided with low harmonics—and the bronze
            veins warmed as the iris listened. The last note hung, then faded—one heartbeat, two—before the mechanism obeyed;
            the iris turned with the caution of something that had closed for good reasons. A spray of bubbles burst from the seams
            and pattered over the bubble’s skin like water-fireworks, and through the opening they glimpsed stone steps leading up
            into dry air.
          </p>

          <p>“Beautifully done,” Ecko said—the approval easy. “Elegant.”</p>

          <p>
            “Occupational hazard,” Lysa replied with a small shrug. “Good to hear you play again,” Ecko added—memories of academy
            halls flickering and gone. Lysa’s mouth tilted—half a smile, half a memory.
          </p>

          <hr className="border-white/20 my-4" />

          <p>
            Inside, Debassy breathed in quiet light. A broad foyer opened beneath a ribbed glass dome; the lake above broke into
            slow, wandering bands that slid across the floor like living murals. Pillars of sea-worn stone stood in a ring, faces
            carved with wave-marks and faint note glyphs, thin brass inlays tracing paths toward the far arch. They crossed the cool,
            echoing floor and slipped through the arch into the inner corridor.
          </p>

          <p>
            Glass pipes ran the corridor like organs with clear throats, each pulsing with lakewater that sang a single pitch forever.
            The nave opened at the end: long-string frames ringing a central dais; beneath, water clocks turned on hidden paddles,
            clicking time into stone. In the center, inside a glass case—a bell jar of flawless crystal—hovered the first page,
            glowing softly as if lit from within.
          </p>

          <p>
            Lysa blinked, half a laugh in her throat. “You were right,” she said, incredulous. “But why is it here, now?”
            Ecko only set his jaw and checked the pipes, letting the question drift past. “We take it cleanly,” he said.
          </p>

          <p>
            To reach the page, the room set a riddle in rhythm and melody. Along the far wall, five pipes played a motif—short, short,
            long, then a breath—while all the others kept a gentle all-at-once hum, a shimmering dissonance that made the motif hard to hear.
            “We play it back,” Ecko murmured. Lysa nodded. “Right.”
          </p>

          <p>
            Ecko echoed the motif; Lysa shaded him an octave below so the pitch sat true. The pipes replied with a harder phrase.
            Each time they answered cleanly, a slice of the dissonant hum fell away—more pipes going quiet, the haze thinning—and
            the stubborn water clocks slid to a new stride. The motifs grew trickier—little turns and skips—but they kept up, trading
            lines until pipes and clocks finally marched together. One by one the pipes brightened; when their echo landed exactly with
            the call, the room held a clear, watery harmony, and the air seemed to nod.
          </p>

          <p>They were nearly there when a stray harmonic skipped from Ecko’s flute, skimmed the nearest pipe, and slipped under the bell jar’s rim.</p>

          <p>The case lit from within.</p>

          <p>
            A bead of brightness pinwheeled, elongated, sprouted frills, blinked brand-new eyes, and climbed out on tiny sure hands.
            An axolotl the color of pale dawn shook herself and looked up with curiosity.
          </p>

          <p>
            “Hello…” Ecko breathed. The creature chirped—a bright, three-note trill—and pressed her face to his flute as if reading
            the engraving. “Incredible… Trebble, I presume?” Lysa asked, the name arriving like a note you recognize before you
            remember learning it. Trebble trilled again as if signing paperwork, then floated in a small circle, listening.
          </p>

          <p>
            Ecko glanced at Lysa. “Trebble, eh? You want to fill me in?” “I’ll explain later,” Lysa said, eyes on the room.
            When Ecko played the next phrase, Trebble matched it with cheerful confidence, adding a high overtone that stitched the
            thin places in the room’s echo. The pause that had been a question became an answer.
          </p>

          <p>
            The case sighed open. They approached the dais. Up close, the page looked like paper taught to dream of seashells—thin as
            breath, etched with lines that flexed when you weren’t looking. Trebble froze mid-chirp, frills lifting—eyes narrowing,
            not in fear but recognition. In a blink she launched, the glow inside the case surging in rhythm with her trill. The page
            quivered, shimmered… and softened—like a breath released, it flowed into her. For a heartbeat she shone as if lit by every
            note they’d played. Then she stilled, older and new; the bell jar stood hollow. “She can carry it,” Lysa whispered.
          </p>

          <hr className="border-white/20 my-4" />

          <p>
            The floor quivered; pressure knotted the corridor as the glass pipes choked. It came as one body, not a swarm: a single
            Null, vast enough to dim the pipes on both walls at once—an eclipse with shoulders. Not a body so much as a subtraction:
            its edges wavered like heat-haze and its middle was dense as poured ink. Sound slumped wherever it moved; the corridor
            beyond it simply vanished—no color, no light. “That’s a Null,” Lysa whispered. “I’ve met one—never at eat-the-hallway size.”
          </p>

          <p>
            The Null tilted as if sniffing, its formless edge stretching toward Trebble’s glow. Trebble pressed against Ecko’s collarbone,
            flaring brighter. Ecko stepped, voice tight: “Away from her.” A cutting note sheared the reaching edge back with a hiss.
            Lysa slid in front, palm up, her held tone swelling into a shield. “Together,” she said, lifting her lumen-harp. “On my downshift.”
          </p>

          <p>
            Ecko sent a tight wave of light from the flute; Lysa set a low tone under him. The Null soaked both without flinching.
            “Short bursts,” Ecko said. “Don’t let it dine.” “The more it eats, the harder it hits—until it pops,” Lysa answered.
            “Stack it,” she breathed. “Fifth to unison.” They locked—Ecko’s line blooming pure, Lysa’s tone narrowing until both
            kissed the same center. The corridor hummed; cracks spidered across the Null’s surface like frost racing glass. “Now.”
          </p>

          <p>
            Ecko drove a final bursting phrase through the middle. The Null folded inward and imploded, popping into a ring of cold.
            For one heartbeat they had the hall back. On the next, the ring unraveled into dozens of small Nulls—splinters of hush
            skittering across floor and wall, hungry. “Run!” Lysa said, already backing them down the passage. They moved, fighting as
            they fled—Ecko’s staccato arcs chewing holes in the nearest splinters; Lysa’s quick three-note snaps detonating along the edges;
            Trebble pinging thin spots so their heels didn’t vanish into silence.
          </p>

          <p>
            The iris lightened ahead. They reached the stairs to the threshold. Skatii was there, white-knuckled on the harp, bubble humming.
            “Company,” Ecko said. “I noticed the screaming vacuum,” Skatii replied. “I’m against it.” “Play,” Lysa said. He struck the marked pair.
            The bubble surged wider—and Trebble pressed to the sphere’s skin and sang.
          </p>

          <p>
            Her note wasn’t loud; it was complete. The hum caught it, braided it, and then turned up. The sphere seized a column of lakewater like a
            fist grabbing a rope and rocketed. The world became a blur of bubbles; the bubble kept its breath; Trebble kept the note; Skatii made a
            sound that might have been a prayer or a recipe.
          </p>

          <p>
            They broke the surface, rode the river of falling water up like a salamander-drawn chariot, and heaved over the cliff lip in a gleaming arc.
            The bubble sheeted away on landing and left them sprawling on wet stone, blinking against sky. For a beat, nobody spoke—wind, spray, three
            heartbeats and a small, contented trill. The water still seemed to ring in their bones. Ecko met Lysa’s eyes; for one suspended breath,
            what they’d done felt both impossible and exactly on time.
          </p>

          <p>
            Skatii pushed himself up on his elbows and stared at Trebble, who happily climbed Ecko’s shoulder. “So,” he said at last, “we went down for
            a page and came back with a… sea princess?” Trebble tilted her head and chirped. Ecko laughed. “We got both, actually. Her name’s Trebble.”
          </p>

          <p>“Right. Hold that thought—my insides are negotiating with gravity.” Skatii vanished behind a nearby tree.</p>

          <p>
            Lysa took the harp back and looked east along the ridge where the road threaded away. “Pack up,” she said. “It’s a few days to Faylen.”
            “So you’re coming with us, after all?” Ecko asked. “What about Mirae’s wardship?” “That’s in the past now,” Lysa said. “We have to warn the
            others. Plus, someone needs to look after Trebble.”
          </p>

          <p>
            Ecko touched Trebble’s back; light pulsed under her skin, a gentle hum sliding into time with his own pulse. She pressed a small hand to his
            knuckles and trilled something that meant ready in a language with no words.
          </p>

          <p> 
        They set off along the cliff, damp and grinning, the roar of the fall at their backs. Behind them, the lake settled as if no one had ever touched its breath. Ahead, the world waited with six more doors and a thousand opinions. Trebble rode high on Ecko’s shoulder and watched everything with unblinking interest, as if the road itself were a puzzle she meant to solve.
        </p>

            <p>
“Next town,” Skatii said, jogging to catch up, “has fewer underwater temples, right?”
        </p>

        <p>
“No promises,” Lysa said.
        </p>
        <p>
“Perfect,” he sighed.
        </p>

        <p>
They laughed, and the sound layered into the wind like fresh thread woven into old cloth as they walked toward Faylen.
          </p>
        </div>
      </article>
    </main>
  );
}
