// Two-Sentence Horror — entry program for make.fun bounty
// "u-suroto-two-sentence-horror-acea9253".
//
// The entry: an anaesthesia-counting story in exactly two sentences and
// 300 characters. Sentence one sets the count down from ten after a
// seven-hour operation, ending at three when the dark takes the narrator.
// Sentence two turns it: the night nurse says he counted to zero twice,
// and the second time the voice counting was not his. The horror is
// implied, never explained — something else was counting inside him
// while he was under — and the first sentence is worse on re-read:
// "the dark took me" was not sleep, it was something else taking over.
//
// This program writes that text, and only that text, to /output/entry.txt
// as UTF-8. It is deterministic: the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY =
  "The surgeon counted backwards from ten as the anesthetic pulled me under after a seven-hour operation, and I remember reaching three before the dark took me. " +
  "I woke in recovery to the night nurse whispering that I had counted to zero twice, and the second time I counted in a voice that was not mine.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Gate sanity check, mirroring the competition gate: 1-400 characters,
// not only whitespace, exactly two sentences.
const sentences = STORY.split(".").filter((part) => part.trim().length > 0);
if (STORY.length < 1 || STORY.length > 400) {
  throw new Error(`entry length ${STORY.length} is outside the 1-400 gate`);
}
if (sentences.length !== 2) {
  throw new Error(`expected exactly 2 sentences, found ${sentences.length}`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, STORY, "utf8");
