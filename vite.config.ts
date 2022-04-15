/// <reference types="vitest" />

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import jsx from '@vitejs/plugin-vue-jsx';
import ts2 from 'rollup-plugin-typescript2';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    base: '',
    plugins: [
        vue(),
        jsx(),
        {
            ...ts2({
                check: true,
                tsconfig: resolve(__dirname, `tsconfig.json`),
                tsconfigOverride: {
                    compilerOptions: {
                        sourceMap: true,
                        declaration: true,
                        declarationMap: false,
                    },
                },
            }),
            enforce: 'pre',
        },
    ],
    test: {
        globals: true,
        environment: 'happy-dom',
        transformMode: {
            web: [/.[tj]sx$/],
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    build: {
        outDir: 'lib',
        sourcemap: true,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'MeUI',
            fileName: (format) => `me-ui.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
