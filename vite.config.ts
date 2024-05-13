/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@src": "/src",
			"@components": "/src/components",
			"@hooks": "/src/hooks",
			"@utils": "/src/utils",
			"@models": "/src/models",
			"@services": "/src/services",
		},
	},
	test: {
		environment: "jsdom",
		globals: true,
	},
});
