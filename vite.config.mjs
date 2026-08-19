import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    build: {
        outDir: 'www',
        emptyOutDir: true,
        target: 'es2019',
        chunkSizeWarningLimit: 900
    },
    server: {
        host: '0.0.0.0'
    },
    preview: {
        host: '0.0.0.0'
    }
});
