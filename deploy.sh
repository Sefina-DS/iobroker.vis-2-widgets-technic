#!/bin/bash
# ═══════════════════════════════════════════════════════════
#  deploy.sh — Technic Widget Deploy Script
#  Nutzung: bash deploy.sh [--no-build] [--no-restart]
# ═══════════════════════════════════════════════════════════
set -e

ADAPTER="vis-2-widgets-technic"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WWW_DIR="$SCRIPT_DIR/www"
WIDGETS_DIR="$SCRIPT_DIR/widgets/$ADAPTER"
VIS2_WWW="/opt/iobroker/node_modules/iobroker.vis-2/www/widgets/$ADAPTER"
IOBDATA="/opt/iobroker/iobroker-data/files"

NO_BUILD=false
NO_RESTART=false
for arg in "$@"; do
    case $arg in
        --no-build)    NO_BUILD=true ;;
        --no-restart)  NO_RESTART=true ;;
    esac
done

echo ""
echo "╔══════════════════════════════════════════╗"
echo "║   Technic Widget Deploy                  ║"
echo "╚══════════════════════════════════════════╝"
echo ""

# ── 1. Build ──────────────────────────────────────────────
if [ "$NO_BUILD" = false ]; then
    echo "▶ Baue Widget..."
    cd "$SCRIPT_DIR/src-widgets"
    npm run build
    cd "$SCRIPT_DIR"
    echo "✓ Build abgeschlossen"
    echo ""
else
    echo "⏭ Build übersprungen"
fi

# ── 2. Kopiere Build nach www/ ────────────────────────────
echo "▶ Aktualisiere www/..."
rm -rf "$WWW_DIR/assets"
mkdir -p "$WWW_DIR/assets"
cp -r "$SCRIPT_DIR/src-widgets/build/assets/"* "$WWW_DIR/assets/"
cp "$SCRIPT_DIR/src-widgets/build/customWidgets.js" "$WWW_DIR/customWidgets.js"
cp "$SCRIPT_DIR/src-widgets/build/mf-manifest.json" "$WWW_DIR/mf-manifest.json"
cp "$SCRIPT_DIR/src-widgets/build/mf-stats.json"    "$WWW_DIR/mf-stats.json"
echo "✓ www/ aktualisiert"
echo ""

# ── 3. Kopiere Build nach widgets/ ───────────────────────
echo "▶ Aktualisiere widgets/..."
rm -rf "$WIDGETS_DIR/assets"
mkdir -p "$WIDGETS_DIR/assets"
cp -r "$SCRIPT_DIR/src-widgets/build/assets/"* "$WIDGETS_DIR/assets/"
cp "$SCRIPT_DIR/src-widgets/build/customWidgets.js" "$WIDGETS_DIR/customWidgets.js"
cp "$SCRIPT_DIR/src-widgets/build/mf-manifest.json" "$WIDGETS_DIR/mf-manifest.json"
cp "$SCRIPT_DIR/src-widgets/build/mf-stats.json"    "$WIDGETS_DIR/mf-stats.json"
echo "✓ widgets/ aktualisiert"
echo ""

# ── 4. VIS 2 Cache leeren ────────────────────────────────
echo "▶ Leere VIS 2 Cache..."
rm -rf "$VIS2_WWW"
rm -rf "$IOBDATA/vis-2/widgets/$ADAPTER"
echo "✓ Cache geleert"
echo ""

# ── 5. Upload zu ioBroker DB ─────────────────────────────
echo "▶ Upload zu ioBroker..."
iobroker upload "$ADAPTER" --allow-root
echo "✓ Upload abgeschlossen"
echo ""

# ── 6. VIS 2 neu starten ─────────────────────────────────
if [ "$NO_RESTART" = false ]; then
    echo "▶ Starte VIS 2 neu..."
    iobroker restart vis-2 --allow-root
    echo "✓ VIS 2 neugestartet"
    echo ""
else
    echo "⏭ VIS 2 Neustart übersprungen"
fi

echo "════════════════════════════════════════════"
echo "✅ Deploy abgeschlossen!"
echo "   → Browser hard refresh: Ctrl+Shift+R"
echo "════════════════════════════════════════════"
echo ""