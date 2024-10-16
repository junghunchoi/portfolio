import { fileURLToPath, URL } from 'url';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import nodePolyfills from 'rollup-plugin-polyfill-node'
import { createRequire } from 'node:module';
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve';

const require = createRequire( import.meta.url );
const mode = 'dev'
const env = loadEnv(mode, process.cwd(), '');

export default defineConfig({

    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    define: {
        'process.env.VITE_APP_API_URL': JSON.stringify(env.VITE_APP_API_URL),
        'process.env.VITE_APP_URL': JSON.stringify(env.VITE_APP_URL),
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
        'global': {},
    },
});