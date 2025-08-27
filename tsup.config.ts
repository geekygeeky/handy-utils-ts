import { defineConfig } from "tsup";

export default defineConfig({
    entry: [
        "src/index.ts",
        "src/global.ts",
        "src/core/str.ts",
        "src/core/num.ts",
        "src/core/arr.ts",
        "src/core/misc.ts",
    ],
    format: ["esm", "cjs"], // build both
    dts: true,              // emit .d.ts
    splitting: false,       // fine for libs
    sourcemap: true,
    clean: true,
    minify: false
});