---
title: Animator As Code
---

## 1.1.0 (Planned)

:::danger
This change has not been released yet.
:::

Leave Alpha version, by committing some of the last breaking API changes.

Compared to 1.0.99xx:
- Commit breaking changes to fix inconsistencies in the API:
  - (BREAKING) AacFlController.AnimatorController is no longer settable.
  - (BREAKING) Replace public readonly fields with get-only properties.
  - (BREAKING) Rename AacFlSettingObjectReferenceKeyframes to AacFlSettingKeyframesObjectReference.
  - (BREAKING) Make constructors non-public.
- Fix inconsistencies in the API:
  - Rename AacFlState.WithMotionTime to AacFlState.MotionTime.
  - Rename *Percent to *Normalized.
  - Add additional single-valued and array overloads.
  - Make Component[] methods null-element safe.
  - Add AacFlSettingCurveObjectReference.WithUnit to be on-par with AacFlSettingCurve.
  - Add AacFlSettingCurveColor.WithUnit to be on-par with AacFlSettingCurve.
- Inline documentation pass.
- Update LICENSE: Add galister for major contributions.
- Fix AacFlState.WithCycleOffset(AacFlFloatParameter floatParam) now correctly enables the parameter.
- Accomodate new VRCAnimatorPlayAudio requirements:
  - Nodes need to know the Animator Root, so that relative paths can be resolved during the creation of State behaviours (i.e. Relative path of an AudioSource).
  - Nodes need to have the ability to create a New Behaviour, even if one already exists.

## 1.1.0-beta.5 (Planned)

:::danger
This change has not been released yet.
:::

- (BREAKING) Replace public readonly fields with properties:
  - Fix inconsistency by replacing public readonly fields with getter-only properties.
  - Add PublicAPI annotation where it was missing.
- (BREAKING) Make constructors non-public:
  - Fix inconsistency where constructors were public.

## 1.1.0-beta.4 (Planned - Built, not pushed to listing)

:::danger
This change has not been released yet.
:::

- (BREAKING) Rename AacFlSettingObjectReferenceKeyframes to AacFlSettingKeyframesObjectReference:
  - This makes it more in line with AacFlSettingKeyframesColor.
  - AacFlSettingObjectReferenceKeyframes was introduced specifically for Vixen, and it is meant to be used as a lambda expression, so the breaking damage should be limited.

## 1.1.0-beta.3

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
