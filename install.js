/**
 * postinstall script für iobroker.vis-2-widgets-technic
 * Wird automatisch nach npm install ausgeführt.
 * TODO: Entfernen sobald Adapter offiziell im ioBroker Repository ist.
 */

const { execSync, spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const ADAPTER   = 'vis-2-widgets-technic';
const WIDGETS   = path.join(__dirname, 'widgets', ADAPTER);
const NAMESPACE = `vis-2/widgets/${ADAPTER}`;

// ── Hilfsfunktionen ───────────────────────────────────────
function run(cmd, ignoreError) {
    try {
        return execSync(cmd, { stdio: 'pipe', encoding: 'utf8' }).trim();
    } catch (e) {
        if (!ignoreError) console.warn(`  ⚠ ${cmd}: ${e.message.split('\n')[0]}`);
        return null;
    }
}

function uploadFile(localPath, remotePath) {
    run(`iobroker file write "${localPath}" "${NAMESPACE}/${remotePath}"`, true);
}

// ── 1. Widget-Dateien in Redis hochladen ──────────────────
console.log('\n╔══════════════════════════════════════════╗');
console.log('║   Technic Widget Install                 ║');
console.log('╚══════════════════════════════════════════╝\n');

console.log('▶ Lade Widget-Dateien hoch...');
try {
    // customWidgets.js
    uploadFile(path.join(WIDGETS, 'customWidgets.js'), 'customWidgets.js');

    // mf-manifest.json + mf-stats.json
    uploadFile(path.join(WIDGETS, 'mf-manifest.json'), 'mf-manifest.json');
    uploadFile(path.join(WIDGETS, 'mf-stats.json'), 'mf-stats.json');

    // Assets
    const assetsDir = path.join(WIDGETS, 'assets');
    if (fs.existsSync(assetsDir)) {
        const assets = fs.readdirSync(assetsDir);
        assets.forEach(f => {
            uploadFile(path.join(assetsDir, f), `assets/${f}`);
        });
    }
    console.log('✓ Widget-Dateien hochgeladen\n');
} catch (e) {
    console.error('✗ Fehler beim Hochladen:', e.message);
}

// ── 2. Instanz anlegen falls nicht vorhanden ──────────────
console.log('▶ Prüfe Adapter-Instanz...');
const instanceCheck = run(`iobroker object get system.adapter.${ADAPTER}.0`, true);
if (!instanceCheck || instanceCheck.includes('not found')) {
    console.log('  → Lege Instanz an...');
    const result = run(`iobroker add ${ADAPTER}`, true);
    if (result !== null) {
        console.log('✓ Instanz angelegt\n');
    } else {
        console.warn('⚠ Instanz konnte nicht angelegt werden – bitte manuell: iobroker add vis-2-widgets-technic\n');
    }
} else {
    console.log('✓ Instanz bereits vorhanden\n');
}

// ── 3. VIS 2 + Web neu starten ────────────────────────────
console.log('▶ Starte VIS 2 und Web neu...');
run('iobroker restart vis-2', true);
setTimeout(() => {
    run('iobroker restart web', true);
    console.log('✓ Adapter neugestartet\n');
    console.log('════════════════════════════════════════════');
    console.log('✅ Installation abgeschlossen!');
    console.log('   → Browser hard refresh: Ctrl+Shift+R');
    console.log('════════════════════════════════════════════\n');
}, 3000);