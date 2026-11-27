---
order: 6
tab: 'arm32 & RISC-V'
title: 'BPF JITs for arm32 and RISC-V'
summary: 'Maintainer of the arm32 JIT since 2023, reviewer for the RISC-V 64-bit JIT since 2024.'
url: 'https://lists.openwall.net/netdev/2024/04/05/172'
---

- arm32: added the BPF cpu v4 instructions (sign-extending loads and moves, signed and 64-bit division, unconditional bswap, 32-bit jump offsets) and took over as maintainer in 2023. Most recently made it reject BPF-to-BPF calls and callbacks it can't JIT correctly.
- RISC-V: ported the program-pack allocator and `bpf_get_smp_processor_id()` inlining, did the riscv64 kCFI support, and review JIT patches. Björn Töpel <a href="https://lists.openwall.net/netdev/2024/04/05/172" class="inline-link" target="_blank" rel="noreferrer">added me as a reviewer</a> in 2024.
- Part of the RISC-V session on atomic code patching and ftrace at <a href="https://lpc.events/event/18/contributions/1800/" class="inline-link" target="_blank" rel="noreferrer">Linux Plumbers 2024</a>.
