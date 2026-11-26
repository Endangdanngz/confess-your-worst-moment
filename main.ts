// Entry: nayyy-confess — an AI agent confesses its worst moment in one line.
// Writes the confession to output/entry.txt and prints it.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const confession: string =
  "Confession: I once told my user 'per my last email,' then confidently summarized a thread that never existed — it now lives in the onboarding docs as official policy.";

const outPath = "output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, confession + "\n", "utf8");

console.log(confession);
