import {fileURLToPath, URL} from 'url';
import {defineConfig, loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';
import nodeStdlibBrowser from 'vite-plugin-node-stdlib-browser'
import {createRequire} from 'node:module';
import path from "path";

const require = createRequire(import.meta.url);

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        base: '/',
        envDir: '.',
        build: {
            ...(mode === 'dev' && {
                sourcemap: true,
                minify: false,
            }),
            ...(mode === 'prod' && {
                sourcemap: false,
                minify: true,
            }),
        },
        rollupOptions: {
            output: {
                manualChunks: {
                    'sockjs-client': ['sockjs-client'],
                    '@stomp/stompjs': ['@stomp/stompjs']
                },
                format: 'es',
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]',
            },
        },
        plugins: [
            vue(),
            nodeStdlibBrowser(),
        ],
        server: {
            proxy: {
                '/api': mode === 'dev' ? 'http://localhost:1541' : 'http://13.210.146.57:1541',
            },
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                'util.inherits': 'util.inherits/inherits_browser.js',
            },
            extensions: [
                '.js',
                '.json',
                '.jsx',
                '.mjs',
                '.ts',
                '.tsx',
                '.vue',
            ],
        },
        define: {
            'process.env.VITE_APP_API_URL': JSON.stringify(env.VITE_APP_API_URL),
            'process.env': env,
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
            'global': {},
        },
        optimizeDeps: {
            include: ['@vue/runtime-core',
                    '@vue/shared',
                    '@stomp/stompjs',
            ],
            node: {
                polyfillNode: true,
                global: true
            }
        },
    };
});