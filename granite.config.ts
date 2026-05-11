import { defineConfig } from '@apps-in-toss/web-framework/config';
export default defineConfig({
  appName: 'ohdogwiyeoweo',
  brand: {
    displayName: 'Today Was Cute',
    primaryColor: '#FF6B9D',
    icon: null,
  },
  web: {
    host: 'localhost',
    port: 3000,
  commands: {
      dev: 'vite dev',
      build: 'vite build',
    },
  },
  permissions: [],
  outdir: 'dist',
});
