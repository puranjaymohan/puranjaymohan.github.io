---
date: '2'
title: 'A Tiny CNN Architecture for Medical Face Mask Detection for Resource-Constrained Endpoints'
author: 'Puranjay Mohan, Aditya Jyoti Paul, and Abhay Chirania'
journal: '2021 2nd International Conference on Electrical and Electronics Engineering (Springer LNEE)'
cover: './paper1.png'
github: 'https://www.linkedin.com/posts/puranjaymohan_tinyml-embeddedsystems-deeplearning-activity-6747859485936623617-tph9'
external: 'https://arxiv.org/pdf/2011.14858.pdf'
tech:
  - Tensorflow-Lite-micro
  - OpenMV
  - MicroPython
  - Keras
showInProjects: true
---

The world is going through one of the most dangerous pandemics of all time with the rapid spread of the novel coronavirus (COVID-19). According to the World Health Organisation, the most effective way to thwart the transmission of coronavirus is to wear medical face masks. Monitoring the use of face masks in public places has been a challenge because manual monitoring could be unsafe. This paper proposes an architecture for detecting medical face masks for deployment on resource-constrained endpoints having extremely low memory footprints. A small development board with an ARM Cortex-M7 microcontroller clocked at 480 Mhz and having just 496 KB of framebuffer RAM, has been used for the deployment of the model. Using the TensorFlow Lite framework, the model is quantized to further reduce its size. The proposed model is 138 KB post quantization and runs at the inference speed of 30 FPS.
