---
date: '1'
title: 'Rethinking Generalization in American Sign Language Prediction for Edge Devices with Extremely Low Memory Footprint'
author: 'Aditya Jyoti Paul, Puranjay Mohan, Stuti Sehgal'
journal: 'IEEE RAICS 2020'
cover: './paper1.png'
github: 'https://arxiv.org/abs/2011.13741'
external: 'https://doi.org/10.1109/RAICS51191.2020.9332480'
tech:
  - TensorFlow Lite Micro
  - OpenMV
  - Cortex-M7
---

American Sign Language letter recognition on a Cortex-M7 with 496 KB of frame buffer RAM. Quantisation usually costs accuracy, so we used interpolation as an augmentation to win it back and to make the model hold up on noisy input it hadn't seen. The final model is about 185 KB and runs at 20 frames per second.
