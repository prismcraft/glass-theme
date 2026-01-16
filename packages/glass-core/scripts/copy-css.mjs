// packages/glass-core/scripts/copy-css.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// project root for this package (glass-core)
const root = path.resolve(__dirname, "..");

const files = ["tokens.css", "glass.css", "components.css"];

fs.mkdirSync(path.join(root, "dist"), { recursive: true });

for (const f of files) {
  const src = path.join(root, "src", f);
  const destDist = path.join(root, "dist", f);
  const destRoot = path.join(root, f);

  if (!fs.existsSync(src)) {
    throw new Error(`Missing CSS source file: ${src}`);
  }

  fs.copyFileSync(src, destDist);
  fs.copyFileSync(src, destRoot);
}

console.log("Copied CSS to dist/ and package root.");

