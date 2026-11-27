---
order: 1
tab: 'arm64 JIT'
title: 'BPF JIT for arm64'
summary: 'Maintainer. Most of my work over the last few years is about making BPF on Arm as fast and as complete as on x86.'
url: 'https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/log/arch/arm64/net?qt=author&q=Puranjay+Mohan'
---

- Moved the JIT onto the BPF program-pack allocator, so JITed programs share huge pages instead of each taking its own, which cuts iTLB pressure on busy machines. Same change for RISC-V.
- Added BPF exceptions, private stacks, timed `may_goto`, and stack arguments so BPF-to-BPF and kfunc calls can take more than five parameters.
- Got kCFI working with JITed BPF code on arm64 and riscv64, so CFI-enabled kernels can still run BPF.
- Inlined `bpf_get_smp_processor_id()` and other per-CPU accesses, shortened `cast_user` from up to six instructions to at most four (often one), and fixed a long tail of codegen and correctness bugs.
- Working on BRBE support for `bpf_get_branch_snapshot()`, so BPF programs on newer Arm cores can read the branch record buffer. Fixed a few perf core bugs along the way.
- Talked about what's still missing at <a href="https://lwn.net/Articles/1081033/" class="inline-link" target="_blank" rel="noreferrer">LSF/MM/BPF 2026</a>.
