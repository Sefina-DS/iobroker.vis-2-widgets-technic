#!/bin/bash
# ═══════════════════════════════════════════════════════════
#  deploy.sh — Technic Widget Deploy Script
#  Nutzung: bash deploy.sh [--no-build] [--no-restart]
#
#  --no-build    Überspringt den Build-Schritt
#  --no-restart  Überspringt den VIS 2 Neustart
# ═══════════════════════════════════════════════════════════

set -e

ADAPTER="vis-2-widgets-technic"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BUILD_DIR="$SCRIPT_DIR/src-widgets/build"
VIS2_NAMESPACE="vis-2/widgets/$ADAPTER"

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
    echo "✓ Build abgeschlossen"
    echo ""
else
    echo "⏭ Build übersprungen"
fi

# ── 2. Alte Dateien aus vis-2 DB löschen ─────────────────
echo "▶ Lösche alte Widget-Dateien aus DB..."
OLD_FILES=$(iobroker file list "$VIS2_NAMESPACE/" --allow-root 2>/dev/null | grep -v "^$" | grep -v "^Dir" || true)
if [ -n "$OLD_FILES" ]; then
    while IFS= read -r line; do
        [ -z "$line" ] && continue
        iobroker file rm "$VIS2_NAMESPACE/$line" --allow-root 2>/dev/null || true
    done <<< "$OLD_FILES"
fi
echo "✓ Alte Dateien gelöscht"
echo ""

# ── 3. Neue Dateien hochladen ─────────────────────────────
echo "▶ Lade neue Dateien in VIS 2 DB hoch..."
cd "$BUILD_DIR"
COUNT=0
for f in $(find . -type f | sed 's|^\./||'); do
    iobroker file write "$(pwd)/$f" "$VIS2_NAMESPACE/$f" --allow-root > /dev/null 2>&1
    COUNT=$((COUNT + 1))
    echo "  ↑ $f"
done
echo "✓ $COUNT Dateien hochgeladen"
echo ""

# ── 4. VIS 2 neu starten ─────────────────────────────────
if [ "$NO_RESTART" = false ]; then
    echo "▶ Starte VIS 2 neu..."
    iobroker stop vis-2 --allow-root > /dev/null 2>&1
    sleep 3
    iobroker start vis-2 --allow-root > /dev/null 2>&1
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
