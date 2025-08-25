import Link from "next/link";

export default function LorePage() {
  return (
    <main className="min-h-screen p-8 text-white bg-black">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Lore</h1>

        <div className="space-y-4">
          
<Link
  href="/lore/riverside"
  className="group relative block h-48 rounded-xl overflow-hidden border border-white/20"
>
  <div
    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
    style={{ backgroundImage: "url(/images/riverside.jpg)" }}  // use your 2560x1440 file
    aria-hidden="true"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
  <div className="absolute inset-0 p-4 flex flex-col justify-end">
    <h2 className="text-2xl font-semibold">Riverside</h2>
    <p className="mt-1 text-white/80 text-sm">
      Aria’s riverside memory and the first hint she may be a Cantor.
    </p>
  </div>
</Link> {/* This closes the first card */}

<Link
  href="/lore/rails-to-remos-squeaky-pedal"
  className="group relative block h-48 rounded-xl overflow-hidden border border-white/20"
>
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
    style={{ backgroundImage: "url(/images/squeaky-pedal.jpg)" }}
    aria-hidden="true"
  />

  {/* Dark gradient overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

  {/* Text overlay */}
  <div className="absolute inset-0 p-4 flex flex-col justify-end">
    <h2 className="text-2xl font-semibold">
      Squeaky Pedal <em>(Rails to Remos)</em>
    </h2>
    <p className="mt-1 text-white/80 text-sm">
      Three musicians ride the Sonarail to Remos for a final rehearsal before auditions.
      
    </p>
  </div>
</Link> {/* This closes the second card */}

        </div>
      </div>
    </main>
  );
}
