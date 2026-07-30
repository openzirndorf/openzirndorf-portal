import { useEffect, useState } from "react";
import { AppGrid } from "./components/AppGrid";
import { Impressum } from "./components/Impressum";

const NAV: Record<string, string> = {
  "": "start",
  "#impressum": "impressum",
};

const LOGO = "https://openzirndorf.de/static/media/logo.png";

function Header({ page }: { page: string }) {
  return (
    <header className="oz-header">
      <div className="oz-header__inner">
        <a href="/" className="oz-header__brand">
          <img src={LOGO} alt="" aria-hidden="true" width={28} height={28} />
          <span className="oz-header__brand-name">
            <span>OpenZirndorf</span> <span>Portal</span>
          </span>
        </a>
        <nav className="oz-header__nav">
          <a
            className="oz-header__link"
            href="https://openzirndorf.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            openzirndorf.de ↗
          </a>
          <a
            className={`oz-header__link${page === "impressum" ? " oz-header__link--active" : ""}`}
            href="#impressum"
          >
            Impressum
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="oz-footer">
      <div className="oz-footer__inner">
        <div className="oz-footer__brand">
          <a href="https://openzirndorf.de" className="oz-footer__brand-link">
            <img
              src={LOGO}
              alt=""
              aria-hidden="true"
              width={28}
              height={28}
              style={{ borderRadius: "6px" }}
            />
            <span className="oz-footer__brand-name">
              <span>open</span>
              <span>zirndorf</span>
            </span>
          </a>
          <p className="oz-footer__claim">
            Digitale Möglichkeiten für Zirndorf – von Bürger:innen für Bürger:innen.
          </p>
        </div>

        <div className="oz-footer__cols">
          <div className="oz-footer__col">
            <strong className="oz-footer__col-title">Digitale Angebote</strong>
            <a
              className="oz-footer__link"
              href="https://sommerdetektive.openzirndorf.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sommerdetektive
            </a>
            <a
              className="oz-footer__link"
              href="https://mobil.openzirndorf.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zirndorf Mobil
            </a>
            <a
              className="oz-footer__link"
              href="https://openzirndorf.github.io/garagenflohmarkt2.0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Garagenflohmarkt
            </a>
            <a
              className="oz-footer__link"
              href="https://ideen.openzirndorf.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ideenbörse
            </a>
          </div>
          <div className="oz-footer__col">
            <strong className="oz-footer__col-title">Transparenz</strong>
            <a
              className="oz-footer__link"
              href="https://wahl2026.openzirndorf.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wahlanalyse 2026
            </a>
          </div>
          <div className="oz-footer__col">
            <strong className="oz-footer__col-title">Community</strong>
            <a
              className="oz-footer__link"
              href="https://join.slack.com/t/openzirndorf/shared_invite/zt-3qt1trev5-UZDu3QpOfFfLKcIQTndZ6Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              Slack
            </a>
            <a
              className="oz-footer__link"
              href="https://github.com/openzirndorf"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="oz-footer__link"
              href="https://instagram.com/openzirndorf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              className="oz-footer__link"
              href="https://openzirndorf.myspreadshop.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop
            </a>
          </div>
          <div className="oz-footer__col">
            <strong className="oz-footer__col-title">Rechtliches</strong>
            <a className="oz-footer__link" href="#impressum">
              Impressum
            </a>
            <a
              className="oz-footer__link"
              href="https://openzirndorf.de/datenschutz.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
      <div className="oz-footer__bottom">
        © {new Date().getFullYear()} OpenZirndorf · Gemacht mit ❤️ und ☕ in Zirndorf
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
      <main className="oz-container" style={{ paddingBottom: "3rem" }}>
        {page === "start" && (
          <>
            <div className="oz-hero">
              <span className="oz-hero__eyebrow">Bürgerinitiative · offen · kostenlos</span>
              <h1 className="oz-hero__title">Digitale Bürgertools für Zirndorf</h1>
              <p className="oz-hero__tagline">
                Alle Projekte von OpenZirndorf an einem Ort – entwickelt von der Community, für die
                Stadt. Kostenlos, werbefrei und ohne unnötiges Tracking.
              </p>
            </div>
            <AppGrid />
          </>
        )}
        {page === "impressum" && <Impressum />}
      </main>
      <Footer />
    </>
  );
}
