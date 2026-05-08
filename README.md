# iobroker.vis-2-widgets-technic

**Fenster & Rollo Widget für ioBroker VIS 2**

---

## Installation

### 1. Aus GitHub installieren (ioBroker Admin)

1. ioBroker Admin öffnen → **Adapter** → **Von GitHub installieren**
2. URL eingeben:
   ```
   https://github.com/Sefina-DS/iobroker.vis-2-widgets-technic
   ```
3. ioBroker neu starten oder VIS 2 Adapter neu hochladen

### 2. Widget in VIS 2 nutzen

1. VIS 2 Editor öffnen
2. Im Widget-Panel links: **Technic Widgets** → **Fenster & Rollo**
3. Widget in die View ziehen
4. Rechts im Eigenschaften-Panel konfigurieren:
   - **Fenstertyp** auswählen (LZ / LA / RZ / RA / DZ / DA)
   - **Datenpunkte** eintragen (Rollo-Position, Öffnungskontakt, Automatik, Manuell)

---

## Datenpunkte

| Eigenschaft | Typ | Beschreibung |
|---|---|---|
| `oid_rollo` | number (0–100, rw) | Rolloposition: 0 = auf, 100 = zu |
| `oid_oeffnung` | boolean (ro) | Fensterkontakt: true = geöffnet |
| `oid_automatik` | boolean (rw) | Automatikbetrieb an/aus |
| `oid_manuell` | boolean (rw) | Manueller Override an/aus |

---

## Entwicklung / Build

```bash
# Repository klonen
git clone https://github.com/Sefina-DS/iobroker.vis-2-widgets-technic
cd iobroker.vis-2-widgets-technic

# Widget bauen
npm run build
# → erzeugt: widgets/vis-2-widgets-technic/customWidgets.js

# oder direkt im src-widgets Ordner:
cd src-widgets
npm install
npm run build
```

### Dateistruktur

```
iobroker.vis-2-widgets-technic/
├── io-package.json          ← ioBroker Adapter Manifest (visWidgets Eintrag)
├── package.json
├── README.md
├── src-widgets/             ← React Quellcode
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── index.jsx        ← Widget-Registrierung
│       └── FensterRolloWidget.jsx  ← Haupt-Widget
└── widgets/
    └── vis-2-widgets-technic/
        └── customWidgets.js ← BUILD-OUTPUT (von Vite erzeugt)
```

---

## Fenstertypen

| Kürzel | Beschreibung |
|---|---|
| `LZ` | Normales Fenster, Griff links, geschlossen |
| `LA` | Fenster aufgeklappt nach links |
| `RZ` | Normales Fenster, Griff rechts, geschlossen |
| `RA` | Fenster aufgeklappt nach rechts |
| `DZ` | Dachfenster geschlossen |
| `DA` | Dachfenster geöffnet |

---

## Lizenz

MIT © Sefina-DS
