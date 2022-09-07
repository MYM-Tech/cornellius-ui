/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
    },
    plugins: [
        vue({
            customElement: true,
        }),
        cssInjectedByJsPlugin(),
        vueJsx(),
    ],
    test: {
        globals: true,
        environment: 'happy-dom',
    },
    build: {
        lib: {
            name: 'cornellius-ui',
            entry: resolve(__dirname, 'src/index.tsx'),
            fileName: (format) => `cornellius-ui.${format}.js`,
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                // Since we publish our ./src folder, there's no point
                // in bloating sourcemaps with another copy of it.
                sourcemapExcludeSources: true,
                globals: {
                    vue: 'Vue',
                },
            },
        },
        sourcemap: true,
        // Reduce bloat from legacy polyfills.
        target: 'esnext',
        // Leave minification up to applications.
        minify: true,
        ssr: false,
    },

    css: {
        devSourcemap: false,
        modules: {
          // scopeBehaviour: 'global',
        }
    },
});
