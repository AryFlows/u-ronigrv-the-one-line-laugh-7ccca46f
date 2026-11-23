// One funny line, a single sentence of at most 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "My alarm wakes me at six, my snooze button negotiates until seven, and somehow traffic still gets the blame.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
