import { fileURLToPath, URL } from 'url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import nodePolyfills from 'rollup-plugin-polyfill-node'
import path from "path";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    let proxyTarget;

    if (mode === 'dev') {
        proxyTarget = 'http://localhost:1541';
    } else if (mode === 'home') {
        proxyTarget = 'http:// 192.168.219.106:1541'; // 홈 서버 IP로 변경하세요
    } else if (mode === 'prod') {
        proxyTarget = 'http://49.175.22.52:1541'; // 프로덕션 서버 IP
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
        },
        plugins: [
            vue(),
            nodePolyfills({
                // 명시적으로 폴리필할 기능을 지정
                include: ['crypto', 'stream', 'buffer']
            })
        ],
        server: {
            proxy: {
                proxyTarget
            },
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
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
            'process.env.VITE_APP_URL': JSON.stringify(env.VITE_APP_URL),
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
            'global': {},
        },
        optimizeDeps: {
            include: ['@vue/runtime-core', '@vue/shared', '@stomp/stompjs'],
        },
    };
});