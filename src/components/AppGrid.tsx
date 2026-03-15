import apps from "../apps.json";

export function AppGrid() {
  const active = apps.filter((a) => a.active);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "1.5rem",
        marginTop: "2rem",
      }}
    >
      {active.map((app) => (
        <a
          key={app.id}
          href={app.url}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "1.5rem",
            borderRadius: "var(--oz-radius-lg)",
            border: "1px solid var(--oz-bg-subtle)",
            boxShadow: "var(--oz-shadow-sm)",
            textDecoration: "none",
            color: "inherit",
            transition: "box-shadow 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "var(--oz-shadow)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "var(--oz-shadow-sm)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "";
          }}
        >
          <span style={{ fontSize: "2rem" }}>{app.icon}</span>
          <strong style={{ fontFamily: "var(--oz-font-heading)", fontSize: "1.1rem" }}>
            {app.name}
          </strong>
          <span style={{ fontSize: "0.875rem", color: "var(--oz-text-muted)" }}>
            {app.description}
          </span>
        </a>
      ))}
    </div>
  );
}
