export function Impressum() {
  return (
    <div style={{ maxWidth: "680px" }}>
      <h1 style={{ marginBottom: "1.5rem" }}>Impressum</h1>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>Angaben gemäß § 5 TMG</h2>
        <p>
          {/* TODO: Name und Adresse eintragen */}
          Vorname Nachname<br />
          Musterstraße 1<br />
          90513 Zirndorf
        </p>
      </section>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>Kontakt</h2>
        <p>
          E-Mail: {/* TODO: E-Mail eintragen */}
          <a href="mailto:kontakt@openzirndorf.de">kontakt@openzirndorf.de</a>
        </p>
      </section>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>Hinweis</h2>
        <p style={{ fontSize: "0.875rem", color: "var(--oz-text-muted)" }}>
          Dies ist ein gemeinschaftliches, nicht-kommerzielles Projekt der Zirndorfer Bürgerinnen
          und Bürger. Es besteht keine Verbindung zur Stadt Zirndorf.
        </p>
      </section>
    </div>
  );
}
