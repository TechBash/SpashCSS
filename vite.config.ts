// vite.config.ts
import { defineConfig } from 'vite';
import path from 'path';
import banner from 'vite-plugin-banner';
import packageJson from './package.json';
const year = new Date().getFullYear();

const puiHeader = [
  '/* **********************************************',
  `  ${packageJson.otherDetails.properName} v${packageJson.version}\n`,
  `  ${packageJson.description} (${packageJson.homepage})`,
  `  ©${year} ${packageJson.author}`,
  `  Released under the ${packageJson.license} license.`,
  '********************************************** */',
  '',
].join('\n');

export default defineConfig({
  plugins: [
    banner(puiHeader)
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'default.js'),
      name: `${packageJson.otherDetails.properName}`,
      fileName: () => `${packageJson.name}.js`,
    },
  },
});