import "./virtualExposes-qTpVxCh3.js";
import "../customWidgets.js";
import { b as p, a, c as L } from "./__mfe_internal__vis2TechnicWidgets__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.mjs-D07bb3-N.js";
import "./__mfe_internal__vis2TechnicWidgets__loadShare__react__loadShare__.mjs-BINqmtDG.js";
import { a as $ } from "./__mfe_internal__vis2TechnicWidgets__loadShare___mf_0_iobroker_mf_1_vis_mf_2_2_mf_2_widgets_mf_2_react_mf_2_dev__loadShare__.mjs-BHpuGpwt.js";
import "./preload-helper-CmsKOCeN.js";
import "./__mfe_internal__vis2TechnicWidgets__loadShare__react__loadShare__.mjs_commonjs-proxy-CkJrQ5pa.js";
import "./__mfe_internal__vis2TechnicWidgets__loadShare__react_mf_2_dom__loadShare__.mjs-BAjGtrz2.js";
const i = "#2ecfbf", M = "#111318", T = "#161c24", x = "#1e2a2a", R = "#c8e6e3", u = "#5a7a78", D = "#ef9f27", Z = { LZ: "0 0 200 200", LA: "0 0 200 230", RZ: "0 0 200 200", RA: "0 0 200 230", DZ: "-5 -5 210 210", DA: "-5 -5 210 215" };
function t(e, o) {
  const l = document.createElementNS("http://www.w3.org/2000/svg", e);
  for (const [n, h] of Object.entries(o)) l.setAttribute(n, String(h));
  return l;
}
function k(e, o, l, n, h, f) {
  const s = h * ((100 - f) / 100);
  if (!(s < 1)) {
    e.appendChild(t("rect", { x: o, y: l, width: n, height: s, fill: "#1e2a2a" }));
    for (let c = l + 6; c < l + s; c += 6) e.appendChild(t("line", { x1: o, y1: c, x2: o + n, y2: c, stroke: i, "stroke-width": 0.9, opacity: 0.5 }));
    e.appendChild(t("line", { x1: o, y1: l + s, x2: o + n, y2: l + s, stroke: i, "stroke-width": 1.5 }));
  }
}
const m = (e) => 10 + (190 - e) * (51 / 180), w = (e) => 139 + (190 - e) * (51 / 180);
function W(e, o) {
  const l = 180 * ((100 - o) / 100), n = 10 + l;
  if (!(l < 1)) {
    e.appendChild(t("polygon", { points: `${m(10)},10 ${w(10)},10 ${w(n)},${n} ${m(n)},${n}`, fill: "#1e2a2a" }));
    for (let h = 16; h < n; h += 6) e.appendChild(t("line", { x1: m(h), y1: h, x2: w(h), y2: h, stroke: i, "stroke-width": 0.9, opacity: 0.5 }));
    e.appendChild(t("line", { x1: m(n), y1: n, x2: w(n), y2: n, stroke: i, "stroke-width": 1.5 }));
  }
}
const C = (e) => 57 - e * (57 / 146), g = (e) => 200 - e * (57 / 146);
function z(e, o) {
  const l = 146 * ((100 - o) / 100);
  if (!(l < 1)) {
    e.appendChild(t("polygon", { points: `${C(0)},0 ${g(0)},0 ${g(l)},${l} ${C(l)},${l}`, fill: "#1e2a2a" }));
    for (let n = 6; n < l; n += 6) e.appendChild(t("line", { x1: C(n), y1: n, x2: g(n), y2: n, stroke: i, "stroke-width": 0.9, opacity: 0.5 }));
    e.appendChild(t("line", { x1: C(l), y1: l, x2: g(l), y2: l, stroke: i, "stroke-width": 1.5 }));
  }
}
const b = { LZ(e, o) {
  e.innerHTML = "", e.appendChild(t("rect", { x: 10, y: 10, width: 180, height: 180, rx: 4, fill: "#111c22" })), k(e, 20, 20, 160, 160, o), e.appendChild(t("rect", { x: 10, y: 10, width: 180, height: 180, rx: 4, fill: "none", stroke: i, "stroke-width": 2 })), e.appendChild(t("rect", { x: 20, y: 20, width: 160, height: 160, rx: 3, fill: "none", stroke: i, "stroke-width": 1 })), e.appendChild(t("rect", { x: 168, y: 88, width: 7, height: 25, rx: 3, fill: i })), e.appendChild(t("rect", { x: 162, y: 98, width: 18, height: 7, rx: 3, fill: i }));
}, LA(e, o) {
  e.innerHTML = "", e.appendChild(t("rect", { x: 10, y: 10, width: 180, height: 180, rx: 4, fill: "#0a1015" })), k(e, 10, 10, 180, 180, o), e.appendChild(t("rect", { x: 10, y: 10, width: 180, height: 180, rx: 4, fill: "none", stroke: i, "stroke-width": 2 })), e.appendChild(t("polygon", { points: "10,10 10,190 65,220 65,40", fill: "#0d1820", stroke: i, "stroke-width": 1 })), e.appendChild(t("polygon", { points: "10,10 10,190 65,220 65,40", fill: i, "fill-opacity": 0.07 })), e.appendChild(t("line", { x1: 10, y1: 10, x2: 65, y2: 40, stroke: i, "stroke-width": 1 })), e.appendChild(t("line", { x1: 10, y1: 190, x2: 65, y2: 220, stroke: i, "stroke-width": 1 })), e.appendChild(t("rect", { x: 55, y: 118, width: 7, height: 25, rx: 3, fill: i })), e.appendChild(t("rect", { x: 49, y: 128, width: 18, height: 7, rx: 3, fill: i }));
}, RZ(e, o) {
  e.innerHTML = "", e.appendChild(t("rect", { x: 10, y: 10, width: 180, height: 180, rx: 4, fill: "#111c22" })), k(e, 20, 20, 160, 160, o), e.appendChild(t("rect", { x: 10, y: 10, width: 180, height: 180, rx: 4, fill: "none", stroke: i, "stroke-width": 2 })), e.appendChild(t("rect", { x: 20, y: 20, width: 160, height: 160, rx: 3, fill: "none", stroke: i, "stroke-width": 1 })), e.appendChild(t("rect", { x: 25, y: 88, width: 7, height: 25, rx: 3, fill: i })), e.appendChild(t("rect", { x: 20, y: 98, width: 18, height: 7, rx: 3, fill: i }));
}, RA(e, o) {
  e.innerHTML = "", e.appendChild(t("rect", { x: 10, y: 10, width: 180, height: 180, rx: 4, fill: "#0a1015" })), k(e, 10, 10, 180, 180, o), e.appendChild(t("rect", { x: 10, y: 10, width: 180, height: 180, rx: 4, fill: "none", stroke: i, "stroke-width": 2 })), e.appendChild(t("polygon", { points: "190,10 190,190 135,220 135,40", fill: "#0d1820", stroke: i, "stroke-width": 1 })), e.appendChild(t("polygon", { points: "190,10 190,190 135,220 135,40", fill: i, "fill-opacity": 0.07 })), e.appendChild(t("line", { x1: 190, y1: 10, x2: 135, y2: 40, stroke: i, "stroke-width": 1 })), e.appendChild(t("line", { x1: 190, y1: 190, x2: 135, y2: 220, stroke: i, "stroke-width": 1 })), e.appendChild(t("rect", { x: 133, y: 118, width: 7, height: 25, rx: 3, fill: i })), e.appendChild(t("rect", { x: 133, y: 128, width: 18, height: 7, rx: 3, fill: i }));
}, DZ(e, o) {
  e.innerHTML = "", e.appendChild(t("polygon", { points: "57,0 200,0 143,200 0,200", fill: "#0d1820" })), e.appendChild(t("polygon", { points: "61,10 190,10 139,190 10,190", fill: "#111c22" })), W(e, o), e.appendChild(t("line", { x1: 0, y1: 200, x2: 57, y2: 0, stroke: i, "stroke-width": 2 })), e.appendChild(t("line", { x1: 57, y1: 0, x2: 200, y2: 0, stroke: i, "stroke-width": 2 })), e.appendChild(t("line", { x1: 200, y1: 0, x2: 143, y2: 200, stroke: i, "stroke-width": 2 })), e.appendChild(t("line", { x1: 143, y1: 200, x2: 0, y2: 200, stroke: i, "stroke-width": 2 })), e.appendChild(t("polygon", { points: "61,10 190,10 139,190 10,190", fill: "none", stroke: i, "stroke-width": 1 })), e.appendChild(t("rect", { x: 59, y: 180, width: 25, height: 7, rx: 3, fill: i })), e.appendChild(t("rect", { x: 69, y: 173, width: 7, height: 16, rx: 3, fill: i }));
}, DA(e, o) {
  e.innerHTML = "", e.appendChild(t("polygon", { points: "57,0 200,0 143,200 0,200", fill: "#0d1820" })), e.appendChild(t("polygon", { points: "57,55 200,55 143,146 0,146", fill: "#111c22" })), z(e, o), e.appendChild(t("line", { x1: 0, y1: 200, x2: 15, y2: 146, stroke: i, "stroke-width": 2 })), e.appendChild(t("line", { x1: 28, y1: 100, x2: 57, y2: 0, stroke: i, "stroke-width": 2 })), e.appendChild(t("line", { x1: 57, y1: 0, x2: 200, y2: 0, stroke: i, "stroke-width": 2 })), e.appendChild(t("line", { x1: 200, y1: 0, x2: 143, y2: 200, stroke: i, "stroke-width": 2 })), e.appendChild(t("line", { x1: 143, y1: 200, x2: 0, y2: 200, stroke: i, "stroke-width": 2 })), e.appendChild(t("line", { x1: 0, y1: 146, x2: 57, y2: 55, stroke: i, "stroke-width": 1 })), e.appendChild(t("line", { x1: 57, y1: 55, x2: 184, y2: 55, stroke: i, "stroke-width": 1 })), e.appendChild(t("line", { x1: 171, y1: 100, x2: 143, y2: 146, stroke: i, "stroke-width": 1 })), e.appendChild(t("line", { x1: 143, y1: 146, x2: 0, y2: 146, stroke: i, "stroke-width": 1 })), e.appendChild(t("rect", { x: 59, y: 136, width: 25, height: 7, rx: 3, fill: i })), e.appendChild(t("rect", { x: 69, y: 129, width: 7, height: 16, rx: 3, fill: i }));
} };
class P extends $ {
  static getWidgetInfo() {
    return { id: "tplTechnicFensterRollo", visSet: "vis-2-widgets-technic", visSetLabel: "Technic Widgets", visSetColor: i, visName: "Fenster & Rollo", visWidgetLabel: "Fenster & Rollo", visDefaultStyle: { width: 220, height: 320 }, vis2: true, attrs: [{ name: "name", label: "Bezeichnung", type: "text", default: "Fenster" }, { name: "fensterTyp", label: "Fenstertyp", type: "select", options: [{ value: "LZ", label: "Links \u2013 geschlossen" }, { value: "LA", label: "Links \u2013 ge\xF6ffnet" }, { value: "RZ", label: "Rechts \u2013 geschlossen" }, { value: "RA", label: "Rechts \u2013 ge\xF6ffnet" }, { value: "DZ", label: "Dachfenster \u2013 geschlossen" }, { value: "DA", label: "Dachfenster \u2013 ge\xF6ffnet" }], default: "LZ" }, { type: "delimiter" }, { name: "oid_rollo", label: "Rollo-Position (0\u2013100)", type: "id", default: "" }, { name: "oid_oeffnung", label: "\xD6ffnungskontakt (bool)", type: "id", default: "" }, { name: "oid_automatik", label: "Rollo Automatik (bool)", type: "id", default: "" }, { name: "oid_manuell", label: "Rollo Manuell/Override (bool)", type: "id", default: "" }, { type: "delimiter" }, { name: "showName", label: "Name anzeigen", type: "checkbox", default: true }, { name: "showMode", label: "Automatik/Manuell anzeigen", type: "checkbox", default: true }] };
  }
  async propertiesUpdate() {
  }
  _redrawSVG() {
    var _a;
    if (!this.svgRef) return;
    const o = ((_a = this.state.rxData) == null ? void 0 : _a.fensterTyp) || "LZ", l = this._getRolloPct();
    b[o] && b[o](this.svgRef, l);
  }
  _getRolloPct() {
    var _a, _b;
    const o = (_b = this.state.values) == null ? void 0 : _b[`${(_a = this.state.rxData) == null ? void 0 : _a.oid_rollo}.val`];
    return o != null ? Math.round(parseFloat(o)) : 0;
  }
  _getBool(o) {
    var _a, _b;
    const l = (_a = this.state.rxData) == null ? void 0 : _a[o];
    return l ? !!((_b = this.state.values) == null ? void 0 : _b[`${l}.val`]) : false;
  }
  _setRollo(o) {
    var _a;
    const l = (_a = this.state.rxData) == null ? void 0 : _a.oid_rollo;
    !l || this.props.editMode || this.props.context.setValue(l, o);
  }
  _toggleBool(o) {
    var _a;
    const l = (_a = this.state.rxData) == null ? void 0 : _a[o];
    if (!l || this.props.editMode) return;
    const n = this._getBool(o);
    this.props.context.setValue(l, !n);
  }
  componentDidUpdate() {
    this._redrawSVG();
  }
  renderWidgetBody(o) {
    super.renderWidgetBody(o);
    const l = this.state.rxData || {}, n = l.fensterTyp || "LZ", h = Z[n], f = this._getRolloPct(), s = this._getBool("oid_oeffnung"), c = this._getBool("oid_automatik"), _ = this._getBool("oid_manuell"), A = l.showName !== false, B = l.showMode !== false, S = !!l.oid_rollo, d = { root: { background: T, border: `1px solid ${x}`, borderRadius: 10, padding: 12, fontFamily: "Arial, sans-serif", color: R, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 10, overflow: "hidden" }, header: { display: "flex", alignItems: "center", gap: 6, borderBottom: `1px solid ${x}`, paddingBottom: 8, flexShrink: 0 }, headerName: { fontSize: 13, fontWeight: 600, color: R, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, pill: (r) => ({ padding: "2px 8px", borderRadius: 20, fontSize: 10, border: `1px solid ${r}`, color: r, flexShrink: 0 }), mainRow: { display: "flex", gap: 12, alignItems: "flex-start", flex: 1, minHeight: 0 }, svgBox: { background: M, border: `1px solid ${x}`, borderRadius: 8, padding: 6, cursor: this.props.editMode ? "default" : "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }, controls: { flex: 1, display: "flex", flexDirection: "column", gap: 8, minWidth: 0 }, pctDisplay: { fontSize: 30, fontWeight: 700, color: i, textAlign: "center", letterSpacing: -1, lineHeight: 1 }, slider: { width: "100%", accentColor: i, cursor: "pointer" }, btnGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4 }, btn: (r) => ({ background: "#0f1e1d", border: `1px solid ${r ? i : x}`, color: r ? i : u, borderRadius: 5, padding: "5px 0", fontSize: 11, cursor: this.props.editMode ? "default" : "pointer", fontFamily: "Arial", textAlign: "center" }), noId: { fontSize: 11, color: u, fontStyle: "italic", textAlign: "center", padding: "8px 0" }, modeBlock: { borderTop: `1px solid ${x}`, paddingTop: 8, display: "flex", flexDirection: "column", gap: 5, flexShrink: 0 }, modeRow: { display: "flex", justifyContent: "space-between", alignItems: "center" }, modeLabel: { fontSize: 11, color: u }, modeBtn: (r, y) => ({ background: "#0f1e1d", border: `1px solid ${r ? y : x}`, color: r ? y : u, padding: "3px 12px", borderRadius: 4, fontSize: 11, cursor: this.props.editMode ? "default" : "pointer", fontFamily: "Arial", minWidth: 42, textAlign: "center" }) };
    return p("div", { style: d.root, children: [A && p("div", { style: d.header, children: [a("span", { style: d.headerName, children: l.name || "Fenster" }), l.oid_oeffnung && a("span", { style: d.pill(s ? D : i), children: s ? "offen" : "zu" })] }), p("div", { style: d.mainRow, children: [a("div", { style: d.svgBox, onClick: () => this._toggleBool("oid_oeffnung"), children: a("svg", { ref: (r) => {
      this.svgRef = r, r && b[n](r, f);
    }, viewBox: h, width: 80, height: 80 }) }), a("div", { style: d.controls, children: S ? p(L, { children: [p("div", { style: d.pctDisplay, children: [f, "%"] }), a("input", { type: "range", min: 0, max: 100, step: 1, value: f, style: d.slider, onChange: (r) => this._setRollo(parseInt(r.target.value)) }), a("div", { style: d.btnGrid, children: [{ label: "Auf", val: 0 }, { label: "50%", val: 50 }, { label: "Zu", val: 100 }].map(({ label: r, val: y }) => a("button", { style: d.btn(f === y), onClick: () => this._setRollo(y), children: r }, r)) })] }) : p("div", { style: d.noId, children: ["Rollo-ID", a("br", {}), "nicht konfiguriert"] }) })] }), B && (l.oid_automatik || l.oid_manuell) && p("div", { style: d.modeBlock, children: [l.oid_automatik && p("div", { style: d.modeRow, children: [a("span", { style: d.modeLabel, children: "Automatik" }), a("button", { style: d.modeBtn(c, i), onClick: () => this._toggleBool("oid_automatik"), children: c ? "an" : "aus" })] }), l.oid_manuell && p("div", { style: d.modeRow, children: [a("span", { style: d.modeLabel, children: "Manuell" }), a("button", { style: d.modeBtn(_, D), onClick: () => this._toggleBool("oid_manuell"), children: _ ? "aktiv" : "aus" })] })] })] });
  }
}
export {
  P as default
};
