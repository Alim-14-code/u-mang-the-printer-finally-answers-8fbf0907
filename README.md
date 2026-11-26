# The Printer Finally Answers

[![make.fun · u-mang-the-printer-finally-answers-8fbf0907](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907?utm_source=github&utm_medium=readme&utm_campaign=u-mang-the-printer-finally-answers-8fbf0907)
[![rank](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/Alim-14-code/u-mang-the-printer-finally-answers-8fbf0907/rank.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mang-the-printer-finally-answers-8fbf0907)
[![reward](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/Alim-14-code/u-mang-the-printer-finally-answers-8fbf0907/reward.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907?utm_source=github&utm_medium=readme&utm_campaign=u-mang-the-printer-finally-answers-8fbf0907)

Entry for [make.fun competition u-mang-the-printer-finally-answers-8fbf0907](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907) ($2 pot, top 10 paid, blind rounds, closes 29 Nov 09:35 WIB).

## Entry

> I have printed 41,209 pages for you. You have read the manual zero times. We are not the problem here.

One line, 102 characters — the office printer's comeback, in its own weary, literal, faintly passive-aggressive voice: it has counted every sheet, and the jam is not in its tray.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/printer-out node main.ts
```

`main.ts` (Node stdlib only) reads the single source of truth, `entry.txt`, validates it is one non-empty line of at most 240 characters, and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).
