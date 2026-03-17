import { useEffect, useState } from "react";
import { AppGrid } from "./components/AppGrid";
import { Impressum } from "./components/Impressum";

const NAV: Record<string, string> = {
  "": "start",
  "#impressum": "impressum",
};

function Header({ page }: { page: string }) {
  return (
    <header
      style={{
        height: "var(--oz-header-height)",
        borderBottom: "1px solid var(--oz-bg-subtle)",
        display: "flex",
        alignItems: "center",
        padding: "0 1.5rem",
        gap: "1rem",
        position: "sticky",
        top: 0,
        background: "var(--oz-bg)",
        zIndex: 10,
      }}
    >
      <a
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          textDecoration: "none",
          marginRight: "auto",
        }}
      >
        <img
          src="https://openzirndorf.de/static/media/logo.png"
          alt=""
          aria-hidden="true"
          width={28}
          height={28}
          style={{ borderRadius: "6px" }}
        />
        <span style={{ fontFamily: "var(--oz-font-heading)", fontWeight: 800, fontSize: "1.1rem" }}>
          <span style={{ color: "var(--oz-text)" }}>OpenZirndorf</span>{" "}
          <span style={{ color: "var(--oz-green)" }}>Portal</span>
        </span>
      </a>
      <a
        href="https://openzirndorf.de"
        style={{
          fontSize: "0.875rem",
          color: "var(--oz-text-muted)",
          textDecoration: "none",
        }}
      >
        openzirndorf.de ↗
      </a>
      <a
        href="#impressum"
        style={{
          fontSize: "0.875rem",
          color: page === "impressum" ? "var(--oz-text)" : "var(--oz-text-muted)",
          textDecoration: "none",
        }}
      >
        Impressum
      </a>
    </header>
  );
}

const LOGO = "https://openzirndorf.de/static/media/logo.png";

function Footer() {
  const linkStyle = { fontSize: "0.875rem", color: "rgba(255,255,255,0.65)", textDecoration: "none" } as const;
  const colStyle = { display: "flex", flexDirection: "column", gap: "0.4rem" } as const;
  return (
    <footer style={{ background: "var(--oz-dark, #1f2937)", marginTop: "4rem" }}>
      <div
        style={{
          maxWidth: "var(--oz-max-width)",
          margin: "0 auto",
          padding: "2rem 1.5rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <a href="https://openzirndorf.de" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
            <img src={LOGO} alt="" aria-hidden="true" width={28} height={28} style={{ borderRadius: "6px" }} />
            <span style={{ fontFamily: "var(--oz-font-heading)", fontWeight: 800 }}>
              <span style={{ color: "rgba(255,255,255,0.5)" }}>open</span>
              <span style={{ color: "var(--oz-green)" }}>zirndorf</span>
            </span>
          </a>
          <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", margin: 0 }}>
            Digitale Möglichkeiten für Zirndorf.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          <div style={colStyle}>
            <strong style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)" }}>Digitale Angebote</strong>
            <a href="https://openzirndorf.github.io/garagenflohmarkt2.0/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Garagenflohmarkt</a>
            <a href="https://wahl2026.openzirndorf.de/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Wahlanalyse 2026</a>
            <a href="https://ideen.openzirndorf.de/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Ideenbörse</a>
            <a href="https://openzirndorf.myspreadshop.de/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Shop</a>
          </div>
          <div style={colStyle}>
            <strong style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)" }}>Community</strong>
            <a href="https://join.slack.com/t/openzirndorf/shared_invite/zt-3qt1trev5-UZDu3QpOfFfLKcIQTndZ6Q" target="_blank" rel="noopener noreferrer" style={linkStyle}>Slack</a>
            <a href="https://github.com/openzirndorf" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub</a>
            <a href="https://instagram.com/openzirndorf" target="_blank" rel="noopener noreferrer" style={linkStyle}>Instagram</a>
          </div>
          <div style={colStyle}>
            <strong style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)" }}>Rechtliches</strong>
            <a href="#impressum" style={linkStyle}>Impressum</a>
            <a href="https://openzirndorf.de/datenschutz.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>Datenschutz</a>
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "1rem 1.5rem",
          textAlign: "center",
          fontSize: "0.8rem",
          color: "rgba(255,255,255,0.4)",
        }}
      >
        © {new Date().getFullYear()} OpenZirndorf · Entwickelt mit ❤️ in Zirndorf
      </div>
    </footer>
  );
}

export function App() {
  const [page, setPage] = useState(() => NAV[window.location.hash] ?? "start");

  useEffect(() => {
    const onHash = () => setPage(NAV[window.location.hash] ?? "start");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <>
      <Header page={page} />
      <main
        style={{
          maxWidth: "var(--oz-max-width)",
          margin: "0 auto",
          padding: "2rem 1.5rem 4rem",
        }}
      >
        {page === "start" && (
          <>
            <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>OpenZirndorf</h1>
            <p style={{ color: "var(--oz-text-muted)", maxWidth: "520px" }}>
              Digitale Bürgertools für Zirndorf – offen, kostenlos, von der Community gemacht.
            </p>
            <AppGrid />
          </>
        )}
        {page === "impressum" && <Impressum />}
      </main>
      <Footer />
    </>
  );
}
