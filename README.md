# OpenZirndorf Portal

Zentraler Einstiegspunkt für alle digitalen Bürgertools von OpenZirndorf.

Live unter: `https://openzirndorf.github.io/openzirndorf-portal/`

---

## Was ist das?

Das Portal ist eine einfache Landingpage, die alle OpenZirndorf-Apps auflistet.
Neue Apps werden durch einen einzigen Eintrag in `src/apps.json` hinzugefügt –
kein Code, kein Build-Prozess.

Außerdem stellt das Portal gemeinsame Design-Tokens (`public/theme.css`) bereit,
die alle Sub-Apps einbinden können.

---

## Struktur

```
openzirndorf-portal/
├── src/
│   ├── main.tsx                  ← Einstiegspunkt
│   ├── App.tsx                   ← Routing (Landingpage / Impressum via #hash)
│   ├── apps.json                 ← App-Verzeichnis ← HIER neue Apps eintragen
│   ├── style.css                 ← Globale Styles (importiert theme-vars.css)
│   ├── theme-vars.css            ← CSS-Variablen (Farben, Fonts, Abstände)
│   └── components/
│       ├── AppGrid.tsx           ← App-Kacheln (generiert aus apps.json)
│       └── Impressum.tsx         ← Impressum-Seite
├── public/
│   ├── theme.css                 ← Standalone Design-Tokens (für Sub-Apps als CDN-Link)
│   └── favicon.svg
└── .github/workflows/deploy.yml  ← Automatisches Deployment auf GitHub Pages
```

---

## Neue App hinzufügen

Einfach einen Eintrag in `src/apps.json` ergänzen:

```json
{
  "id": "meine-neue-app",
  "name": "Meine neue App",
  "description": "Kurze Beschreibung was die App macht",
  "icon": "🗓️",
  "url": "https://openzirndorf.github.io/meine-neue-app/",
  "repo": "openzirndorf/meine-neue-app",
  "active": true
}
```

Danach committen und pushen – das Portal deployt automatisch.

---

## Lokale Entwicklung

```bash
# Abhängigkeiten installieren (einmalig)
npm install

# Entwicklungsserver starten
npm run dev
# → http://localhost:5173/
```

---

## Deployen

Das Deployment passiert **automatisch** bei jedem Push auf `main`.

### Einmalige Einrichtung

`https://github.com/openzirndorf/openzirndorf-portal/settings/pages`
→ Source: **GitHub Actions** → Speichern

---

## Design Tokens

Das Portal stellt unter `public/theme.css` gemeinsame CSS-Variablen bereit.
Sub-Apps können diese einbinden:

```html
<link rel="stylesheet" href="https://openzirndorf.github.io/openzirndorf-portal/theme.css" />
```

Oder lokal kopieren (empfohlen für Entwicklung ohne Internetverbindung).

Die Tokens beinhalten: Farben (Zirndorf-Grün, Texte, Hintergründe), Schriften
(Inter, Montserrat), Abstände, Schatten und Übergänge.

---

## Impressum

Das Impressum ist erreichbar unter:
`https://openzirndorf.github.io/openzirndorf-portal/#impressum`
