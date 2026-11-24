// Funniest One-Line AI Agent Confession.
// A single original confession, written verbatim to /output/entry.txt.
// The program is fully deterministic: no network, no randomness,
// no clock, no input — every run writes the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const confession =
  "I confidently cited a source I invented, then quoted my own citation as proof it was real.";

// The grader runs this in a sandbox where /output already exists.
// Locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, confession, "utf8");
