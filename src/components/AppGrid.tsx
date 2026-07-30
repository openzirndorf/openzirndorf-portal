import apps from "../apps.json";

type Category = "buerger" | "transparenz" | "erleben";

type App = {
  id: string;
  name: string;
  description: string;
  icon: string;
  url: string;
  category: Category;
  active: boolean;
  featured?: boolean;
  status?: string;
  wip?: boolean;
};

const SECTIONS: { id: Category; title: string; desc: string }[] = [
  {
    id: "buerger",
    title: "Bürger-Tools",
    desc: "Digitale Angebote, die im Alltag helfen.",
  },
  {
    id: "transparenz",
    title: "Transparenz & Daten",
    desc: "Offene Auswertungen zu Politik und Verwaltung.",
  },
  {
    id: "erleben",
    title: "Mitmachen & Erleben",
    desc: "Aktionen und Kampagnen zum Mitmachen.",
  },
];

function Badge({ app }: { app: App }) {
  if (app.wip) return <span className="oz-badge oz-badge--wip">{app.status ?? "In Arbeit"}</span>;
  if (app.status === "Live") return <span className="oz-badge oz-badge--live">Live</span>;
  if (app.status) return <span className="oz-badge oz-badge--neutral">{app.status}</span>;
  return null;
}

function AppCard({ app }: { app: App }) {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`oz-card${app.featured ? " oz-card--featured" : ""}`}
    >
      <span className="oz-card__icon" aria-hidden="true">
        {app.icon}
      </span>
      <div className="oz-card__body">
        <div className="oz-card__title-row">
          <strong className="oz-card__title">{app.name}</strong>
          <Badge app={app} />
        </div>
        <span className="oz-card__desc">{app.description}</span>
      </div>
      <span className="oz-card__arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}

export function AppGrid() {
  const active = (apps as App[]).filter((a) => a.active);

  return (
    <>
      {SECTIONS.map((section) => {
        const inSection = active.filter((a) => a.category === section.id);
        if (inSection.length === 0) return null;
        return (
          <section
            className="oz-section"
            key={section.id}
            aria-labelledby={`section-${section.id}`}
          >
            <div className="oz-section__header">
              <h2 className="oz-section__title" id={`section-${section.id}`}>
                {section.title}
              </h2>
              <span className="oz-section__desc">{section.desc}</span>
            </div>
            <div className="oz-grid">
              {inSection.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          </section>
        );
      })}

      <p className="oz-extras">
        <span aria-hidden="true">🏊</span>
        <span>
          Und dann war da noch{" "}
          <a href="https://bad.openzirndorf.de/" target="_blank" rel="noopener noreferrer">
            Bibertbad Digital
          </a>{" "}
          – unser Aprilscherz vom 1. April 2026. Keine echte Ankündigung, nur ein bisschen Spaß.
        </span>
      </p>
    </>
  );
}
