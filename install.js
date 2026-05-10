const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const ADAPTER = 'vis-2-widgets-technic';
const VIS2_WWW = path.join('/opt/iobroker/node_modules/iobroker.vis-2/www/widgets', ADAPTER);
const IOBDATA = path.join('/opt/iobroker/iobroker-data/files/vis-2/widgets', ADAPTER);

try {
    execSync('chown -R iobroker:iobroker ' + VIS2_WWW, { stdio: 'pipe' });
    if (fs.existsSync(IOBDATA)) {
        execSync('rm -rf ' + IOBDATA, { stdio: 'pipe' });
    }
    fs.mkdirSync(IOBDATA + '/assets', { recursive: true });
    execSync('cp -r ' + VIS2_WWW + '/. ' + IOBDATA + '/', { stdio: 'pipe' });
    execSync('chown -R iobroker:iobroker ' + IOBDATA, { stdio: 'pipe' });
    execSync('iobroker restart web', { stdio: 'pipe' });
    console.log('Widget files installed successfully!');
} catch (e) {
    console.error('Install error:', e.message);
}
