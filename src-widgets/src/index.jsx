import FensterRolloWidget from './FensterRolloWidget.jsx';

/**
 * VIS 2 erwartet dass Widgets sich global registrieren.
 * Das window.visWidgets Objekt wird von VIS 2 nach dem Laden
 * des customWidgets.js Bundles ausgelesen.
 */
if (!window.visWidgets) {
    window.visWidgets = {};
}

window.visWidgets.FensterRolloWidget = FensterRolloWidget;
