---
sidebar_position: 5
title: "Modification API"
unlisted: true
---

# Functions: Modification API

The Modification API is an upcoming API that is being introduced to 1.3.0. It is not currently available for use.

It is designed specifically for the **creation and distribution of modular prefabs**, where you generate assets on your developer machine
and distribute those generated assets to your users. Your users will not need to install Animator As Code.

When using the Modification API, you will provide references to existing AnimatorController, AnimationClip, and BlendTree assets.
These assets will be emptied and their contents replaced with the newly generated content. This is a **destructive process**, conversely intended
for the creation of **non-destructive prefabs**.

The Modification API can be accessed by calling `(AacFlBase).Modification()`

#### Minimum version

- The Modification API requires 1.3.0 minimum.

#### Animator creation overview

```mermaid
graph TD;
    AacV1[static AacV1]:::roots-->|Create|Base:::roots;
    Base-->|Modification|Modification
    
    Modification-->|ResetAnimatorController|Controller:::focus;
    Modification-->|ResetClip|Clip:::focus;
    Modification-->|ResetBlendTree|BlendTree:::focus;
    Modification-->|ClearAnimatorController|Modification:::focus;
    Modification-->|EditAnimatorController|Controller:::focus;
    
    classDef disabled fill:#CCC
    classDef roots fill:#FCC
    classDef focus fill:#CFF
```

## Base (AacFlBase)

- `AacFlModification Modification()`<br/>
  Returns a new AacFlModification instance, granting you access to this destructive modification API. You will need to reuse this instance throughout.

## Modification (AacFlModification)

### Reset

All functions beginning with *Reset* clear the asset.

- `AacFlController ResetAnimatorController(AnimatorController controllerToReset)`<br/>
  Immediately removes all layers and all parameters from the given AnimatorController, and returns a AacFlController that will edit the given AnimatorController.<br/>
  This AnimatorController instance is memorized in the current AacFlModification instance memory.<br/>
  Note: The AnimatorController class is editor-only, so they can't be referenced inside scene components or asset objects. If you have a RuntimeAnimatorController instance, you should cast it to AnimatorController.

- `AacFlClip ResetClip(AnimationClip clipToReset)`<br/>
  Immediately removes all curves on the clip, and returns a AacFlClip that will edit the given AnimationClip.<br/>
  This does not reset any other attribute of the clip (e.g., is looping, etc.).<br/>
  This AnimationClip instance is memorized in the current AacFlModification instance memory.
  
- `AacFlNonInitializedBlendTree ResetBlendTree(BlendTree blendTreeToReset)`<br/>
  Immediately clears the list of children in the given BlendTree, sets the parameters to empty strings, and returns a AacFlNonInitializedBlendTree that will edit the given BlendTree.<br/>
  This does not reset any other attribute of the blend tree (e.g., automatic thresholds, etc.).<br/>
  This BlendTree instance is memorized in the current AacFlModification instance memory.<br/>
  Note: The BlendTree class is editor-only, so they can't be referenced inside scene components or asset objects. If you have a Motion instance that is a BlendTree instance, you should cast it to BlendTree.

## Clear

- `AacFlModification ClearAnimatorController(AnimatorController controllerToReset)`<br/>
  Immediately removes all layers and all parameters from the given AnimatorController.<br/>
  This AnimatorController instance is memorized in the current AacFlModification instance memory.<br/>
  Note: The AnimatorController class is editor-only, so they can't be referenced inside scene components or asset objects. If you have a RuntimeAnimatorController instance, you should cast it to AnimatorController.

## Edit

- `AacFlController EditAnimatorController(AnimatorController controllerToReset)`<br/>
  Returns a AacFlController that will edit the given AnimatorController. This does not reset the AnimatorController.<br/>
  This AnimatorController instance is memorized in the current AacFlModification instance memory.<br/>
  Note: The AnimatorController class is editor-only, so they can't be referenced inside scene components or asset objects. If you have a RuntimeAnimatorController instance, you should cast it to AnimatorController.

### Set Dirty

- `void SetDirtyAll()`<br/>
  Calls `EditorUtility.SetDirty(...)` on every single AnimatorController, AnimationClip, and BlendTree asset instances previously memorized by this AacFlModification instance.
