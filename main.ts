// SPDX-License-Identifier: MIT
// make.fun entry: "Have You Tried Turning It Off?"
// Writes one funny tech-support line to <MAKEFUN_OUTPUT_DIR>/entry.txt
// (default /output). Node 22, standard library only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a hopeless support agent's cheerful escalation.
// Twist: the "escalation" goes nowhere — Tier 3 is the same agent,
// only with a deeper voice. The customer's desperation is implied
// by the escalation itself; the joke lands on the agent's uselessness.
const LINE =
  "I've escalated your ticket to Tier 3, which is just me again, but with a deeper voice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Fail loudly rather than silently submitting an invalid entry:
// the sealed gate accepts only UTF-8 text of 1 to 199 characters.
if (LINE.length < 1 || LINE.length > 199 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-199 gate`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
