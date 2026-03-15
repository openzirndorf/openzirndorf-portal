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
          fontFamily: "var(--oz-font-heading)",
          fontWeight: 800,
          fontSize: "1.1rem",
          color: "var(--oz-green)",
          textDecoration: "none",
          marginRight: "auto",
        }}
      >
        OpenZirndorf
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
    </>
  );
}
