import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Compressive Deform

The *Starmesh Op. Compressive Deform* component creates a blendshape that emulates the [effect of a flat surface being compressed](https://en.wikipedia.org/wiki/Poisson%27s_ratio)
against that object.

<video controls muted width="816">
    <source src={require('../img/SBieqfITm9.mp4').default}/>
</video>

This is different from rescaling. The surface of a non-flat object will be progressively flattened as it's being compressed.
- This blendshape has multiple frames, so it *emulates* a non-linear interpolation.
- It will move vertices progressively as the blendshape progresses.
- It will not flatten vertices far from the compression surface, unless the compression surface becomes closer.
- It will expand the object laterally to the force.
- The lateral expansion is limited by the proximity to the compression surface.

:::danger
<HaiTags>
<HaiTag notCompatibleWithGltf={true} />
</HaiTags>

Since this blendshape has multiple frames, this cannot be used in applications if the format is VRM or GLB (i.e. Resonite).

This can still be used in <HaiTag compatibleWithVNyan={true} short={true} /> and <HaiTag compatibleWithWarudo={true} short={true} />
as long as you use their proprietary avatar formats, instead of the VRM format.
:::

## How to use

### Create the operator and selectors

- Add a *Starmesh Op. Compressive Deform* component on a new GameObject in your avatar.
- In the selectors of this component, add a *Starmesh Select Meshes*, or choose one that you already have.
    - Configure the *Select Meshes* selector so that it affects the relevant meshes.
- In the selectors of this component, add other selectors, for instance, a *Starmesh Select Bones* or a *Starmesh Select Line Radius*.
  - If you choose to use a *Select Point Radius* or a *Starmesh Select Line Radius*, it may need to be larger than usual (or, modify the curve),
    so that the *Compressive Deform* has full influence over the affected vertices. 

:::tip
You can add selectors as children of this GameObject.
:::

### Configure the operator

#### Configure the blendshape
- Choose a name for the generated blendshape in the *Shape Name*.
- The *Shape Default Weight* setting is the default value of the blendshape on your SkinnedMeshRenderer component after it is created.
    - If you are going to use that blendshape for scripts or animations, leave the *Shape Default Weight* to 0.
    - If you are not going to use that blendshape in any scripts nor animations, set the *Shape Default Weight* to 100.

#### Configure the Inwards deformation

The Inwards deformation section configures how the vertices moves inwards from the compression surface to the origin.

- Make sure you have gizmos enabled in your scene.
- You may want to set the *Preview* to 0 while setting up for the first time.
- In your scene, move the **Origin** gizmo to the far surface of your object being compressed.
- Move the **Origin** gizmo laterally (on the red/green axes) to be roughly at the center of your object. If your object is round, put it at the center of that roundness.
- Rotate the **Origin** gizmo to orient it towards the surface that will be compressed.
- Increase the **Size** gizmo so that it is right above the surface that will be compressed.
- Move **Maximum** gizmo so that it represents the maximum compression that you will allow.

#### Configure the Lateral deformation

The Lateral deformation section configures how the vertices moves laterally away from the origin.

- Make sure you have gizmos enabled in your scene.
- You should set the *Preview* to 100.
- For now, increase the *Lateral Margin* to any higher value. You won't see any visible changes until you set the *Lateral Power* next.
- Increase the *Lateral Power* to any higher value.
- Increase or decrease the *Lateral Margin*. This value changes how far away from the compression surface vertices will be affected.
- Increase or decrease the *Lateral Power*. This value changes how much the vertices will move laterally as the compression progresses.
- If you haven't already done it, move the **Origin** gizmo laterally (on the red/green axes) to be roughly at the center of your object. If your object is round, put it at the center of that roundness.
  - You will notice as you move the **Origin** gizmo laterally that the vertices will expand in a different direction.
<video controls muted width="816">
    <source src={require('../img/fcnROnCHkD.mp4').default}/>
</video>

#### Configure the Lateral deformation to decrease the influence near the center

- Increase or decrease the *Lateral Center Displacement Distance*. This value creates an area near the center that will be immune to the effect of the lateral deformation.
<video controls muted width="816">
    <source src={require('../img/sB0r9fu05b.mp4').default}/>
</video>

#### Configure the Lateral deformation for Cylindrical shapes

- If your compressed object has more of a cylindrical shape than a round shape:
  - Check the *Lateral Is Cylindrical* checkbox.
  - Rotate the **Origin** gizmo so that the vertical lines line up with the direction of your cylindrical shape.
<video controls muted width="816">
    <source src={require('../img/0WoLXFb7oJ.mp4').default}/>
</video>

### Test the operator

- Move the *Preview* slider at the top to test the blendshape.
- Press the *Recalculate Normals* button to test the blendshape with proper shading. This is slower, so turn it off if you are not testing your materials.

### Advanced settings

#### Configure the Displacement over %

The *Displacement over %* section lets you configure how the vertices should move over time, depending on how far that vertex is away from the compressive surface.
- The *Surface Curve Response* configures how the vertices that are on the surface will move.
- The *Inside Curve Response* configures how the vertices that are on the inside surface (closer to Origin) will move.

As easy tweak you can try is to edit the *Surface Curve Response*, and tilt the angle of the point at (0, 0).

<video controls muted width="816">
    <source src={require('../img/XbNrbYjAKk.mp4').default}/>
</video>

#### Recalculate Normals

Normals will be automatically recalculated for this blendshape.

[//]: # (In general, you should recalculate normals. If you have any reason not to, check *Do Not Recalculate Normals* to disable it.)
