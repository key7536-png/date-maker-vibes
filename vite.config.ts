import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { appsInToss } from '@apps-in-toss/web-framework';

export default defineConfig({
  vite: {
    plugins: [appsInToss()]
  }
});
