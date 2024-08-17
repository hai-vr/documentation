---
title: Animator As Code
---

## 1.1.0-beta.3

:::danger
This change has not been released yet.
:::

- Add AacFlState.WithMotionTime to replace AacFlState.MotionTime:
  - Add AacFlState.WithMotionTime(...) to replace AacFlState.MotionTime()
  - This is more in line with the function naming convention
  - *The previous naming is also preserved not to break existing uses.*
- Work towards correcting inconsistencies in the API:
  - Rename *Percent to *Normalized.
  - Update inline documentation.
  - Add additional single-valued and array overloads.
  - Add AacFlSettingCurveObjectReference.WithUnit to be on-par with AacFlSettingCurve.
  - Add AacFlSettingCurveColor.WithUnit to be on-par with AacFlSettingCurve.
  - *The previous naming is also preserved not to break existing uses.*
- Make Component[] null-element safe and add missing multi-component:
  - Make Component[] null-element safe.
  - Add missing multi-component variations of existing APIs.
- Inline documentation pass.

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
