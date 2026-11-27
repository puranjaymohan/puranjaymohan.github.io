---
order: 3
tab: 'RCU'
title: 'RCU'
summary: 'Work with Paul McKenney, merged through the RCU tree.'
url: 'https://lists.openwall.net/linux-kernel/2026/06/24/1055'
---

- RCU callbacks used to wait for a normal grace period even when an expedited one had already completed. My series tracks expedited grace-period state in the segmented callback list, so callbacks can run (and memory can be freed) as soon as either kind of grace period finishes.
- Groundwork for that: turned `struct rcu_gp_oldstate` into `rcu_gp_seq` so callback segments can record which grace period they wait on, added SRCU and Tasks RCU wrappers, and made expedited completion wake the NOCB kthreads.
- Made `call_rcu()` and `call_srcu()` safe to call from any context, NMI included, with rcutorture coverage.
- Presented the expedited-callbacks work with Paul at LSF/MM/BPF 2026.
