---
title: Animator As Code
---

## 1.1.0-beta.2

- Fix AacFlState.WithCycleOffset(AacFlFloatParameter floatParam) now correctly enables the parameter.
- (BREAKING) Make AacFlController.AnimatorController read-only
- Update LICENSE: Add galister for major contributions.
- Do a pass on the documentation:
  - Add and update inline documentation.
  - Mark some inconsistencies.
  - Not everything is reviewed yet.

## 1.1.0-beta.1

Accomodate new VRCAnimatorPlayAudio requirements:
- Nodes need to know the Animator Root, so that relative paths can be resolved during the creation of State behaviours (i.e. Relative path of an AudioSource).
- Nodes need to have the ability to create a New Behaviour, even if one already exists.
