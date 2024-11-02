import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import { defineConfig } from "rollup";
import minifyHTML from "rollup-plugin-html-literals";
import summary from "rollup-plugin-summary";

export default defineConfig({
  input: "./src/index.js",
  output: [
    {
      dir: "dist",
      format: "es",
      exports: "named",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: true,
    },
  ],
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
