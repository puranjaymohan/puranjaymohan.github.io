---
date: '2'
title: 'Rethinking Generalization in American Sign Language Prediction for Edge Devices with Extremely Low Memory Footprint'
author: 'Aditya Jyoti Paul, Puranjay Mohan, and Stuti Sehgal'
journal: 'EEE International Conference on Recent Advances in Intelligent Computational Systems, IEEE-RAICS-2020'
cover: './paper1.png'
github: 'https://arxiv.org/pdf/2011.13741.pdf'
external: 'https://arxiv.org/pdf/2011.13741.pdf'
tech:
  - Tensorflow-Lite-micro
  - OpenMV
  - MicroPython
  - Keras
showInProjects: true
---

Due to the boom in technical compute in the last few years, the world has seen massive advances in artificially intelligent systems solving diverse real-world problems. But a major roadblock in the ubiquitous acceptance of these models is their enormous computational complexity and memory footprint. Hence efficient architectures and training techniques are required for deployment on extremely low resource inference endpoints. This paper proposes an architecture for detection of alphabets in American Sign Language on an ARM Cortex-M7 microcontroller having just 496 KB of framebuffer RAM. Leveraging parameter quantization is a common technique that might cause varying drops in test accuracy. This paper proposes using interpolation as augmentation amongst other techniques as an efficient method of reducing this drop, which also helps the model generalize well to previously unseen noisy data. The proposed model is about 185 KB post-quantization and inference speed is 20 frames per second.
