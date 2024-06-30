---
title: Animator As Code
---

## 1.1.0-beta.1

Accomodate new VRCAnimatorPlayAudio requirements:
- Nodes need to know the Animator Root, so that relative paths can be resolved during the creation of State behaviours (i.e. Relative path of an AudioSource).
- Nodes need to have the ability to create a New Behaviour, even if one already exists.
