// vite.config.ts
import { defineConfig } from 'vite';
import path from 'path';
import banner from 'vite-plugin-banner';
import packageJson from './package.json';
const year = new Date().getFullYear();

const puiHeader = [
  '/* **********************************************',
  `  Sample CSS and JavaScript`,
  '********************************************** */',
  '',
].join('\n');

export default defineConfig({
  plugins: [
    banner(puiHeader)
  ],
  build: {
    cssFileName: 'demo.css',
    lib: {
      entry: path.resolve(__dirname, 'demo.js'),
      name: `${packageJson.otherDetails.properName}`,
      fileName: () => `${packageJson.name}.js`,
    },
    outDir: 'demo',
    rollupOptions: {
      output: {
        assetFileNames: "demo.[ext]",
      },
    },
  },
});