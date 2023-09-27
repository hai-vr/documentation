---
title: Non-Destructive Dependencies
---

# Non-Destructive Dependencies

:::note
This page is only destined for module developers.
:::

The following sections describe parts of the Vixen Processor.

```mermaid
graph TD;
%%{init:{'flowchart':{'nodeSpacing': 80, 'rankSpacing': 30}}}%%
    VRCF_FOS[VRCFury Force Object State]:::vrcf --> |Scene state ready|V_CODS[Vixen Cache Object Default State]:::vixen;
    V_CODS --> |Properties cached|V_CA[Vixen Create Animations]:::vixen;
    V_CA --> |Animations generated|V_IM[Vixen Intermodule]:::vixen;
    V_CA --> |Animations generated|V_CAR[Vixen Create Animators]:::vixen;
    V_AC[Vixen As Code]:::vixen --> |Blend trees and animators generated|V_CAR;
    V_IM --> |Animation assets exported|VRCF_T[VRCFury Toggle]:::vrcf;
    V_CAR --> |Animators generated|V_CMAC[Vixen Create Modular Avatar Components]:::vixen;
    V_CMAC --> |Merge Animator declared|MA_MA[Modular Avatar Merge Armature]:::ma;
    V_CMAC --> |Merge Animator declared|MA_BP[Modular Avatar Bone Proxy]:::ma;
    MA_MA --> |Objects at their final locations|MergeAnimators;
    MA_BP --> |Objects at their final locations|MergeAnimators;
    VRCF_T --> |Toggle fully declared|MergeAnimators;
    subgraph MergeAnimators[Merge Animators]
        direction LR
        VRCF_FC[VRCFury Full Controller]:::vrcf --- MA_MAA[Modular Avatar Merge Animator]:::ma;
    end
    MergeAnimators --> |Playable layers generated|Optimizers:::optsub;
    subgraph Optimizers
        direction LR
        DARK[d4rkpl4y3r's Avatar Optimizer]:::opt --- ANAT[Anatawa12's Avatar Optimizer]:::ma;
        ANAT:::opt --- VRCF_DTO[VRCFury Direct Tree Optimizer]:::vrcf;
    end
    
    classDef vrcf fill:#FDC,stroke:#CBA
    classDef vixen fill:#FCF,stroke:#CAC
    classDef ma fill:#CCF,stroke:#AAC
    classDef opt fill:#CCC,stroke:#777
    classDef optsub fill:#EEE,stroke:#AAA
```

## Vixen Cache Object Default State

This is part of the main Vixen Processor.

- Vixen will cache all needed object default states, which will be used to generate animations for the inactive states (i.e. when a toggle is turned off).
    - This includes material changes, as the default values within those materials will be sampled.
    - This includes turning on or off GameObject or Components.
    - Vixen does not treat objects differently whether they're tagged EditorOnly or not in the scene.
- For this reason, Vixen needs to run *after* properties are changed in the scene.

## Vixen Create Animations

This is part of the main Vixen Processor.

- Vixen uses GetComponentsInChildren to find components to animate, when the Selection setting of an object group is set to Everything or Recursive Search.
- The behaviour of GetComponentsInChildren should be based on the structure of the avatar hierarchy during Edit mode. 
- For this reason, Vixen needs to run *before* other modules rearrange the structure of the avatar hierarchy in such a way that GetComponentsInChildren would return different results.

## Vixen Intermodule

This is part of the main Vixen Processor.

- Vixen exports animations into known asset references for other modules to use.
- For this reason, Vixen needs to run *before* other modules that rely on those asset references.

## Vixen Create Modular Avatar Components

This is part of the main Vixen Processor.

- Vixen creates Modular Avatar components to be used by Modular Avatar.
- For this reason, Vixen needs to run *before* Modular Avatar.