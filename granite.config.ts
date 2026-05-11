import { defineConfig } from '@apps-in-toss/web-framework/config';
export default defineConfig({
  appName: 'ohdogwiyeoweo',
  brand: {
    displayName: '오늘도 귀여웠어',
    primaryColor: '#FF6B9D',
    icon: null,
  },
  web: {
    host: 'localhost',
    port: 3000,
    commands: {
      dev: 'npm run dev',
      build: 'npm run build',
    },
  },
  permissions: [],
  outdir: 'dist/client',
});
