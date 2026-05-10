const { deleteFoldersRecursive, copyFiles } = require('@iobroker/build-tools');
const { execSync } = require('child_process');
const path = require('path');

function copyAllFiles() {
    copyFiles(
        [
            'src-widgets/build/**/*',
            '!src-widgets/build/index.html',
            '!src-widgets/build/mf-manifest.json',
            '!src-widgets/build/mf-stats.json',
        ],
        'widgets/vis-2-widgets-technic/',
    );
}

if (process.argv.includes('--copy-files')) {
    // Nur kopieren, nicht bauen
    copyAllFiles();
} else {
    // widgets/ leeren
    deleteFoldersRecursive('widgets');

    // Eigener Build mit unserer Vite Config
    console.log('Building src-widgets...');
    execSync('npm run build', {
        cwd: path.join(__dirname, 'src-widgets'),
        stdio: 'inherit',
    });

    // Build Output nach widgets/ kopieren (flach)
    copyAllFiles();
    console.log('Done!');
}