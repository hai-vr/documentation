---
title: Vixen
---

## 1.0.0

Although the version number is now V1 instead of V0, this is not a breaking change (I don't want the major version to be zero any longer).
Existing components are the same, and you will not lose your work.

Add Cross-Control Effects:

- Add Item slots: Only one control may occupy an item slot. The other controls of that item slot are switched OFF.
- Add Flags: Controls can raise flags. Other controls can listen to flags to become active or inactive without switching themselves ON or OFF. Multiple controls can raise the same flag.
- Add Ejects: Controls can switch other controls ON or OFF.

Add Fix All button:

- If controls are targeting objects from another avatar, the Fix All button can retarget objects in the current avatar at the same relative path.

## 0.1.0

- Property changes using Everything/Recursive selection that affect SkinnedMeshRenderers now affects MeshRenderers, and inversely:
    - This is so that recursive selections that change material properties of a SkinnedMeshRenderer will also change the same material properties of a MeshRenderer.
      This is because we don't want to bother the user with the technicalities between SkinnedMeshRenderers and MeshRenderers.
    - (Blendshapes are never applied to a MeshRenderer)
- Fix: When an object or component referenced by a Vixen Control is removed from the scene, it should no longer crash the inspector user interface.

## 0.0.1

- First release.
