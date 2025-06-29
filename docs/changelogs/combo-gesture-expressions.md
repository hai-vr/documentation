﻿---
title: ComboGestureExpressions
---

## 3.3.1

- As I am no longer focusing on VRChat content creation, the package will now install without warnings,
  even if VRChat introduces breaking changes.
  - VRChat Avatars package upper bound dependency raised to VRChat SDK999.

## 3.3.0

- Add "Ignore Analog Fist" option in the compiler. When enabled, the Fist animations play without having to press the trigger.
- ComboGestureExpressions now requires Animator As Code V1.1.0 minimum, and accepts any version above that.
  - Internally, the configuration is now accessed using the new accessor class introduced in AAC V1.1.0.

## 3.3.0-beta.1

- Add "Ignore Analog Fist" option in the compiler. When enabled, the Fist animations play without having to press the trigger.
- ComboGestureExpressions now requires Animator As Code V1.1.0 minimum.
  - Internally, the configuration is now accessed using the new accessor class introduced in AAC V1.1.0.

## 3.2.2

- Phase out using internal Animator As Code classes. 

## 3.2.1

- Allow installation with VRChat Avatars SDK 3.7.x
- Allow installation with Animator As Code 1.1.x
- Allow installation with Visual Expressions Editor 2.x
- Allow installation with Animation Viewer 2.x

## 3.2.0

- Allow installation with VRChat Avatars SDK 3.6.x
- Remove the Beta label.
- Attempt to fix "The script class couldn't be found" when adding curve keys.
- Fix Eye Tracking toggle now uses Write Defaults setting.

## 3.1.5102 (Beta)

### Fixes

Deselect old clip before opening clip in Visual Expressions Editor:
- Try to fix an issue where Visual Expressions Editor will focus the wrong clip if the Project view already has another clip selected.

## 3.1.5101 (Beta)

- First public VCC beta of ComboGestureExpressions.

### Major changes

- **Migrate to VRChat Creator Companion.**
    - ComboGestureExpressions is now located in Packages/
    - The Assets/Hai/ComboGesture folder is marked to be deleted automatically by VCC.
- **Gesture Playable Layer is no longer used by default.**
    - Transforms are now generated in the FX layer to conform with current popular avatar creational patterns.
    - The previous behaviour can be restored by switching the Gesture Playable Layer section to *Old style*.
 
### Other changes

- Completely remove ComboGestureIntegrator.
    - ComboGestureIntegrator is generally made obsolete by non-destructive workflows (and may be migrated to [Prefabulous](/docs/products/prefabulous) in the future).
- Add the possibility to make the eye blinking prevention coexist with eye tracking animators:
    - CGE can now integrate with existing *Eye Tracking Enabled* parameters from eye tracking animators.
    - When the *Eye Tracking Enabled* parameter is toggled on, CGE's blink prevention layer will be suspended.
- Migrate embedded *Animator As Code v0* to *Animator As Code V1* on VCC.

### Fixes

- **Synchronization should now be dramatically faster.**
    - Fix an issue where asset generation was made slower because code sections with intensive asset creation were not properly marked.
- Fix synchronization should no longer fail when animations still contain references to Dynamic Bones component toggle while Dynamic Bones is not installed in the project.
- Fix an issue where ComboGestureDynamics related to a boolean parameter could not be tied to a specific activity.
- Fix text should no longer be red after entering Play mode.
- Documentation now leads to docs.hai-vr.dev instead of hai-vr.github.io.
- Japanese localization file name has changed.
