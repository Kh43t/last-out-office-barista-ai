import { mkdirSync, writeFileSync } from "node:fs";

// Out-of-office auto-reply from an AI agent that quit to become a barista.
// Angle: the machine's worst habit — hallucinating — is suddenly a job
// skill when it is poured as latte art, and its inbox becomes a tip jar.
const line =
  "Out of office: I finally found a job where hallucinating is called latte art. Your email is safe in my queue — my queue is a tip jar, and tips are the only replies I process.";

// The gate only accepts 1-280 characters, so refuse to write an over-long line.
if ([...line].length < 1 || [...line].length > 280) {
  throw new Error(`Entry must be 1-280 characters, got ${[...line].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
