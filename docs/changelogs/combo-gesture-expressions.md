---
title: ComboGestureExpressions
---

## 3.1.5100 (Beta)

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
    - ComboGestureIntegrator is generally made obsolete by non-destructive workflows (and may be migrated to [Prefabulous Avatar](/docs/products/prefabulous-avatar) in the future).
- Add the possibility to make the eye blinking prevention coexist with eye tracking animators:
    - CGE can now integrate with existing *Eye Tracking Enabled* parameters from eye tracking animators.
    - When the *Eye Tracking Enabled* parameter is toggled on, CGE's blink prevention layer will be suspended.
- Migrate embedded *Animator As Code v0* to *Animator As Code V1* on VCC.

### Fixes

- **Synchronization should now be dramatically faster.**
    - Fix an issue where asset generation was made slower because code sections with intensive asset creation were not properly marked.
- Fix an issue where ComboGestureDynamics related to a boolean parameter could not be tied to a specific activity.
- Fix text becoming red after entering Play mode.
- Documentation now leads to docs.hai-vr.dev instead of hai-vr.github.io.
- Japanese localization file name has changed.
