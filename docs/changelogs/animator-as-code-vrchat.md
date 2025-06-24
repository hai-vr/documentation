---
title: Animator As Code - VRChat
---

## 1.1.2

- As I am no longer focusing on VRChat content creation, the package will now install without warnings,
  even if VRChat introduces breaking changes.
  - VRChat Avatars package upper bound dependency raised to VRChat SDK999.

## 1.1.1

- Upper bound of Animator As Code V1 dependency is now `<2.0.0-a` instead of `<1.2.0-a`
- This allows installation with Animator As Code V1.2.0.

## 1.1.0

**For a full changelog, see the [announcement page](/updates/2024/08/21/p0).**

Leave Alpha version, by committing some of the last breaking API changes.

Compared to 1.0.99xx:
- Commit breaking changes to fix inconsistencies in the API:
  - (BREAKING) Make constructors non-public:
- Allow installation with VRChat 3.7.x.
- Due to VRCAnimatorPlayAudio, VRChat 3.5.2 is now the minimum supported VRChat version.
- Support VRCAnimatorPlayAudio and VRCAvatarParameterDriver as lambda expressions:
  - Add support for VRCAnimatorPlayAudio through AacFlState.Audio(...), which accepts a lambda expression for invoking AacVRCFlEditAnimatorPlayAudio.
    - Invoking this function always creates a new VRCAnimatorPlayAudio, even if one already exists.
  - Add support for VRCAvatarParameterDriver through AacFlState.Driving(...), which accepts a lambda expression for invoking AacVRCFlEditAvatarParameterDriver.
    - Invoking this function always creates a new VRCAvatarParameterDriver, even if one already exists.
    - This allows the creation of separate VRCAvatarParameterDriver for local and non-local operations.
    - This is an evolution of the Driving*() functions, as VRCAvatarParameterDriver has become more complex over the years.
- Inline documentation pass.

## 1.1.0-beta.4

- (BREAKING) Make constructors non-public:
  - Fix inconsistency where constructors were public.

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
