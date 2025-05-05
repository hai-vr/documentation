---
title: Activate with Skinned Offsets
sidebar_position: 2
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";
import HaiSupport from "/docs/_support.mdx";

# Activate Constraint with Skinned Offsets (Menu option)

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

<HaiVideo src="../img/cJQrFaJahI.mp4"></HaiVideo>

*Comparison between the default Activate button and Activate with Skinned Offsets.*

## Download

The tool is free for download using ALCOM.

### ALCOM

- Use this link to **[install our listing to ALCOM](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**.
- Add *Haï ~ Skinned Mesh Constraint* to your project using ALCOM.

## How to use

A new menu option is added in the inspector of the Parent constraint.

![mspaint_US2AvDUNAt.png](img%2Fmspaint_US2AvDUNAt.png)

- Create or Edit a *Parent Constraint* or *VRC Parent Constraint* component that you have not activated yet.
  - Add additional sources and source transforms, and assign the weights to each source.
- Click the three vertical dots `⋮` on the *Parent Constraint* component and select *Haï Activate with Skinned Offsets*.
- Your constraint is now activated. **Do not press** the Activate button!

:::warning
**Do not press** the *Activate* button on that constraint!

This manually calculates constraint offsets in order to avoid an issue that occurs
with the *Activate* button (*[Learn more](/docs/research/other/constraint-activate.md)*).
:::

## Learn more

- About [the "Activate" button on Parent Constraint](/docs/research/other/constraint-activate.md).

## Versions

- **1.1.0**: Added.

Classification: *This functionality is application-agnostic.*
