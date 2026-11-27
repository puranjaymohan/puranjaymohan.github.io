---
date: '2022-09-01'
title: 'Linux Kernel Engineer'
tab: 'AWS'
company: 'Amazon Web Services'
location: 'Dresden, Germany'
range: 'Sep 2022 - Nov 2025'
url: 'https://aws.amazon.com/ec2/'
---

- Kernel and OS team for the EC2 fleet. Worked on the kernel running on millions of hosts, mostly live patching with kpatch and BPF.
- Became maintainer of the arm32 BPF JIT in 2023 and the arm64 BPF JIT in 2024, and an official reviewer for the RISC-V 64-bit JIT.
- arm64 JIT: brought over the BPF program-pack allocator to cut iTLB pressure, added BPF exceptions, private stacks and timed `may_goto`, inlined `bpf_get_smp_processor_id()`, and got kCFI working with JITed BPF code.
- Ported the program-pack allocator and helper inlining to the RISC-V JIT.
- Started the BPF instruction-level memory model work with Paul McKenney and presented it at Linux Plumbers 2024.
