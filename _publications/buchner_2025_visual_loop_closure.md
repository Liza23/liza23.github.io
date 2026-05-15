---
title: "Visual Loop Closure Detection Through Deep Graph Consensus"
collection: publications
category: conferences
excerpt: "Visual loop closure detection traditionally relies on place recognition methods to retrieve candidate loops that are validated using computationally expensive RANSAC-based geometric verification. As false positive loop closures significantly degrade downstream pose graph estimates, verifying a large number of candidates in online simultaneous localization and mapping scenarios is constrained by limited time and compute resources. While most deep loop closure detection approaches only operate on pairs of keyframes, we relax this constraint by considering neighborhoods of multiple keyframes when detecting loops. In this work, we introduce LoopGNN, a graph neural network architecture that estimates loop closure consensus by leveraging cliques of visually similar keyframes retrieved through place recognition. By propagating deep feature encodings among nodes of the clique, our method yields high-precision estimates while maintaining high recall. Extensive experimental evaluations on the TartanDrive 2.0 and NCLT datasets demonstrate that LoopGNN outperforms traditional baselines."
date: 2025-01-01
authors: "M Buchner, L Dahiya, S Dorer, V Ramtekkar, K Nishimiya, D Cattaneo, et al."
venue: 'IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2025)'
venue_short: "IROS 2025"
domain: "robotics"
cited_by: 1
header:
  teaser: "publications/iros.png"
paperurl: "https://arxiv.org/pdf/2505.21754"
citation: 'Buchner, M., Dahiya, L., Dorer, S., Ramtekkar, V., Nishimiya, K., Cattaneo, D., et al. (2025). Visual Loop Closure Detection Through Deep Graph Consensus. In <i>IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)</i>.'
---
