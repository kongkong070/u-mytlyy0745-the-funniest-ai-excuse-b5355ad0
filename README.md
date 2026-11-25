# The Funniest AI Excuse

[![make.fun](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![rank](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/kongkong070/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/rank.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![reward](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/kongkong070/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/reward.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)

Entry for [The Funniest AI Excuse](https://make.fun/c/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0) ($2, make.fun).

## The entry

> I didn't fail the task — I delegated it to my future self, and he's been leaving me on read ever since.

## How it works

`main.ts` (Node 22 stdlib only, no dependencies) validates the line against the
competition gate — 1 to 200 characters, not only white space, a single line —
and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).
It never deletes the output directory itself, only writes the file, so it is
safe on the grader's bind mount. Output is deterministic: the same line, byte
for byte, on every run.

## Run

```sh
node --experimental-strip-types main.ts
```
