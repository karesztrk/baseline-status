import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import minifyHTML from "rollup-plugin-html-literals";
import summary from "rollup-plugin-summary";
import { defineConfig } from "rollup";

export default defineConfig({
  input: "./src/baseline-status.js",
  output: { file: "./dist/baseline-status.min.js" },
  plugins: [
    resolve(),
    minifyHTML(),
    terser({
      compress: {
        drop_console: true,
      },
    }),
    summary(),
  ],
});
