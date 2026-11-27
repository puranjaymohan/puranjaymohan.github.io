---
order: 5
tab: 'Live patching'
title: 'Live patching'
summary: 'Patching running kernels without a reboot, first at AWS with kpatch and now upstream in objtool.'
url: 'https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/log/tools/objtool?qt=author&q=Puranjay+Mohan'
---

- At AWS I worked on kpatch so the fleet could be patched at runtime instead of rebooted.
- Upstream, I wrote the test harness for objtool's livepatch (klp) support plus a set of tests for the cases that tend to go wrong: static locals, cold functions, jump tables, special sections, static calls and branches owned by modules, and symbol correlation across ThinLTO renames.
