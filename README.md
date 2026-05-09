# iobroker.vis-2-widgets-technic

**Fenster & Rollo Widget für ioBroker VIS 2**

---

## Schnellstart

### Installation (einmalig)

```bash
# In ioBroker Admin → Adapter → Von GitHub installieren
https://github.com/Sefina-DS/iobroker.vis-2-widgets-technic

# Dateien in VIS 2 DB hochladen (einmalig nach Installation)
cd /opt/iobroker/node_modules/iobroker.vis-2-widgets-technic
bash deploy.sh
```

---

## Entwicklungs-Workflow

### Änderung machen → testen

```bash
# 1. Widget-Code bearbeiten
nano src-widgets/src/DemoWidget.jsx

# 2. Deploy (bauen + hochladen + VIS 2 neu starten)
bash deploy.sh

# 3. Browser hard refresh
Ctrl+Shift+R
```

### Deploy-Optionen

```bash
bash deploy.sh                # Vollständiger Deploy (Build + Upload + Neustart)
bash deploy.sh --no-build     # Nur Upload + Neustart (wenn Build schon aktuell)
bash deploy.sh --no-restart   # Nur Build + Upload (kein VIS 2 Neustart)
```

---

## Dateistruktur

```
iobroker.vis-2-widgets-technic/
├── io-package.json              ← ioBroker Adapter Manifest
├── package.json
├── deploy.sh                    ← Deploy Script für Entwicklung ⭐
├── README.md
├── src-widgets/                 ← React Quellcode
│   ├── package.json
│   ├── vite.config.ts
│   └── src/
│       ├── index.jsx            ← Widget-Registrierung
│       ├── DemoWidget.jsx       ← Haupt-Widget
│       ├── translations.js
│       └── i18n/               ← Übersetzungen
│           ├── de.json
│           ├── en.json
│           └── ...
└── widgets/                     ← Fertige Build-Dateien (für GitHub)
    └── vis-2-widgets-technic/
        └── customWidgets.js
```

---

## Wie funktioniert der Deploy?

ioBroker VIS 2 serviert Widget-Dateien aus der **ioBroker Dateidatenbank** unter dem Namespace `vis-2/widgets/`. Das `deploy.sh` Script:

1. **Baut** den React-Code mit Vite (`npm run build`)
2. **Löscht** alte Dateien aus der DB (`vis-2/widgets/vis-2-widgets-technic/`)
3. **Lädt** neue Dateien hoch (`iobroker file write` → `vis-2/widgets/...`)
4. **Startet** VIS 2 neu damit der neue Code geladen wird

> **Wichtig:** `iobroker upload vis-2-widgets-technic` reicht **nicht** — die Dateien müssen explizit in den `vis-2` Namespace hochgeladen werden!

---

## Widget in VIS 2 nutzen

1. VIS 2 Editor öffnen
2. Im Widget-Panel: **vis_2_widgets_template** → Widget reinziehen
3. Rechts im Eigenschaften-Panel konfigurieren

---

## Auf GitHub pushen

```bash
# Nach einer fertigen Änderung:
git add .
git commit -m "Beschreibung der Änderung"
git push
```

---

## Lizenz

MIT © Sefina-DS
