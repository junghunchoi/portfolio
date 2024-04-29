import {fileURLToPath, URL} from 'url';
import Components from 'unplugin-vue-components/vite';
import {defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);

export default defineConfig(({ mode }) => {
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
    plugins: [
      vue(),
      Components({
        dirs: ['src/components/app'],
        dts: true,
      }),
    ],
    server: {
      proxy: {
        '/api': mode === 'dev' ? 'http://localhost:1541' : 'http://13.210.55.67:1541',
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    define: {
      'process.env.VITE_APP_API_URL': JSON.stringify(env.VITE_APP_API_URL),
      'process.env': env,
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    },
  };
});