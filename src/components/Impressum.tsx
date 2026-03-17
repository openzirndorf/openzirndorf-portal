export function Impressum() {
  return (
    <div style={{ maxWidth: "680px" }}>
      <a href="/" style={{ fontSize: "0.875rem", color: "var(--oz-green)", textDecoration: "none" }}>
        ← Zurück
      </a>
      <h1 style={{ margin: "1rem 0 1.5rem" }}>Impressum</h1>

      <p>
        <strong>OpenZirndorf</strong>
        <br />
        Fabian Hartmann
        <br />
        Erich-Kästner-Weg 33
        <br />
        90513 Zirndorf
      </p>

      <p>
        E-Mail:{" "}
        <a href="mailto:fabian@openzirndorf.de" style={{ color: "var(--oz-green)" }}>
          fabian@openzirndorf.de
        </a>
      </p>

      <p style={{ fontSize: "0.875rem", color: "var(--oz-text-muted)" }}>
        entwickelt mit ❤️ in Zirndorf
      </p>
    </div>
  );
}
