---
date: '2025-12-08'
title: 'Software Engineer, Kernel'
tab: 'Meta'
company: 'Meta'
location: 'London, UK'
range: 'Dec 2025 - Present'
url: 'https://www.meta.com/'
---

- Upstream BPF and core kernel work. Over a hundred of my commits have landed in mainline since I joined.
- Verifier: relaxed scalar ID equivalence so more states get pruned, and taught linked-register tracking about negative offsets, `BPF_SUB` and 32-bit ALU ops.
- BPF runtime: made arena kfuncs safe to call from any context, inlined the numeric iterators behind `bpf_for()`, fixed a use-after-free in the task_vma iterator and moved it to per-VMA locks, and made trusted arguments the default for all kfuncs.
- arm64: stack-argument support in the JIT, `__arena` kfunc arguments, shorter `cast_user` sequences, and work on BRBE support for `bpf_get_branch_snapshot()`.
- RCU: let callbacks finish on expedited grace periods instead of waiting for normal ones, and made `call_rcu()` and `call_srcu()` safe to call from any context, NMI included.
- Co-maintain <a href="https://shirudo.dev/" class="inline-link" target="_blank" rel="noreferrer">shirudo</a>, the open-source BPF security platform announced by OpenAI and Cisco. Brought it up on arm64 and closed root bypasses in its file seal.
- Wrote the XDP load-balancer and batch-timing benchmarks in the BPF selftests that I used to compare arm64 and x86, and a test harness for objtool's livepatch support.
