import {fileURLToPath, URL} from 'url';
import Components from 'unplugin-vue-components/vite';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Components({
    dirs: ['src/components/app'],
    dts: true,
  }),],
  server: {
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
    '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': false, // Explicitly set the flag
  },
});
