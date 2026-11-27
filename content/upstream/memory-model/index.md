---
order: 4
tab: 'Memory model'
title: 'A memory model for BPF'
summary: 'Pinning down what BPF programs can assume about memory ordering, and checking it on real hardware.'
url: 'https://github.com/puranjaymohan/blitmus'
---

- With Paul McKenney, working out an instruction-level memory model for BPF: what ordering the BPF atomics and barriers guarantee, and what every JIT has to emit to deliver it. We presented progress at <a href="https://lpc.events/event/18/sessions/181/" class="inline-link" target="_blank" rel="noreferrer">Linux Plumbers 2024</a>.
- Wrote <a href="https://github.com/puranjaymohan/blitmus" class="inline-link" target="_blank" rel="noreferrer">blitmus</a>, which turns litmus tests into BPF programs and runs them millions of times on real machines to see which outcomes actually happen. Presented at Linux Plumbers 2026.
- Fixes that came out of it: some RISC-V JIT atomics weren't fully ordered, LKMM was missing `atomic_and/or/xor/andnot()`, and libarena's atomics now use load-acquire/store-release, which matters on weakly ordered CPUs like arm64.
