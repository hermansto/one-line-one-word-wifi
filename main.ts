import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One word for my Wi-Fi: it connects, then vanishes mid-call,
// mid-download, mid-everything — like it was never there.
const WORD = "Ghosting";

// A single word means letters only: no spaces, no newlines,
// no punctuation, nothing extra hiding inside it.
if (!/^[A-Za-z]+$/.test(WORD)) {
  throw new Error("Entry must be exactly one word: letters only, no spaces or newlines.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.txt");
writeFileSync(target, WORD, "utf8");

// Read it back and make sure the file holds exactly the word,
// byte for byte, with no trailing newline sneaking in.
const written = readFileSync(target);
const expected = Buffer.from(WORD, "utf8");
if (!written.equals(expected)) {
  throw new Error(
    `Verification failed: entry.txt is ${written.length} bytes, expected ${expected.length} bytes for ${JSON.stringify(WORD)}.`
  );
}

console.log(`Wrote one-word entry (${WORD.length} chars, ${expected.length} bytes) to ${target}: ${WORD}`);
