---
sidebar_position: 1
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";
import HaiSupport from "/docs/_support.mdx";

# Skinned Mesh Constraint Builder

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

Creates a parent constraint that is weighted to move similarly to the closest polygon of a Skinned Mesh Renderer.

Use this component when you notice that attaching an object to your body is not as straightforward as parenting to a bone.

This does **not** follow the movement of blendshapes, and does **not** follow the movement of cloth meshes.

:::tip[Compatibility notes]
- It has been tested to work on Unity 2020, Unity 2022, and Unity 6, and should work on newer versions.
- It is confirmed to work in <HaiTag compatibleWithVNyan={true} short={true} />, <HaiTag requiresVRChat={true} short={true} />, and <HaiTag requiresBasis={true} short={true} /> projects. Other applications may be compatible.
:::

<HaiVideo src="../img/oSEDSUFVRj.mp4"></HaiVideo>

![Unity_4rDudyR3MY.png](img%2FUnity_4rDudyR3MY.png)

## Download

The tool is free to download using ALCOM.

### ALCOM

- Use this link to **[install our listing to ALCOM](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**.
- Add *Haï ~ Skinned Mesh Constraint* to your project using ALCOM.

## How to use

This component generates a parent constraint on the same object as you put the *Skinned Mesh Constraint Builder* component on.

The parent constraint will be configured to be weight painted in a similar way to the mesh itself, by reusing the bone weights of
the closest polygon.

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

<HaiVideo src="../img/s21QFOIwqK.mp4" autoWidth={true}></HaiVideo>
> 🟧 *Before* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🟦 *After*
> 
> Parenting a GameObject to the Hip bone on this avatar causes an incorrect position after the legs rotate (🟧),
> because this region of the mesh is weighted to the legs in addition to the hip.
> 
> This Parent constraint uses the same bone weights as the closest face, so that it moves like a vertex (🟦).

## Optional: Bind Method

By default, the weights of the constraint will sample the bones associated with the three vertices of the closest triangle of the mesh,
weighted using barycentric coordinates.

If you want to use the closest vertex instead of the closest face, change *Bind Method* to *Closest Vertex*.

The selected triangle or vertex is shown for five seconds when you click *Create* or *Update*.

## Optional: Vendor

If the <HaiTag requiresVRChat={true} short={true} /> Avatars SDK 3.7.3 or above is installed in the project, we will create a *VRC Parent Constraint*
instead of a Unity *Parent Constraint*.

You can override this behaviour by changing the *Vendor* field to *Unity* before creating the constraint, so that it creates a Unity *Parent Constraint*.

## Learn more

- About [the "Activate" button on Parent Constraint](/docs/research/other/constraint-activate.md).

## Versions

- **1.0.1**: Added.

Classification: *This component is application-agnostic.*
