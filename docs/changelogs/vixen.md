---
title: Vixen
---

## 1.2.0 (Planned)

### Custom opposite values in Properties

Until this update, properties were using the value in the Scene as the "opposite" value.
This means you only need to specify the new value of the property, and Vixen would animate between your value and the scene value.

Properties can now use a Custom value of your choice as the "opposite" value.
- In this new mode called **"C" for "Custom"**, the value in the scene objects are ignored.
    - The scene objects remain unchanged, the opposite value is not baked.
    - This means that if the user has safety settings set to keep animations OFF, Vixen Control has no effect on the appearance of your avatar: the scene remains the source of truth.
    - When multiple objects are used (i.e. selecting multiple objects, or recursive selection), the value in the Scene may be different for each object (i.e. different outline width for each object).
        - They will effectively be overriden by the opposite value.
- The previous mode called **"S" for "Scene"** remains the default:
    - When multiple objects are used (i.e. selecting multiple objects, or recursive selection), the value in the Scene may be different for each object (i.e. different outline width for each object).
        - Contrary to **"C"** mode, Vixen will animate all of these values independently from the value of each respective object to the scene value.

### Other

- When baking, all Vixen Control components are now deleted so that further bakes will not repeat those operations.
- Vixen now provides the synced parameters to NDMF, which is shown in the Modular Avatar Information panel.
- Now requires Modular Avatar 1.9.9 minimum.
- Now requires NDMF 1.4.0 minimum.

### Fixes

- Attempt to fix incorrect behaviour of Item slot, Flags, and Ejects in some complex scenarios:
    - When an item slot exits, delay everything by 1 frame so that the animator has time to acknowledge a change in its parameters caused by switching OFF other controls.
    - Remove the default state transition-to-entering shortcut because that transition incorrectly conflates Switch ON and Active.
    - Remove the unconditional transition to the default state because that transition incorrectly conflates Switch ON and Active.
    - All item slots now generate a None state, even slots with default, as slots with default may need to remain inactive.
    - The None slot is now responsible for switching on the default slot, which may or may not result in the default slot becoming active.
- Controls of type OSC should now be created properly. They were previously created with an generated parameter name instead of the specified one.
- The "Fix invalid references" buttons now use the correct path, instead of incorrectly interpreting the path as being a parameter name.

## 1.0.1

- Try to fix accidental incompatibility with Unity 2019. This update is not necessary if you are on Unity 2022.

## 1.0.0

Although the version number is now V1 instead of V0, this is not a breaking change (I don't want the major version to be zero any longer).
Existing components are the same, and you will not lose your work.

### Add Cross-Control Effects:

- Add Item slots: Only one control may occupy an item slot. The other controls of that item slot are switched OFF.
- Add Flags: Controls can raise flags. Other controls can listen to flags to become active or inactive without switching themselves ON or OFF. Multiple controls can raise the same flag.
- Add Ejects: Controls can switch other controls ON or OFF.

### Add Fix All button:

- If controls are targeting objects from another avatar, the Fix All button can retarget objects in the current avatar at the same relative path.

## 0.1.0

- Property changes using Everything/Recursive selection that affect SkinnedMeshRenderers now affects MeshRenderers, and inversely:
    - This is so that recursive selections that change material properties of a SkinnedMeshRenderer will also change the same material properties of a MeshRenderer.
      This is because we don't want to bother the user with the technicalities between SkinnedMeshRenderers and MeshRenderers.
    - (Blendshapes are never applied to a MeshRenderer)
- Fix: When an object or component referenced by a Vixen Control is removed from the scene, it should no longer crash the inspector user interface.

## 0.0.1

- First release.
