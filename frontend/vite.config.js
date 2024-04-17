import {fileURLToPath, URL} from 'url';
import Components from 'unplugin-vue-components/vite';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

// ckeditor
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';
import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);

export default defineConfig({
  envDir: '.',
  plugins: [vue(), Components({
    dirs: ['src/components/app'],
    dts: true,
  }),
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:1541'
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
