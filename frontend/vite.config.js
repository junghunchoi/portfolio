import { fileURLToPath, URL } from 'url';
import {resolve} from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import nodePolyfills from 'rollup-plugin-polyfill-node'
import { createRequire } from 'node:module';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const require = createRequire( import.meta.url );

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    let proxyTarget = 'http://localhost:1541';
    const defineOptions = {
        'process.env.VITE_APP_API_URL': JSON.stringify(env.VITE_APP_API_URL),
        'process.env.VITE_APP_URL': JSON.stringify(env.VITE_APP_URL),
    };

    if (mode === 'dev') {
        proxyTarget = 'http://localhost:1541';
        defineOptions['global'] = {};
    } else if (mode === 'home') {
        proxyTarget = 'http://192.168.219.106:1541';
    } else if (mode === 'prod') {
        proxyTarget = ['http://49.175.22.52:1541', 'https://junghun.site'];
    }

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
            ...(mode === 'home' && {
                sourcemap: false,
                minify: true,
            }),
        },
        plugins: [
            vue(),
        ],
        server: {
            proxy: {
                '/api': {
                    target: proxyTarget,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            },
        },
        resolve: {
            alias: {
                // '@': fileURLToPath(new URL('./src', import.meta.url)),
                '@': resolve(__dirname, './src'),
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
        define: defineOptions,
        optimizeDeps: {
            include:['@ckeditor'],
            exclude:[],
        },
    };
});