---
title: Activate with Skinned Offsets
unlisted: true
sidebar_position: 2
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";
import HaiSupport from "/docs/_support.mdx";

# ⛔ Activate Constraint with Skinned Offsets (Menu option)

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

*This functionality is for advanced users.* 

A new menu option is added in the inspector of the Parent constraint component
(and VRC Parent Constraint component if <HaiTag requiresVRChat={true} short={true} /> Avatars SDK is installed).

Pressing this menu option will behave similarly to the *Activate* button on the Parent constraint, but **calculates different offsets**:
These offsets will make the Parent constraint behave more like weight painting/mesh skinning.

This is the same algorithm that is used by the [Skinned Mesh Constraint Builder](./skinned-mesh-constraint) component.
If you are already using this component, you do not need to use this.

## Download

The tool is free for download using ALCOM.

### ALCOM

- Use this link to **[install our listing to ALCOM](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**.
- Add *Haï ~ Skinned Mesh Constraint* to your project using ALCOM.

## How to use

TODO

## Versions

- **1.1.0**: Added.

Classification: *This functionality is application-agnostic.*
