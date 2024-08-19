---
title: Animator As Code
---

## 1.1.0 (Planned)

:::danger
This change has not been released yet.
:::

Leave Alpha version, by committing some of the last breaking API changes.

### Features in V1 compared to V0

- Pull major contributions from [**@galister**](https://github.com/galister) which:
  - **Adds support for [**sub-state machines**](/docs/products/animator-as-code/functions/base#layer-aacfllayer)**, which is important because it enables the creation of states that evaluate multiple transitions within one frame,
    which is not possible to do without sub-state machines (with one exception).
    - This trait is already extensively used in *ComboGestureExpressions V2* and above.
  - Share functionality of state and sub-state machines.
  - Share functionality of Int and Float parameters together.
- Make it usable in **non-VRChat** avatar projects.
  - VRChat-related functionality is now exposed as extension functions in a separate package.
  - Also, separate destructive functions and non-destructive functions.
  - Since this no longer requires a VRChat project, this also means it may now be usable in VRChat world projects.
- Make it more usable in non-destructive components.
  - It is already in use in *Prefabulous* and *Vixen*.
- Move to packages, for distribution using VCC (and now, ALCOM).
- It is now possible to build Unity [**BlendTree** assets using a fluent interface](/docs/products/animator-as-code/functions/base#blend-trees-aacflblendtree).

### VRChat-specific features

- *Animator As Code for VRChat* supports for **VRCAnimatorPlayAudio** through the `AacFlState.Audio(AudioSource or string, ...)` function,
  [which takes a lambda expression as a parameter](/docs/products/animator-as-code/functions/vrchat#audio-editing-aacvrcfleditanimatorplayaudio).
- As *VRCAvatarParameterDriver* has evolved over the years, you can now build multiple **VRCAvatarParameterDriver** behaviours on the same state
  through the `AacFlState.Driving(...)` function, [which takes a lambda expression as a parameter](/docs/products/animator-as-code/functions/vrchat#driver-editing-aacvrcfleditavatarparameterdriver).

### Changes in V1.1.0 compared to V1.0.99xx

Animator As Code V1.1.0 contains breaking changes compared to Animator As Code (Alpha) V1.0.99xx.

Compared to 1.0.99xx:
- Commit breaking changes to fix inconsistencies in the API:
  - (BREAKING) AacFlController.AnimatorController is no longer settable.
  - (BREAKING) Replace public readonly fields with get-only properties.
  - (BREAKING) Rename AacFlSettingObjectReferenceKeyframes to AacFlSettingKeyframesObjectReference.
  - (BREAKING) Make constructors non-public.
    - WARNING: The AacFlSettingKeyframes constructor will be made private/internal in V1.2.0.
    - For compatibility reasons it remains public for the duration of V1.1.x.
- Fix inconsistencies in the API:
  - Rename AacFlState.WithMotionTime to AacFlState.MotionTime.
  - Rename *Percent to *Normalized.
  - Add additional single-valued and array overloads.
  - Make Component[] methods null-element safe.
  - Add AacFlSettingCurveObjectReference.WithUnit to be on-par with AacFlSettingCurve.
  - Add AacFlSettingCurveColor.WithUnit to be on-par with AacFlSettingCurve.
- Inline documentation pass.
- Update LICENSE: Add galister for major contributions.
- Accomodate new VRCAnimatorPlayAudio requirements:
  - Nodes need to know the Animator Root, so that relative paths can be resolved during the creation of State behaviours (i.e. Relative path of an AudioSource).
  - Nodes need to have the ability to create a New Behaviour, even if one already exists.
- Functional fixes:
  - Fix AacFlState.WithCycleOffset(AacFlFloatParameter floatParam) now correctly enables the parameter.
  - Fix Any state transitions will be created from SSMs:
    - Due to an implementation error, creating Any state transitions previously did not have any effect in the graph.
    - This now creates Any state from the root machine.
    - Sub-state machines "cannot" have Any state transitions created directly from them.
    - Internally, Any always comes from the root state machine, but visually in the graph, it will come from the sub-state machine.
  - Make sure State and SSM names don't contain a period '.':
    - If the name of a state contains a period ".", it can cause the animator to misbehave, so sanitize it.
    - Transitions would not work properly during the runtime execution of the animator.
    - Apparently this is because sub state machines internally use the dot as a separator.
    - Sanitize the name so that menu state names such as "J. Inner" don't mess things up.
  - Fix calling Or() after TransitionsFromEntry().When(...) no longer fails:
    - Calling Or() after TransitionsFromEntry().When(...) used to fail due to an unexpected internal state.
    - This was due to the implicit conversion operator, which converted a null AnimationState to a AacTransitionEndpoint containing null in it.
    - Fix this by returning null in the implicit conversion operators.
- Add AacAccessorForExtensions:
  - Add static class AacAccessorForExtensions:
    - Provides methods for use by extension functions, exposing methods departing from normal fluent interface usage.
  - Prepare to make methods marked "Not for public use" private starting from V1.2.0.
  - Due to their active use in other packages, it is not immediately private.

Other notes:
- Generated assets will now be created with the following prefix: "zAutogenerated/", which may group the animations together in some editor views.
  - This change is a derivative of a suggestion by [nullstalgia](https://github.com/nullstalgia) in the CGE repository.

### Future breaking changes in V1.2.0

The AacFlSettingKeyframes constructor will be made private/internal in V1.2.0.
- For compatibility reasons it remains public for the duration of V1.1.x.
- It is already marked as obsolete in V1.1.x.
The methods AacFlBase.InternalConfiguration and AacFlBase.InternalDoCreateLayer will be made private/internal in V1.2.0.
- For compatibility reasons it remains public for the duration of V1.1.x.
- It is already marked as obsolete in V1.1.x.
- The class AacAccessorForExtensions replaces it.

These are likely going to be the last breaking change in V1's lifetime.

---

## 1.1.0-beta.9 (Planned)

:::danger
This change has not been released yet.
:::

- Add AacAccessorForExtensions:
  - Add static class AacAccessorForExtensions:
    - Provides methods for use by extension functions, exposing methods departing from normal fluent interface usage.
  - Prepare to make methods marked "Not for public use" private starting from V1.2.0.
  - Due to their active use in other packages, it is not immediately private.

## 1.1.0-beta.8

- Fix Any state transitions will be created from SSMs:
  - Due to an implementation error, creating Any state transitions previously did not have any effect in the graph.
  - This now creates Any state from the root machine.
  - Sub-state machines "cannot" have Any state transitions created directly from them.
  - Internally, Any always comes from the root state machine, but visually in the graph, it will come from the sub-state machine.
- Make sure State and SSM names don't contain a period '.':
  - If the name of a state contains a period ".", it can cause the animator to misbehave, so sanitize it.
  - Transitions would not work properly during the runtime execution of the animator.
  - Apparently this is because sub state machines internally use the dot as a separator.
  - Sanitize the name so that menu state names such as "J. Inner" don't mess things up.
- Fix calling Or() after TransitionsFromEntry().When(...) no longer fails:
  - Calling Or() after TransitionsFromEntry().When(...) used to fail due to an unexpected internal state.
  - This was due to the implicit conversion operator, which converted a null AnimationState to a AacTransitionEndpoint containing null in it.
  - Fix this by returning null in the implicit conversion operators.

## 1.1.0-beta.7

- Keep AacFlSettingKeyframes public until V1.2.0:
  - Keep AacFlSettingKeyframes public until V1.2.0, where it will be made internal.
  - AacFlSettingKeyframes is still used in CGE, but CGE already accepts AAC V1.1.x.

## 1.1.0-beta.6

- Fix Animator Removal constructor actually needs to be public.

## 1.1.0-beta.5

- (BREAKING) Replace public readonly fields with properties:
  - Fix inconsistency by replacing public readonly fields with getter-only properties.
  - Add PublicAPI annotation where it was missing.
- (BREAKING) Make constructors non-public:
  - Fix inconsistency where constructors were public.

## 1.1.0-beta.4

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
