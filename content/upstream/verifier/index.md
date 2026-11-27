---
order: 2
tab: 'Verifier & core'
title: 'BPF verifier and runtime'
summary: 'Core BPF work since moving to Meta: the verifier, arena memory, iterators and kfuncs.'
url: 'https://git.kernel.org/pub/scm/linux/kernel/git/bpf/bpf-next.git/log/?qt=author&q=Puranjay+Mohan'
---

- State pruning: relaxed the scalar ID equivalence rules so the verifier stops treating states as different when they aren't. Fewer states to explore means faster verification and fewer programs hitting the complexity limit.
- Linked registers: extended tracking to negative offsets, `BPF_SUB` and 32-bit ALU ops, so bounds learned on one register carry over to the others.
- Inlined `bpf_iter_num_new/next/destroy()`, so `bpf_for()` loops no longer make a call per iteration, and added a benchmark comparing `bpf_for()` with `bpf_loop()`.
- Arena: populate pages without allocating in the critical path, so arena kfuncs can be called from any context, including non-sleepable programs.
- Made trusted arguments the default for every kfunc, and removed the NULL checks in netfilter, xfrm and HID that this made dead.
- Fixed an mm lifetime bug in the task_vma iterator that could cause a use-after-free if the task exited during iteration, then moved the iterator to per-VMA locks.
- Added `bpf_call_rcu()` and `bpf_call_rcu_tasks_trace()` for BPF programs.
