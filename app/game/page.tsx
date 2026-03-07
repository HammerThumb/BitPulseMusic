export default function GamePage() {
  return (
    <>
      <style jsx global>{`
        .nav-glass,
        .nav-hairline {
          display: none !important;
        }
        main.pt-16 {
          padding-top: 0 !important;
        }
      `}</style>

      <div style={{ width: "100vw", height: "100vh", margin: 0 }}>
        <iframe
          src="https://defense-of-sonaris.vercel.app"
          style={{ width: "100%", height: "100%", border: "none" }}
          allow="fullscreen"
        />
      </div>
    </>
  );
}
