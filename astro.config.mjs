// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://9000-firebase-my-app-1767346414653.cluster-jgdkb37mtnfb4urxtja5guzqog.cloudworkstations.dev",
  integrations: [preact()],
});