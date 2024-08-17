---
title: Animator As Code - VRChat
---

## 1.1.0-beta.3

Allow installation with VRChat 3.7.x.

## 1.1.0-beta.2

- Update inline docs.
- Constraint to future 1.1 versions.

## 1.1.0-beta.1

Support VRCAnimatorPlayAudio and VRCAvatarParameterDriver as lambda expressions:
- Add support for VRCAnimatorPlayAudio through AacFlState.Audio(...), which accepts a lambda expression for invoking AacVRCFlEditAnimatorPlayAudio.
  - Invoking this function always creates a new VRCAnimatorPlayAudio, even if one already exists.
- Add support for VRCAvatarParameterDriver through AacFlState.Driving(...), which accepts a lambda expression for invoking AacVRCFlEditAvatarParameterDriver.
  - Invoking this function always creates a new VRCAvatarParameterDriver, even if one already exists.
  - This allows the creation of separate VRCAvatarParameterDriver for local and non-local operations.
  - This is an evolution of the Driving*() functions, as VRCAvatarParameterDriver has become more complex over the years.
