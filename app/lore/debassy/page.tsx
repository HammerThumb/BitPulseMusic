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
    Lysa’s spell held around them as a clear sphere, humming like a throat. Outside the bubble, the cold pressed like a second planet; inside, it smelled faintly of crushed kelp and resin. A wash of soft light bled from the spell itself—the bubble’s skin gave off a sea-glass glow that pushed the dark back a few paces and colored the silt and stone in pale greens. Ecko kept his eyes ahead, looking determined as ever. Skatii squeezed in beside them, boots braced, eyes wide at the dim green world and the long white ribbon of the waterfall above, blurred into a single breath.
  </p>

  <p>
    “Isn’t it a little early in the journey for the water level?” Skatii muttered. His hand hovered near the cooking‑iron at his belt as if it were a talisman. “I’m still not sure about this whole ‘wait outside in the bubble’ plan.”
  </p>

  <p>“You’ll be fine,” Lysa said. “The spell will hold. Plus, if Ecko’s right, the temple’s keeping more than just memories sealed away.”</p>

  <p>“Hmm, I suppose I’d rather face water pressure than silence incarnate,” Skatii said.</p>

  <p>
    They followed the cliff wall until the temple’s door found them: ancient stone arches rose from the water, their surfaces weathered smooth by time. Each column was etched with curling runes, faintly glowing as if the temple itself still breathed with hidden power. The door rested within, a large bronze iris with similar etched decoration. Debassy. Staff Temple of Mirae.
  </p>

  <p>
    At the threshold, Lysa brought the bubble to a halt. “All right,” she told Skatii, unstrapping the harp from her back. “Once I open the door, keep it propped open with the bubble. If it closes, it won’t open again without the song. If the bubble starts to complain, play the marked F octave together—steady rhythm—until we’re back.”
  </p>

  <p>
    Skatii peered at the subtle ink marks on the frame. “Which one is F again? Also, define ‘marked.’”
  </p>

  <p>“The blue strings,” Lysa said. “Just keep plucking and be ready for anything.”</p>

  <p>“I’ll be ready... to leave,” Skatii said, dry as driftwood, softened by a small smile.</p>

  <p>“We’re counting on you,” Ecko said, smiling. “I’d rather this not be our new home.” – He added, patting Skatii on the shoulder.</p>

  <p>
    Lysa set her fingers on invisible intervals as teal‑green light gathered between her hands and wove into a lumen‑harp. The bubble’s inner skin trembled in anticipation. Filaments of radiance strung themselves between her knuckles like spun riverlight. She launched into an intricate melody—glass‑bright runs braided with low harmonics—and the bronze veins warmed as the iris listened. The last note hung, then faded—one heartbeat, two—before the mechanism obeyed; the iris turned with the caution of something that had closed for good reasons. A spray of bubbles burst from the seams and pattered over the bubble’s skin like water‑fireworks, and through the opening they glimpsed stone steps rising just beyond, leading up into dry air.
  </p>

  <p>“Beautifully done,” Ecko said—the approval easy. “Elegant.”</p>

  <p>“Cantadictorian of Reshar Academy, at your service,” Lysa replied with a wink.</p>

  <p>“It’s good to hear you play again,” Ecko added—memories of academy halls flickering and gone. Lysa’s mouth tilted at that—half a smile, half a memory.</p>

  <p>She turned to Skatii. “Keep the bubble steady. We’ll be quick.”</p>

  <p>“Define ‘quick,’” Skatii began, but they were already stepping through.</p>

  <p>—</p>

  <p>
    Inside, Debassy was bathed in quiet light. A broad foyer opened beneath a ribbed glass dome; the lake above broke into slow, wandering bands that slid across the floor like living murals. Pillars of sea‑worn stone stood in a ring, their faces carved with wave‑marks and faint note glyphs, and thin brass inlays traced paths toward the far arch. Beads of condensation cupped along the ledges; shards of shell and glass were set like stars in the grout. They crossed the cool, echoing floor and slipped through the arch into the inner corridor.
  </p>

  <p>
    Glass tubes ran the corridor like organs with clear throats, each pulsing with lakewater that sang a single pitch forever. Their combined sound mapped the space if you knew how to hear it. The nave opened at the end: frames pinned with long strings ringed a central dais; beneath, water clocks turned on hidden paddles, clicking time into the stone. In the center, inside a glass case—a bell jar of flawless crystal—was the first page.
  </p>

  <p>It hovered weightless inside the case, glowing softly—as if lit from within.</p>

  <p>
    Lysa blinked, half a laugh in her throat. “You were right,” she said, incredulous. “But why is it here, now?”
  </p>

  <p>Ecko only set his jaw and checked the pipes, letting the question drift past like a buoy in the current. “We take it cleanly,” he said.</p>

  <p>
    To reach the page, the room set a riddle in rhythm and melody. Along the far wall, the five glass pipes played a motif—short, short, long, then a breath. All around, the other pipes kept a gentle, all‑at‑once hum—pitches stacked into a shimmering dissonance that made the motif difficult to pick out. Beneath the dais, stubborn water clocks ticked their own counter‑stride, tugging everything slightly apart.
  </p>

  <p>“We play it back,” Ecko murmured.</p>

  <p>Lysa nodded. “Right.”</p>

  <p>
    Ecko listened for a moment, then played the motif back, Lysa shading him an octave below so the pitch sat true. The pipes replied with a harder phrase; they returned that one too. Each time they answered cleanly, a slice of the dissonant hum fell away—more pipes going quiet, the haze thinning—and the stubborn water clocks slid to a new stride, tugging less and less. The motifs grew trickier—little turns and skips—but they kept up, trading lines until pipes and clocks finally marched together. One by one the pipes brightened; when their echo landed exactly with the call, the room held a clear, watery harmony, and the air seemed to nod.
  </p>

  <p>They were nearly there when a stray harmonic skipped from Ecko’s flute, skimmed the nearest pipe, and slipped under the bell jar’s rim.</p>

  <p>The case lit from within.</p>

  <p>
    A bead of brightness pinwheeled, elongated, sprouted frills, blinked brand‑new eyes, and climbed out on tiny sure hands. An axolotl the color of pale dawn shook herself and looked up with curiosity. It swam through the air as if it were water and approached Ecko.
  </p>

  <p>“Hello...” Ecko breathed, the word half‑awe, half‑question.</p>

  <p>The creature chirped—a bright, three‑note trill—and pressed her face to his flute as if reading the engraving.</p>

  <p>“Incredible... Trebble, I presume?” Lysa asked, the name arriving like a note you recognize before you remember learning it.</p>

  <p>Trebble trilled again as if signing paperwork, then floated through the air in a small circle, listening.</p>

  <p>Ecko glanced at Lysa. “Trebble, eh? You want to fill me in?”</p>

  <p>“I’ll explain later,” Lysa said, eyes still on the room.</p>

  <p>
    When Ecko played the next phrase, Trebble matched it with cheerful confidence, adding a high overtone that stitched the thin places in the room’s echo. The glass pipes glowed. The pause that had been a question became an answer.
  </p>

  <p>The case sighed open.</p>

  <p>Ecko glanced at Trebble, unable to help himself. “I think you and I are going to get along.”</p>

  <p>Trebble bobbed once and offered the smallest triumphant chirp.</p>

  <p>
    They approached the dais. Up close, the page looked like paper taught to dream of seashells—thin as breath, etched with lines that flexed when you weren’t looking.
  </p>

  <p>Trebble froze mid‑chirp, frills lifting. Her eyes narrowed—not fear, but recognition.</p>

  <p>“Wait—she’s reacting to the page,” Lysa breathed.</p>

  <p>
    In a blink, Trebble launched. The glow inside the case surged, pulsing in rhythm with her trill. The page quivered, shimmered, and then... softened.
  </p>

  <p>
    Like a breath released, it flowed into her—light drawn to tone. Her frills flared wide, glowing from within, and for a heartbeat, she shone as if lit by every note they’d played.
  </p>

  <p>Then she stilled, older and new, the bell jar now hollow.</p>

  <p>Lysa’s hand hovered just behind Trebble, like she wasn’t sure whether to protect her—or ask for the page back.</p>

  <p>“She can carry it,” Lysa whispered—half relief, half disbelief.</p>

  <p>
    Ecko started—“But the page...” —and the floor quivered; pressure knotted the corridor as the glass pipes choked. He cut the word off, lifting the flute.
  </p>

  <p>“Something’s wrong,” Lysa said shakily, eyes on the door.</p>

  <p>—</p>

  <p>
    It came as one body, not a swarm: a single entity, vast enough to dim the glass pipes on both walls at once—an eclipse with shoulders.
  </p>

  <p>
    Not a body so much as a subtraction. Its edges wavered like heat‑haze and its middle was dense as poured ink. Sound slumped wherever it moved; the nearest pipes went dumb, and the corridor beyond it simply vanished—no color, no light.
  </p>

  <p>“That’s a Null,” Lysa whispered. “But the last one I saw wasn’t ‘eat‑the‑hallway’ sized.”</p>

  <p>“Holy glyphs... It’s massive,” Ecko began, then his voice steadied. “But it’s two against one—”</p>

  <p>Trebble chirped her disapproval.</p>

  <p>“Sorry—three,” he said, correcting himself.</p>

  <p>
    The Null tilted as if sniffing. Its formless edge stretched toward Trebble—drawn to her light. The pipes nearest her went dark, like someone blowing out stars.
  </p>

  <p>Trebble shrank back but flared her frills in warning. A shimmer of tone crackled beneath her skin.</p>

  <p>
    Ecko stepped forward, flute half‑raised. “Away from her,” he said, voice tight as a drawn bow. The Null unspooled an arm of silence toward her, thinning the air until the nearest throats went mute. Trebble pressed against his collarbone but flared brighter, a thin line of light guttering under her skin. Ecko snapped a cutting note across the reaching edge; the wave of light sheared it back with a hiss.
  </p>

  <p>Lysa slid in front, palm up, her tone swelling into a shield.</p>

  <p>“Together,” she said, lifting her lumen‑harp into place. “On my downshift.”</p>

  <p>
    Ecko planted his feet, drew in, and sent a tight wave of light from the flute like an arrow—the first probe—while Lysa set a low tone under him. The Null soaked both without flinching.
  </p>

  <p>“Short bursts,” Ecko said. “We have to make our phrases count. Don’t let it dine on weak cantrips.”</p>

  <p>“Right. The more it eats, the harder it hits—until it pops,” Lysa answered, jaw set.</p>

  <p>“Stack it,” she breathed. “Fifth to unison.”</p>

  <p>
    They locked: Ecko’s line blooming pure, Lysa’s tone cradling and narrowing until both kissed the same center. A straight beam of white‑gold sound lanced from Ecko’s flute, Lysa’s teal light spiraling tight around it—two notes braided into one—and on impact the Null staggered, its edge buckling as fine cracks raced its surface like frost on glass.
  </p>

  <p>“Now,” she said.</p>

  <p>
    Ecko braced and drove a final bursting phrase straight through the middle. The Null folded inward and imploded, popping into a ring of cold. A shockwave of silence blew past them, gone as quickly as it came.
  </p>

  <p>
    For one heartbeat they had the hall back. On the next, the ring frayed into dozens of smaller Nulls—splinters of hush skittering across the floor and up the walls, hungry. Others peeled from the ceiling—diving, skittering along the pipes, pouring in from every seam.
  </p>

  <p>“They’re blocking the hallway!” Ecko yelled.</p>

  <p>
    Ecko snapped a run at the Nulls ahead that split into linked bolts, a chain of bright strikes leaping overhead from one splinter to the next. Three of the ceiling‑clingers went at once—the arc stitched through them like beads on a wire: flash‑flash‑flash—and each one imploded into a cold puff of hush. Meanwhile, Lysa planted her heel and turned, flinging a full circle from the harp; a teal pressure‑wave in the form of a music staff rolled out in all directions, knocking back the encroaching ring of deaf and void and buying a breath.
  </p>

  <p>“I think we’re losing the numbers game now...Run!” Lysa said, already backing them down the passage.</p>

  <p>
    They moved, fighting as they fled. Ecko fired staccato arcs over his shoulder—bright pulses that chewed holes in the nearest splinters—while Lysa ripped quick three‑note snaps that detonated like beadwork bombs along the edges. Trebble skittered between them on the stone, chiming sharp harmonics at thin spots so their heels didn’t vanish into silence. A wave of hush slammed the wall to their right; the echo died; their footfalls went thin. Ecko pivoted, loosed a breath‑heavy run; three more splinters popped like punctured bladders and the sound rushed back hot.
  </p>

  <p>Another surge boiled out of a side arch.</p>

  <p>“Left!” Lysa snapped.</p>

  <p>
    They cut through, Nulls snapping at their calves like cold dogs. The corridor tightened to a throat; air thinned. Every rest felt like a misstep waiting to happen. Trebble swam ahead, frills flaring, and cast a lilac slipstream; their steps caught the current and quickened—sudden lift underfoot—and Ecko and Lysa felt the surge take hold as they broke away from the pack.
  </p>

  <p>
    The exit was ahead. They could see the stairs to the threshold. Skatii was there in the doorway, white‑knuckled on the harp, bubble humming hard.
  </p>

  <p>“Company!” Ecko yelled toward him.</p>

  <p>“I noticed the silent hoard,” Skatii replied. “I’m against it.”</p>

  <p>“Out of the doorway, now!” Lysa said.</p>

  <p>
    The iris had already begun to close—slow and remorseless—and beyond it the Null horde poured up the corridor toward the stairs. Back inside the sphere, the lake’s weight pressed their steps into a measured walk; running was a wish the water would not grant. And the Null were gaining—faster than the iris could shut.
  </p>

  <p>Suddenly, the bubble surged wider—and Trebble leapt, pressed herself to the sphere’s skin, and sang.</p>

  <p>
    Her note wasn’t loud; it was complete. The bubble’s hum caught it, braided it, and then turned up. The sphere seized a column of lakewater like a fist grabbing a rope and rocketed. The world became a blur of bubbles; the bubble kept its breath; Trebble kept the note; Skatii made a sound that may have been a prayer or a recipe.
  </p>

  <p>
    They broke the surface, rode the river of falling water up like a salamander‑drawn chariot, and heaved over the cliff lip in a gleaming arc. The bubble sheeted away on landing and left them sprawling on wet stone, blinking against sky.
  </p>

  <p>
    For a beat, nobody spoke. Wind. Spray. Three heartbeats and a small, contented trill. The water still seemed to ring in their bones.
  </p>

  <p>Ecko met Lysa’s eyes; for one suspended breath, what they’d done felt both impossible and exactly on time.</p>

  <p>
    Skatii pushed himself up on his elbows and stared at Trebble, who happily climbed Ecko’s shoulder to sit like a queen on a friendly hill. “So,” he said at last, solemn as a magistrate, “we went down for a page and came back with a... sea princess?”
  </p>

  <p>Trebble tilted her head and chirped. Ecko laughed, the sound loose with leftover fear.</p>

  <p>“We got both actually,” he said. “And her name’s Trebble.”</p>

  <p>“Wait, you got the page!?” Skatii said, going a little green. “Hold that thought—my insides are negotiating with gravity.” He ducked behind a nearby tree.</p>

  <p>
    Lysa took the harp back, kissed the frame, and looked east along the ridge where the road threaded away. “We should head out,” she said. “It’s a few days to Faylen.”
  </p>

  <p>“So you’re coming with us, after all?” Ecko asked, pleasantly surprised. “What about Mirae’s wardship?”</p>

  <p>
    “That’s in the past now. There’s no denying what we just saw. We have to warn the others. Plus, someone has to look after Trebble.”
  </p>

  <p>
    Ecko reached a hand to Trebble’s back; light pulsed under her skin, a gentle hum sliding into time with his own pulse. She pressed a small hand to his knuckles and trilled something that meant ready in a language with no words.
  </p>

  <p>
    They set off along the cliff, damp and grinning, the roar of the fall at their backs. Behind them, the lake settled as if no one had ever touched its breath. Ahead, the world waited with six more doors and a thousand opinions. Trebble rode high on Ecko’s shoulder and watched everything with unblinking interest, as if the road itself were a puzzle she meant to solve.
  </p>

  <p>“Next town,” Skatii said, jogging to catch up, “has fewer underwater temples, right?”</p>

  <p>“No promises,” Lysa said.</p>

  <p>“Perfect,” he sighed.</p>

  <p>They laughed, and the sound slipped into the wind like a new harmony settling into a familiar chord as they walked toward Faylen.</p>

        </div>
      </article>
    </main>
  );
}
