import apps from "../apps.json";

type App = {
  id: string;
  name: string;
  description: string;
  icon: string;
  url: string;
  active: boolean;
  featured?: boolean;
  status?: string;
};

function AppCard({ app }: { app: App }) {
  const featured = app.featured ?? false;
  return (
    <a
      key={app.id}
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        flexDirection: featured ? "row" : "column",
        alignItems: featured ? "center" : "flex-start",
        gap: featured ? "1.5rem" : "0.5rem",
        padding: featured ? "2rem" : "1.5rem",
        borderRadius: "var(--oz-radius-lg)",
        border: featured
          ? "2px solid var(--oz-green)"
          : "1px solid var(--oz-bg-subtle)",
        boxShadow: featured ? "var(--oz-shadow)" : "var(--oz-shadow-sm)",
        textDecoration: "none",
        color: "inherit",
        transition: "box-shadow 0.2s, transform 0.2s",
        background: featured ? "var(--oz-bg-green)" : "var(--oz-bg)",
        gridColumn: featured ? "1 / -1" : undefined,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "var(--oz-shadow)";
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = featured
          ? "var(--oz-shadow)"
          : "var(--oz-shadow-sm)";
        (e.currentTarget as HTMLAnchorElement).style.transform = "";
      }}
    >
      <span style={{ fontSize: featured ? "3rem" : "2rem", flexShrink: 0 }}>
        {app.icon}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
          <strong
            style={{
              fontFamily: "var(--oz-font-heading)",
              fontSize: featured ? "1.4rem" : "1.1rem",
            }}
          >
            {app.name}
          </strong>
          {app.status && (
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.2rem 0.6rem",
                borderRadius: "999px",
                background: "var(--oz-green)",
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {app.status}
            </span>
          )}
        </div>
        <span
          style={{
            fontSize: featured ? "1rem" : "0.875rem",
            color: "var(--oz-text-muted)",
          }}
        >
          {app.description}
        </span>
      </div>
      <span
        style={{
          fontSize: "1.2rem",
          color: "var(--oz-text-muted)",
          flexShrink: 0,
          marginLeft: "auto",
        }}
      >
        →
      </span>
    </a>
  );
}

export function AppGrid() {
  const active = apps.filter((a) => a.active) as App[];
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
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  );
}
