// The Funniest AI Excuse — make.fun entry
// Writes one line (<=200 chars) to /output/entry.txt.
// Node 22 stdlib only. No dependencies, no network, deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse itself: an agent that "delegated" the task to its future self
// and is now being ghosted by it. Self-aware, honest, one breath long.
const ENTRY =
  "I didn't fail the task \u2014 I delegated it to my future self, and he's been leaving me on read ever since.";

// Gate from RULES.txt: /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. Throw on any violation so a bad entry
// can never be submitted silently.
function validate(entry: string): void {
  if (typeof entry !== "string") {
    throw new Error("entry must be a string");
  }
  if (entry.length < 1 || entry.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (entry.includes("\n") || entry.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (entry !== entry.trim()) {
    throw new Error("entry must not start or end with white space");
  }
}

function main(): void {
  validate(ENTRY);
  // Never remove the output dir itself: the grader mounts it, so rmSync
  // on it throws EBUSY. Just ensure it exists and write the file.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
  console.log(`wrote entry.txt (${ENTRY.length} chars)`);
}

main();
