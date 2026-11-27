---
date: '2025-06-01'
title: 'blitmus'
github: 'https://github.com/puranjaymohan/blitmus'
external: 'https://lpc.events/event/20/contributions/2432/'
tech:
  - BPF
  - Memory models
  - arm64
  - x86-64
---

Litmus-tests the BPF memory model on real hardware. It turns memory-model tests into BPF programs, runs them over and over across CPUs, and reports which outcomes the machine actually produced, so you can compare what the model allows with what arm64 or x86 really does.
