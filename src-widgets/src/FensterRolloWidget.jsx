import React, { createRef } from 'react';

// ═══════════════════════════════════════════════════════
//  FARBEN & KONSTANTEN
// ═══════════════════════════════════════════════════════
const ACCENT   = '#2ecfbf';
const BG       = '#111318';
const CARD     = '#161c24';
const BORDER   = '#1e2a2a';
const TEXT     = '#c8e6e3';
const MUTED    = '#5a7a78';
const WARN     = '#ef9f27';

const VIEWBOXES = {
    LZ: '0 0 200 200',
    LA: '0 0 200 230',
    RZ: '0 0 200 200',
    RA: '0 0 200 230',
    DZ: '-5 -5 210 210',
    DA: '-5 -5 210 215',
};

// ═══════════════════════════════════════════════════════
//  SVG ZEICHENFUNKTIONEN (aus Bauplan übernommen)
// ═══════════════════════════════════════════════════════
function svgEl(tag, attrs) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, String(v));
    return el;
}

function rolloStripes(svg, x, y, w, h, pct) {
    const rh = h * ((100 - pct) / 100);
    if (rh < 1) return;
    svg.appendChild(svgEl('rect', { x, y, width: w, height: rh, fill: '#1e2a2a' }));
    for (let yy = y + 6; yy < y + rh; yy += 6)
        svg.appendChild(svgEl('line', { x1: x, y1: yy, x2: x + w, y2: yy, stroke: ACCENT, 'stroke-width': 0.9, opacity: 0.5 }));
    svg.appendChild(svgEl('line', { x1: x, y1: y + rh, x2: x + w, y2: y + rh, stroke: ACCENT, 'stroke-width': 1.5 }));
}

// Dachfenster zu – trapezförmige Rollo-Streifen
const lxDZ = y => 10 + (190 - y) * (51 / 180);
const rxDZ = y => 139 + (190 - y) * (51 / 180);
function rolloDachZu(svg, pct) {
    const rh = 180 * ((100 - pct) / 100);
    const yBot = 10 + rh;
    if (rh < 1) return;
    svg.appendChild(svgEl('polygon', { points: `${lxDZ(10)},10 ${rxDZ(10)},10 ${rxDZ(yBot)},${yBot} ${lxDZ(yBot)},${yBot}`, fill: '#1e2a2a' }));
    for (let y = 16; y < yBot; y += 6)
        svg.appendChild(svgEl('line', { x1: lxDZ(y), y1: y, x2: rxDZ(y), y2: y, stroke: ACCENT, 'stroke-width': 0.9, opacity: 0.5 }));
    svg.appendChild(svgEl('line', { x1: lxDZ(yBot), y1: yBot, x2: rxDZ(yBot), y2: yBot, stroke: ACCENT, 'stroke-width': 1.5 }));
}

// Dachfenster auf
const lxDA = y => 57 - y * (57 / 146);
const rxDA = y => 200 - y * (57 / 146);
function rolloDachAuf(svg, pct) {
    const rh = 146 * ((100 - pct) / 100);
    if (rh < 1) return;
    svg.appendChild(svgEl('polygon', { points: `${lxDA(0)},0 ${rxDA(0)},0 ${rxDA(rh)},${rh} ${lxDA(rh)},${rh}`, fill: '#1e2a2a' }));
    for (let y = 6; y < rh; y += 6)
        svg.appendChild(svgEl('line', { x1: lxDA(y), y1: y, x2: rxDA(y), y2: y, stroke: ACCENT, 'stroke-width': 0.9, opacity: 0.5 }));
    svg.appendChild(svgEl('line', { x1: lxDA(rh), y1: rh, x2: rxDA(rh), y2: rh, stroke: ACCENT, 'stroke-width': 1.5 }));
}

const DRAW = {
    LZ(svg, pct) {
        svg.innerHTML = '';
        svg.appendChild(svgEl('rect', { x: 10, y: 10, width: 180, height: 180, rx: 4, fill: '#111c22' }));
        rolloStripes(svg, 20, 20, 160, 160, pct);
        svg.appendChild(svgEl('rect', { x: 10, y: 10, width: 180, height: 180, rx: 4, fill: 'none', stroke: ACCENT, 'stroke-width': 2 }));
        svg.appendChild(svgEl('rect', { x: 20, y: 20, width: 160, height: 160, rx: 3, fill: 'none', stroke: ACCENT, 'stroke-width': 1 }));
        // Griff rechts
        svg.appendChild(svgEl('rect', { x: 168, y: 88, width: 7, height: 25, rx: 3, fill: ACCENT }));
        svg.appendChild(svgEl('rect', { x: 162, y: 98, width: 18, height: 7, rx: 3, fill: ACCENT }));
    },
    LA(svg, pct) {
        svg.innerHTML = '';
        svg.appendChild(svgEl('rect', { x: 10, y: 10, width: 180, height: 180, rx: 4, fill: '#0a1015' }));
        rolloStripes(svg, 10, 10, 180, 180, pct);
        svg.appendChild(svgEl('rect', { x: 10, y: 10, width: 180, height: 180, rx: 4, fill: 'none', stroke: ACCENT, 'stroke-width': 2 }));
        // Flügel links auf
        svg.appendChild(svgEl('polygon', { points: '10,10 10,190 65,220 65,40', fill: '#0d1820', stroke: ACCENT, 'stroke-width': 1 }));
        svg.appendChild(svgEl('polygon', { points: '10,10 10,190 65,220 65,40', fill: ACCENT, 'fill-opacity': 0.07 }));
        svg.appendChild(svgEl('line', { x1: 10, y1: 10, x2: 65, y2: 40, stroke: ACCENT, 'stroke-width': 1 }));
        svg.appendChild(svgEl('line', { x1: 10, y1: 190, x2: 65, y2: 220, stroke: ACCENT, 'stroke-width': 1 }));
        svg.appendChild(svgEl('rect', { x: 55, y: 118, width: 7, height: 25, rx: 3, fill: ACCENT }));
        svg.appendChild(svgEl('rect', { x: 49, y: 128, width: 18, height: 7, rx: 3, fill: ACCENT }));
    },
    RZ(svg, pct) {
        svg.innerHTML = '';
        svg.appendChild(svgEl('rect', { x: 10, y: 10, width: 180, height: 180, rx: 4, fill: '#111c22' }));
        rolloStripes(svg, 20, 20, 160, 160, pct);
        svg.appendChild(svgEl('rect', { x: 10, y: 10, width: 180, height: 180, rx: 4, fill: 'none', stroke: ACCENT, 'stroke-width': 2 }));
        svg.appendChild(svgEl('rect', { x: 20, y: 20, width: 160, height: 160, rx: 3, fill: 'none', stroke: ACCENT, 'stroke-width': 1 }));
        // Griff links
        svg.appendChild(svgEl('rect', { x: 25, y: 88, width: 7, height: 25, rx: 3, fill: ACCENT }));
        svg.appendChild(svgEl('rect', { x: 20, y: 98, width: 18, height: 7, rx: 3, fill: ACCENT }));
    },
    RA(svg, pct) {
        svg.innerHTML = '';
        svg.appendChild(svgEl('rect', { x: 10, y: 10, width: 180, height: 180, rx: 4, fill: '#0a1015' }));
        rolloStripes(svg, 10, 10, 180, 180, pct);
        svg.appendChild(svgEl('rect', { x: 10, y: 10, width: 180, height: 180, rx: 4, fill: 'none', stroke: ACCENT, 'stroke-width': 2 }));
        // Flügel rechts auf
        svg.appendChild(svgEl('polygon', { points: '190,10 190,190 135,220 135,40', fill: '#0d1820', stroke: ACCENT, 'stroke-width': 1 }));
        svg.appendChild(svgEl('polygon', { points: '190,10 190,190 135,220 135,40', fill: ACCENT, 'fill-opacity': 0.07 }));
        svg.appendChild(svgEl('line', { x1: 190, y1: 10, x2: 135, y2: 40, stroke: ACCENT, 'stroke-width': 1 }));
        svg.appendChild(svgEl('line', { x1: 190, y1: 190, x2: 135, y2: 220, stroke: ACCENT, 'stroke-width': 1 }));
        svg.appendChild(svgEl('rect', { x: 133, y: 118, width: 7, height: 25, rx: 3, fill: ACCENT }));
        svg.appendChild(svgEl('rect', { x: 133, y: 128, width: 18, height: 7, rx: 3, fill: ACCENT }));
    },
    DZ(svg, pct) {
        svg.innerHTML = '';
        svg.appendChild(svgEl('polygon', { points: '57,0 200,0 143,200 0,200', fill: '#0d1820' }));
        svg.appendChild(svgEl('polygon', { points: '61,10 190,10 139,190 10,190', fill: '#111c22' }));
        rolloDachZu(svg, pct);
        svg.appendChild(svgEl('line', { x1: 0, y1: 200, x2: 57, y2: 0, stroke: ACCENT, 'stroke-width': 2 }));
        svg.appendChild(svgEl('line', { x1: 57, y1: 0, x2: 200, y2: 0, stroke: ACCENT, 'stroke-width': 2 }));
        svg.appendChild(svgEl('line', { x1: 200, y1: 0, x2: 143, y2: 200, stroke: ACCENT, 'stroke-width': 2 }));
        svg.appendChild(svgEl('line', { x1: 143, y1: 200, x2: 0, y2: 200, stroke: ACCENT, 'stroke-width': 2 }));
        svg.appendChild(svgEl('polygon', { points: '61,10 190,10 139,190 10,190', fill: 'none', stroke: ACCENT, 'stroke-width': 1 }));
        svg.appendChild(svgEl('rect', { x: 59, y: 180, width: 25, height: 7, rx: 3, fill: ACCENT }));
        svg.appendChild(svgEl('rect', { x: 69, y: 173, width: 7, height: 16, rx: 3, fill: ACCENT }));
    },
    DA(svg, pct) {
        svg.innerHTML = '';
        svg.appendChild(svgEl('polygon', { points: '57,0 200,0 143,200 0,200', fill: '#0d1820' }));
        svg.appendChild(svgEl('polygon', { points: '57,55 200,55 143,146 0,146', fill: '#111c22' }));
        rolloDachAuf(svg, pct);
        svg.appendChild(svgEl('line', { x1: 0, y1: 200, x2: 15, y2: 146, stroke: ACCENT, 'stroke-width': 2 }));
        svg.appendChild(svgEl('line', { x1: 28, y1: 100, x2: 57, y2: 0, stroke: ACCENT, 'stroke-width': 2 }));
        svg.appendChild(svgEl('line', { x1: 57, y1: 0, x2: 200, y2: 0, stroke: ACCENT, 'stroke-width': 2 }));
        svg.appendChild(svgEl('line', { x1: 200, y1: 0, x2: 143, y2: 200, stroke: ACCENT, 'stroke-width': 2 }));
        svg.appendChild(svgEl('line', { x1: 143, y1: 200, x2: 0, y2: 200, stroke: ACCENT, 'stroke-width': 2 }));
        svg.appendChild(svgEl('line', { x1: 0, y1: 146, x2: 57, y2: 55, stroke: ACCENT, 'stroke-width': 1 }));
        svg.appendChild(svgEl('line', { x1: 57, y1: 55, x2: 184, y2: 55, stroke: ACCENT, 'stroke-width': 1 }));
        svg.appendChild(svgEl('line', { x1: 171, y1: 100, x2: 143, y2: 146, stroke: ACCENT, 'stroke-width': 1 }));
        svg.appendChild(svgEl('line', { x1: 143, y1: 146, x2: 0, y2: 146, stroke: ACCENT, 'stroke-width': 1 }));
        svg.appendChild(svgEl('rect', { x: 59, y: 136, width: 25, height: 7, rx: 3, fill: ACCENT }));
        svg.appendChild(svgEl('rect', { x: 69, y: 129, width: 7, height: 16, rx: 3, fill: ACCENT }));
    },
};

// ═══════════════════════════════════════════════════════
//  WIDGET DEFINITION (statisch, für VIS 2 Editor)
// ═══════════════════════════════════════════════════════
const WIDGET_INFO = {
    id: 'tplTechnicFensterRollo',

    // Gruppe im Widget-Panel
    visSet:       'vis-2-widgets-technic',
    visSetLabel:  'Technic Widgets',
    visSetColor:  ACCENT,

    // Widget-Name
    visName:        'Fenster & Rollo',
    visWidgetLabel: 'Fenster & Rollo',

    // Standard-Größe wenn ins View gezogen
    visDefaultStyle: { width: 220, height: 320 },

    // VIS 2 Editor Properties → erscheinen im Eigenschaften-Panel rechts
    vis2: true,
    attrs: [
        // ── Allgemein ──────────────────────────────────
        {
            name:    'name',
            label:   'Bezeichnung',
            tooltip: 'Wird als Titel über dem Widget angezeigt',
            type:    'text',
            default: 'Fenster',
        },
        {
            name:    'fensterTyp',
            label:   'Fenstertyp',
            type:    'select',
            options: [
                { value: 'LZ', label: 'Links – geschlossen' },
                { value: 'LA', label: 'Links – geöffnet' },
                { value: 'RZ', label: 'Rechts – geschlossen' },
                { value: 'RA', label: 'Rechts – geöffnet' },
                { value: 'DZ', label: 'Dachfenster – geschlossen' },
                { value: 'DA', label: 'Dachfenster – geöffnet' },
            ],
            default: 'LZ',
        },

        // ── Datenpunkte ────────────────────────────────
        { type: 'delimiter' },
        {
            name:    'oid_rollo',
            label:   'Rollo-Position (0–100)',
            tooltip: 'Datenpunkt für Rolloposition. 0 = auf, 100 = zu',
            type:    'id',
            default: '',
        },
        {
            name:    'oid_oeffnung',
            label:   'Öffnungskontakt (bool)',
            tooltip: 'Fensterkontakt – true = geöffnet',
            type:    'id',
            default: '',
        },
        {
            name:    'oid_automatik',
            label:   'Rollo Automatik (bool)',
            tooltip: 'Automatikbetrieb an/aus',
            type:    'id',
            default: '',
        },
        {
            name:    'oid_manuell',
            label:   'Rollo Manuell/Override (bool)',
            tooltip: 'Manueller Override an/aus',
            type:    'id',
            default: '',
        },

        // ── Darstellung ────────────────────────────────
        { type: 'delimiter' },
        {
            name:    'showName',
            label:   'Name anzeigen',
            type:    'checkbox',
            default: true,
        },
        {
            name:    'showMode',
            label:   'Automatik/Manuell anzeigen',
            type:    'checkbox',
            default: true,
        },
    ],
};

// ═══════════════════════════════════════════════════════
//  REACT WIDGET KOMPONENTE
//
//  VIS 2 übergibt folgende Props:
//    context         – { setValue, socket, ... }
//    data            – { name, fensterTyp, oid_rollo, ... }  (die attrs-Werte)
//    style           – CSS Objekt (Größe usw.)
//    editMode        – true wenn im VIS 2 Editor
// ═══════════════════════════════════════════════════════
class FensterRolloWidget extends React.Component {

    // VIS 2 liest diese statische Methode aus um das Widget zu registrieren
    static getWidgetInfo() {
        return WIDGET_INFO;
    }

    constructor(props) {
        super(props);
        this.svgRef = createRef();
        this.state = {
            rolloVal:  0,
            oeffnung:  false,
            automatik: false,
            manuell:   false,
            dragging:  false,
        };
        this._subscriptions = [];
    }

    // ── Lifecycle ──────────────────────────────────────
    componentDidMount() {
        this._subscribe();
    }

    componentDidUpdate(prevProps) {
        const d  = this.props.data   || {};
        const pd = prevProps.data    || {};

        // IDs haben sich geändert → neu subscriben
        if (
            d.oid_rollo    !== pd.oid_rollo    ||
            d.oid_oeffnung !== pd.oid_oeffnung ||
            d.oid_automatik !== pd.oid_automatik ||
            d.oid_manuell  !== pd.oid_manuell
        ) {
            this._unsubscribe();
            this._subscribe();
        }

        // SVG neu zeichnen (bei State-Änderung)
        this._redrawSVG();
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    // ── State-Subscription ─────────────────────────────
    _subscribe() {
        const { context, data } = this.props;
        if (!context?.socket || !data) return;

        const oids = {
            oid_rollo:    data.oid_rollo,
            oid_oeffnung: data.oid_oeffnung,
            oid_automatik: data.oid_automatik,
            oid_manuell:  data.oid_manuell,
        };

        for (const [key, oid] of Object.entries(oids)) {
            if (!oid) continue;

            // Initialen Wert lesen
            context.socket.getState(oid).then(state => {
                if (state) this._onStateChange(key, state.val);
            }).catch(() => {});

            // Auf Änderungen subscriben
            const handler = (id, state) => {
                if (id === oid && state) this._onStateChange(key, state.val);
            };
            context.socket.subscribeState(oid, handler);
            this._subscriptions.push({ oid, handler });
        }
    }

    _unsubscribe() {
        const { context } = this.props;
        if (!context?.socket) return;
        for (const { oid, handler } of this._subscriptions) {
            context.socket.unsubscribeState(oid, handler);
        }
        this._subscriptions = [];
    }

    _onStateChange(key, val) {
        const map = {
            oid_rollo:    'rolloVal',
            oid_oeffnung: 'oeffnung',
            oid_automatik: 'automatik',
            oid_manuell:  'manuell',
        };
        const stateKey = map[key];
        if (!stateKey) return;

        const parsed = key === 'oid_rollo'
            ? Math.round(parseFloat(val) || 0)
            : !!val;

        this.setState({ [stateKey]: parsed });
    }

    // ── SVG Zeichnen ───────────────────────────────────
    _redrawSVG() {
        if (!this.svgRef.current) return;
        const typ = (this.props.data?.fensterTyp) || 'LZ';
        const fn = DRAW[typ];
        if (fn) fn(this.svgRef.current, this.state.rolloVal);
    }

    // ── Aktionen (schreiben in ioBroker) ──────────────
    _setRollo(val) {
        const oid = this.props.data?.oid_rollo;
        if (!oid || this.props.editMode) return;
        this.props.context.setValue(oid, val);
        this.setState({ rolloVal: val });
    }

    _toggleBool(oidKey) {
        const oid = this.props.data?.[oidKey];
        if (!oid || this.props.editMode) return;
        const stateMap = { oid_automatik: 'automatik', oid_manuell: 'manuell', oid_oeffnung: 'oeffnung' };
        const cur = this.state[stateMap[oidKey]];
        this.props.context.setValue(oid, !cur);
    }

    // ── Render ─────────────────────────────────────────
    render() {
        const { data = {}, editMode } = this.props;
        const { rolloVal, oeffnung, automatik, manuell } = this.state;

        const typ      = data.fensterTyp || 'LZ';
        const vb       = VIEWBOXES[typ];
        const showName = data.showName !== false;
        const showMode = data.showMode !== false;
        const hasRollo = !!data.oid_rollo;

        // ── Styles (inline, kein CSS-File nötig) ──────
        const s = {
            root: {
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 10,
                padding: 12,
                fontFamily: 'Arial, sans-serif',
                color: TEXT,
                height: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                overflow: 'hidden',
            },
            header: {
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                borderBottom: `1px solid ${BORDER}`,
                paddingBottom: 8,
                flexShrink: 0,
            },
            headerName: {
                fontSize: 13,
                fontWeight: 600,
                color: TEXT,
                flex: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            },
            pill: (color) => ({
                padding: '2px 8px',
                borderRadius: 20,
                fontSize: 10,
                border: `1px solid ${color}`,
                color,
                flexShrink: 0,
            }),
            // SVG + Steuerung nebeneinander
            mainRow: {
                display: 'flex',
                gap: 12,
                alignItems: 'flex-start',
                flex: 1,
                minHeight: 0,
            },
            svgBox: {
                background: BG,
                border: `1px solid ${BORDER}`,
                borderRadius: 8,
                padding: 6,
                cursor: editMode ? 'default' : 'pointer',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            controls: {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                minWidth: 0,
            },
            pctDisplay: {
                fontSize: 30,
                fontWeight: 700,
                color: ACCENT,
                textAlign: 'center',
                letterSpacing: -1,
                lineHeight: 1,
            },
            slider: {
                width: '100%',
                accentColor: ACCENT,
                cursor: 'pointer',
            },
            btnGrid: {
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 4,
            },
            btn: (active) => ({
                background: '#0f1e1d',
                border: `1px solid ${active ? ACCENT : BORDER}`,
                color: active ? ACCENT : MUTED,
                borderRadius: 5,
                padding: '5px 0',
                fontSize: 11,
                cursor: editMode ? 'default' : 'pointer',
                fontFamily: 'Arial',
                textAlign: 'center',
                transition: 'border-color .12s, color .12s',
            }),
            noId: {
                fontSize: 11,
                color: MUTED,
                fontStyle: 'italic',
                textAlign: 'center',
                padding: '8px 0',
            },
            modeBlock: {
                borderTop: `1px solid ${BORDER}`,
                paddingTop: 8,
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                flexShrink: 0,
            },
            modeRow: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            },
            modeLabel: { fontSize: 11, color: MUTED },
            modeBtn: (on, col) => ({
                background: '#0f1e1d',
                border: `1px solid ${on ? col : BORDER}`,
                color: on ? col : MUTED,
                padding: '3px 12px',
                borderRadius: 4,
                fontSize: 11,
                cursor: editMode ? 'default' : 'pointer',
                fontFamily: 'Arial',
                minWidth: 42,
                textAlign: 'center',
            }),
        };

        return (
            <div style={s.root}>

                {/* ── Header ── */}
                {showName && (
                    <div style={s.header}>
                        <span style={s.headerName}>{data.name || 'Fenster'}</span>
                        {data.oid_oeffnung && (
                            <span style={s.pill(oeffnung ? WARN : ACCENT)}>
                                {oeffnung ? 'offen' : 'zu'}
                            </span>
                        )}
                    </div>
                )}

                {/* ── SVG + Rollo-Steuerung ── */}
                <div style={s.mainRow}>

                    {/* Fenster SVG – Klick togglet Öffnungskontakt */}
                    <div
                        style={s.svgBox}
                        title={data.oid_oeffnung ? (oeffnung ? 'Fenster offen' : 'Fenster geschlossen') : 'Kein Öffnungskontakt konfiguriert'}
                        onClick={() => this._toggleBool('oid_oeffnung')}
                    >
                        <svg
                            ref={this.svgRef}
                            viewBox={vb}
                            width={80}
                            height={80}
                        />
                    </div>

                    {/* Rollo Steuerung */}
                    <div style={s.controls}>
                        {hasRollo ? (
                            <>
                                <div style={s.pctDisplay}>{rolloVal}%</div>
                                <input
                                    type="range"
                                    min={0} max={100} step={1}
                                    value={rolloVal}
                                    style={s.slider}
                                    onChange={e => this._setRollo(parseInt(e.target.value))}
                                />
                                <div style={s.btnGrid}>
                                    {[
                                        { label: 'Auf',  val: 0   },
                                        { label: '50%',  val: 50  },
                                        { label: 'Zu',   val: 100 },
                                    ].map(({ label, val }) => (
                                        <button
                                            key={label}
                                            style={s.btn(rolloVal === val)}
                                            onClick={() => this._setRollo(val)}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div style={s.noId}>
                                Rollo-ID<br />nicht konfiguriert
                            </div>
                        )}
                    </div>
                </div>

                {/* ── Automatik / Manuell ── */}
                {showMode && (data.oid_automatik || data.oid_manuell) && (
                    <div style={s.modeBlock}>
                        {data.oid_automatik && (
                            <div style={s.modeRow}>
                                <span style={s.modeLabel}>Automatik</span>
                                <button
                                    style={s.modeBtn(automatik, ACCENT)}
                                    onClick={() => this._toggleBool('oid_automatik')}
                                >
                                    {automatik ? 'an' : 'aus'}
                                </button>
                            </div>
                        )}
                        {data.oid_manuell && (
                            <div style={s.modeRow}>
                                <span style={s.modeLabel}>Manuell</span>
                                <button
                                    style={s.modeBtn(manuell, WARN)}
                                    onClick={() => this._toggleBool('oid_manuell')}
                                >
                                    {manuell ? 'aktiv' : 'aus'}
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default FensterRolloWidget;
