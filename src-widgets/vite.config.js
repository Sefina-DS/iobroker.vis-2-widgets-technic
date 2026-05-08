import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.jsx'),
            name: 'TechnicWidgets',
            formats: ['umd'],
            fileName: () => 'customWidgets.js',
        },
        rollupOptions: {
            // React wird von VIS 2 global bereitgestellt → nicht einbündeln
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
                // Output direkt in den widgets-Ordner den ioBroker/VIS 2 erwartet
                dir: path.resolve(__dirname, '../widgets/vis-2-widgets-technic'),
            },
        },
        minify: true,
        sourcemap: false,
    },
});
