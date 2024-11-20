import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Translate Rotate Scale (TRS)

The *Starmesh Op. Translate Rotate Scale (TRS)* component creates a blendshape that translates, rotates, and scales affected vertices
from one point to another.

<video controls muted width="816">
    <source src={'https://downscale.srv.hai-vr.dev/assets/docs/xN5fmy0syx.mp4' ?? require('../img/xN5fmy0syx.mp4').default}/>
</video>

## How to use

### Create the operator and selectors

- Add a *Starmesh Op. Translate Rotate Scale (TRS)* component on a new GameObject in your avatar.
- In the selectors of this component, add a *Starmesh Select Meshes*, or choose one that you already have.
  - Configure the *Select Meshes* selector so that it affects the relevant meshes.
- In the selectors of this component, add other selectors, for instance, a *Starmesh Select Point Radius*.

:::tip
You can add selectors as children of this GameObject.
:::

### Configure the operator

#### Configure the blendshape

- Choose a name for the generated blendshape in the *Shape Name*.
- The *Shape Default Weight* setting is the default value of the blendshape on your SkinnedMeshRenderer component after it is created.
  - If you are going to use that blendshape for scripts or animations, leave the *Shape Default Weight* to 0.
  - If you are not going to use that blendshape in any scripts nor animations, set the *Shape Default Weight* to 100.

#### Configure the transformation

- Make sure you have gizmos enabled in your scene.
- In your scene, move the **Origin** gizmo to the starting position.
  - If you use a *Starmesh Select Point Radius* without an offset, you can set the *Origin Transform* instead to be that *Select Point Radius component*,
    so that the starting point is the same.
<video controls width="816" autostart="false">
    <source src={'https://downscale.srv.hai-vr.dev/assets/docs/D7ZTv8kgch.mp4' ?? require('../img/D7ZTv8kgch.mp4').default}/>
</video>
- In your scene, move and rotate the **Destination** gizmo to the ending position.
- Keep the *Destination Scale* as it is, or change it.

### Test the operator

- Move the *Preview* slider at the top to test the blendshape.
- Press the *Recalculate Normals* button to test the blendshape with proper shading. This is slower, so turn it off if you are not testing your materials.

## Advanced settings

### Recalculate Normals

Normals will be automatically recalculated for this blendshape.

In general, you should recalculate normals, but there are a few exceptions to consider:
- If your blendshape is a conflict prevention blendshape, check *Do Not Recalculate Normals*.
- If your blendshape is a face expression, decide if you want to check *Do Not Recalculate Normals* by previewing your avatar with the *Recalculate Normals* button at the top.

## Creating prefabs

<HaiTags>
<HaiTag requiresVRChat={true} />
</HaiTags>

The field *Animation Repathing* is used for the creation of <HaiTag requiresVRChat={true} short={true} /> prefabs using *[Modular Avatar Merge Animator](https://modular-avatar.nadena.dev/docs/reference/merge-animator)*.

When this field is not empty, *Starmesh* will generate *[Modular Avatar Blendshape Sync](https://modular-avatar.nadena.dev/docs/reference/blendshape-sync)* components inside the meshes
used by *Starmesh Select Meshes* during the build, which will bind the animations targeting the operator's object name with the blendshape defined
in *Animation Repathing* to the generated blendshapes. For concrete examples, see the [VRChat prefabs](../prefabs) section.

In addition, if you leave *Shape Name* empty, *Starmesh* will generate a unique blendshape name.
