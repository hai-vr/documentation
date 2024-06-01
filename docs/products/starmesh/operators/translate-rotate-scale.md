# Translate Rotate Scale (TRS)

:::danger
This tool is currently not available, and this documentation is currently being written.
:::

The *Starmesh Op. Translate Rotate Scale (TRS)* component creates a blendshape that translates, rotates, and scales affected vertices
from one point to another.

<video controls muted width="816">
    <source src={require('../img/xN5fmy0syx.mp4').default}/>
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
    <source src={require('../img/D7ZTv8kgch.mp4').default}/>
</video>
- In your scene, move and rotate the **Destination** gizmo to the ending position.
- Keep the *Destination Scale* as it is, or change it.

### Test the operator

- Move the *Preview* slider at the top to test the blendshape.
- Press the *Recalculate Normals* button to test the blendshape with proper shading. This is slower, so turn it off if you are not testing your materials.

### Advanced settings

- If your blendshape is a conflict prevention blendshape, check *Do Not Recalculate Normals*.
- If your blendshape is a face expression, decide if you want to check *Do Not Recalculate Normals* by previewing your avatar with the *Recalculate Normals* button at the top.
