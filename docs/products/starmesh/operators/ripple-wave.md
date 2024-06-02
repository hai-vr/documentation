# Ripple Wave

The *Starmesh Op. Ripple Wave* component creates a blendshape which makes a wave ripple throughout the mesh, and dissipate.

- This blendshape has multiple frames.
- The blendshape at 100% is identical to the blendshape at 0%. It is effectively animated from 1% through 99%.

<video controls muted width="816">
    <source src={require('../img/xFFl3uUwAj.mp4').default}/>
</video>

## How to use

### Create the operator and selectors

- Add a *Starmesh Op. Ripple Wave* component on a new GameObject in your avatar.
- In the selectors of this component, add a *Starmesh Select Meshes*, or choose one that you already have.
    - Configure the *Select Meshes* selector so that it affects the relevant meshes.
- In the selectors of this component, add other selectors, for instance, a *Starmesh Select Bones* or a *Starmesh Select Line Radius*.
    - If you choose to use a *Select Point Radius* or a *Starmesh Select Line Radius*, it may need to be larger than usual (or, modify the curve),
      so that the *Ripple Wave* has full influence over the affected vertices.

:::tip
You can add selectors as children of this GameObject.
:::

### Configure the operator

#### Configure the blendshape
- Choose a name for the generated blendshape in the *Shape Name*.
- The *Shape Default Weight* setting is the default value of the blendshape on your SkinnedMeshRenderer component after it is created.
    - If you are going to use that blendshape for scripts or animations, leave the *Shape Default Weight* to 0.
    - If you are not going to use that blendshape in any scripts nor animations, set the *Shape Default Weight* to the intermediate value of your choice between 0 and 100.

#### Configure the Lateral deformation

The Lateral deformation section configures how the vertices moves laterally away from the origin.

- Make sure you have gizmos enabled in your scene.
- To preview the effect, you should move the *Preview* slider to any value between 0 and 100. The value of 100 is meant to show nothing, since it's the end of the ripple.
- In your scene, move the **Origin** gizmo inside your mesh, or above the surface of the mesh, where the ripple will start.
  - Don't put it exactly the surface of your mesh, it has to be a certain distance from the surface, so that the ripple has a direction.
- Increase the **Size** gizmo so that it is right above the surface that will be compressed.
- Increase or decrease the *Lateral Margin*. This value changes how far away from the compression surface vertices will be affected.
- Increase or decrease the *Lateral Power*. This value changes the amplitude of the vertices moving laterally.

### Test the operator

- Move the *Preview* slider at the top to test the blendshape.
- Press the *Recalculate Normals* button to test the blendshape with proper shading. This is slower, so turn it off if you are not testing your materials.

### Advanced settings

#### Advanced Lateral deformation

- The *Lateral Curve* defines how the wave gains and loses amplitude for any given vertex.
- The *Lateral Dissipation* defines how the wave loses amplitude as it progresses throughout the mesh until the maximum *Size* is reached.