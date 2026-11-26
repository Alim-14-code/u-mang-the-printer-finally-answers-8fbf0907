// The Printer Finally Answers — R1 entry for make.fun
// Reads the single source of truth (entry.txt), validates it, and writes
// it to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(here, "entry.txt"), "utf8").trim();

if (line.length < 1 || line.length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${line.length}`);
}
if (line.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outText = line + "\n";
writeFileSync(join(outDir, "entry.txt"), outText);
console.log(`Printer's comeback filed: ${line.length} chars, one line, no apologies.`);
