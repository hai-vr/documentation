# Paint New Bone

The *Starmesh Op. Paint New Bone* component creates a new bone, and repaints as many meshes of your choosing to that bone.

By default, the component will unpaint the vertices from other bones based on the weight of each vertex in that selection.

<video controls muted width="816">
    <source src={require('../img/TGeXxK1Tnr.mp4').default}/>
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

#### Set the bone

- Choose the transform of the new bone in the *Bone* field.

:::warning
Please note that many Unity applications (such as VRChat) cannot have more than 4 bones per vertex.
- Try not to paint in highly contentious areas.
- If there are more than 4 bones on a vertex, that vertex may unpaint itself from the weaker bones.
:::

### Advanced settings

#### Don't unpaint existing

By default, the new bone will be painted by proportionally stealing the weight from any existing bone that was previously painted to it.
This is so that the new bone has full control over the affected vertices.

If you want to keep the influences of the existing bones, check *Do Not Unpaint Existing*.