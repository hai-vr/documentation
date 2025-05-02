import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";
import HaiSupport from "/docs/_support.mdx";

# Skinned Mesh Constraint Builder

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

Creates a parent constraint that moves with the closest polygon of a Skinned Mesh Renderer.

Use this component when you notice that attaching an object to your body is not as straightforward as parenting to a bone.

This does not follow the movement of blendshapes.

<HaiVideo src="../img/oSEDSUFVRj.mp4"></HaiVideo>

![Unity_4rDudyR3MY.png](img%2FUnity_4rDudyR3MY.png)

## Download

The tool is free for download using ALCOM.

### ALCOM

- Use this link to **[install our listing to ALCOM](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**.
- Add *Haï ~ Skinned Mesh Constraint* to your project using ALCOM.

## How to use

This component generates a Parent constraint on the same object as you put the *Skinned Mesh Constraint Builder* component on,
and does not move that object.

The Parent constraint will be configured to be weight painted in the same way as the mesh itself.

Use this component when you notice that attaching an object to your body is not as straightforward as parenting to a bone.

<HaiSupport/>

To use this component:
- Add a "Skinned Mesh Constraint Builder" component on the GameObject that you want to put a constraint on.
- In the *Source Mesh* field, select the Skinned Mesh Renderer that contains the polygon you want to attach this object to.
- Ideally, the origin of that object should already be close to the polygon that you want to attach it to.
  - If you cannot change the origin of that object, add an offset in the *Sampler Offset* field to be closer to that face.
- Click the *Create Parent Constraint* button.
- When finished, you can remove the *Skinned Mesh Constraint Builder* component, or you can keep it on your avatar for future reference.
  - This component has no effect during builds.

:::warning
**Do not press** the *Activate* button on the constraint!

The *Skinned Mesh Constraint Builder* manually calculates constraint offsets in order to avoid an issue that occurs
with the *Activate* button (*[Learn more](/docs/research/other/constraint-activate.md)*).
:::

## Optional: Bind Method

By default, the weights of the constraints will sample from the three vertices of the closest triangle of the mesh,
weighted using barycentric coordinates.

If you want to use the closest vertex instead of the closest face, change *Bind Method* to *Closest Vertex*.

The selected triangle or vertex is shown for five seconds when you click *Create* or *Update*.

## Optional: Vendor

By default, we will create a *VRC Parent Constraint* if <HaiTag requiresVRChat={true} short={true} /> Avatars SDK is installed in the project (3.7.3 or above).

If you want to generate a plain Unity *Parent constraint*, change the *Vendor* field to *Unity* before creating the constraint.

![Unity_wwX1T9ck1l.png](img%2FUnity_wwX1T9ck1l.png)

*We will generate a VRC Parent Constraint on VRChat projects.*

## Learn more

- About [the "Activate" button on Parent Constraint](/docs/research/other/constraint-activate.md).

## Versions

- **1.0.1**: Added.

Classification: *This component is application-agnostic.*
