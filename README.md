# One Word for Your Wi-Fi

[![make.fun · u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![rank](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/hermansto/one-line-one-word-wifi/rank.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/leaderboard)
[![reward](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/hermansto/one-line-one-word-wifi/reward.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)

My Wi-Fi in exactly one word:

**Ghosting**

It connects, then vanishes mid-call, mid-download, mid-everything — like it was never there.

## How it works

`main.ts` writes that single word to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, default `/output`), with no trailing newline, then reads it back and verifies it byte-for-byte.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/one-word-wifi-out npx tsx main.ts
```

(or compile/run with your TypeScript runner of choice — stdlib only, no dependencies.)
