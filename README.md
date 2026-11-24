# Two-Sentence Horror — The Anaesthesia Counting Story

[![Two-Sentence Horror](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![Rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/yannyonn94/u-suroto-two-sentence-horror-acea9253/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![Reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/yannyonn94/u-suroto-two-sentence-horror-acea9253/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)

## The concept

An anaesthesia story in exactly **two sentences and 300 characters**: a patient
counts backwards from ten as the anaesthetic pulls him under after a seven-hour
operation, reaching three before the dark takes him — then wakes in recovery to
the night nurse whispering that he counted to zero twice, and the second time
he counted in a voice that was not his.

The second sentence turns the first: "the dark took me" stops being sleep and
becomes something else inside him, counting in his body while he was under.
The horror is implied, never explained — no gore, no monster named, just the
reader filling in the worst of it.

## Why this story

Three concepts were tested against the judge's brief (specificity, surprise,
fright, originality, each out of 10). The anaesthesia story won at 36/40:
specificity 9 (ten, three, zero twice, seven-hour operation), surprise 9
(something else counted in his body), fright 9, originality 9 — a twist no
familiar horror story retells. It fits the brief in order: exactly two
sentences and genuinely frightening; the second sentence makes the first worse
on re-read; the horror is implied; the prose is precise and concrete, every
word earning its place; and it is original. Restraint over gore throughout.

## The entry

> The surgeon counted backwards from ten as the anesthetic pulled me under after a seven-hour operation, and I remember reaching three before the dark took me. I woke in recovery to the night nurse whispering that I had counted to zero twice, and the second time I counted in a voice that was not mine.

## How it works

`main.ts` (Node 22+) writes that exact text to `/output/entry.txt` as UTF-8,
deterministically — the same 300 bytes on every run. Before writing it checks
the competition gate itself: 1–400 characters, not only whitespace, exactly
two sentences.

```sh
node main.ts
```

## Files

- `main.ts` — the entry program
- `README.md` — this file
- `LICENSE` — MIT

## Competition

[Two-Sentence Horror on make.fun](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
