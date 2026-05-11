import { defineConfig } from '@apps-in-toss/web-framework/config';
export default defineConfig({
  appName: 'ohdogwiyeoweo',
  web: {
    port: 5173,
    commands: {
      dev: 'vite dev',
      build: 'vite build',
    },
  },
});
