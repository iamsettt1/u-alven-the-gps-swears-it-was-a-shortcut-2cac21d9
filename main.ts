// The GPS Swears It Was a Shortcut — make.fun entry.
// Prints the GPS's one-line excuse, exactly one line, nothing else.
// Deterministic: no input, no randomness, no network, no time.
// The kit's contract is that the program writes its text to
// /output/entry.txt, so the line is written there too; stdout carries
// the very same line and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The shortcut was real, I swear — it just had one tiny lake in the middle of it, and your car is now the lake's problem.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE + "\n");
