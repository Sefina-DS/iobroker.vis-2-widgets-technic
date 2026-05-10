cat > /opt/iobroker/node_modules/iobroker.vis-2-widgets-technic/install.js << 'EOF'
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const ADAPTER = 'vis-2-widgets-technic';
const VIS2_WWW = `/opt/iobroker/node_modules/iobroker.vis-2/www/widgets/${ADAPTER}`;
const IOBDATA = `/opt/iobroker/iobroker-data/files/vis-2/widgets/${ADAPTER}`;
const WIDGETS = path.join(__dirname, 'widgets', ADAPTER);

try {
    // Berechtigungen setzen
    execSync(`chown -R iobroker:iobroker ${VIS2_WWW}`, { stdio: 'pipe' });
    
    // DB leeren
    if (fs.existsSync(IOBDATA)) {
        execSync(`rm -rf ${IOBDATA}`, { stdio: 'pipe' });
    }
    
    // DB befüllen
    fs.mkdirSync(`${IOBDATA}/assets`, { recursive: true });
    execSync(`cp -r ${VIS2_WWW}/* ${IOBDATA}/`, { stdio: 'pipe' });
    execSync(`chown -R iobroker:iobroker ${IOBDATA}`, { stdio: 'pipe' });
    
    console.log('Widget files installed successfully!');
} catch (e) {
    console.error('Install error:', e.message);
}
EOF