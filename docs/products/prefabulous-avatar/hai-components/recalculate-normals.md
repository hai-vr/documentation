# Recalculate Normals

Improves the shading of SkinnedMeshRenderers by recalculating select blendshape normals (and tangents).

<video controls width="816" autostart="false">
    <source src={require('../img/mS1cQ7EheE.mp4').default}/>
</video>

*Left: Recalculate Normals active. Right: Original avatar.<br />Notice how the original avatar rim light shading behaves as if the chest were not flattened.*

## How to use

This component will improve the shading of your avatar by recalculating blendshape normals:
Light, reflections, rims, matcaps, and many more shader features are affected by the altered mesh surfaces.

To use this component:
- Add a "PA-H Recalculate Normals" component anywhere in your avatar.
- Add blendshapes that you want to recalculate. Any SkinnedMeshRenderer that has that blendshape will be affected.

Enter Play Mode or upload the avatar to test the results: as this is a non-destructive component, the original mesh remains intact.

<video controls autostart="false">
    <source src={require('../img/uI4KB1Gj4Y.mp4').default}/>
</video>

## Other notes

You should **not** use Recalculate Normals on the following blendshapes:

- In general, do not specify face expression blendshapes in toon-styled avatars.
  - Face expression blendshapes significantly move the vertices of the face in such a way that it's preferable to keep the normals unchanged (most of the time).
  - Use your own judgement. It may sometimes be advantageous to recalculate normals on physically-based faces,
    or on avatars modelled after animals where large portions of the face move in unison.
- Do not use Recalculate Normals on conflict prevention blendshapes that hide parts of the body, such as hiding hips, legs, feet, or ears.
- Do not use Recalculate Normals on blendshapes designed to hide clothing parts, such as hiding frills, bandages, socks, or piercings.

You should use Recalculate Normals on the following blendshapes:

- Body shape customization blendshapes that flatten, emboss, or enlarge areas of the body, whether it is the body flesh or clothing.
- Body adjustment blendshapes to fit clothing, such as heel adapters, or clothing that pinch the body.

<video controls width="816" autostart="false">
    <source src={require('../img/JiHvKYMj8A.mp4').default}/>
</video>

*Left: Recalculate Normals active. Right: Original avatar.<br />Notice the shadows better match the chest shape when Recalculate Normals is active.*

## Option: Erase Custom Split Normals

The original mesh may have been edited with custom split normals, which means the artist has manually edited the normals to improve the shading on the base pose.

Most of the time, these custom split normals won't cause an issue on blendshapes, but in **rare cases**, these custom split normals might
negatively interfere with blendshapes that cause a significant change in the body shape.

In particular, **if you have a blendshape that flattens part of the body**, the default recalculated normals can cause visible tearing due to the presence
of custom split normals that were optimally designed for that part of the body in the default shape.

Enabling Erase Custom Split Normals will erase the custom split normals data on the vertices affected by the specified blendshapes, **only when that blendshape is active**.

The custom split normals data remains intact on the mesh when the specified blendshapes are inactive.

![erase-split-normals.png](..%2Fimg%2Ferase-split-normals.png)

*Top: Erase Custom Split Normals enabled. Bottom: Not active<br />In this case, the lower portion was affected by custom split normals. Enabling Erase Custom Split Normals in this specific case can improve the shading by removing the smudges and inadequate surface direction in some areas.*

:::danger
Enabling Erase Custom Split Normals can lead to **worse results** in meshes that don't have custom split normals.

Only give this a try on blendshapes where shading defects are clearly visible only after you've tried Recalculate Normals first without this option.

In all other cases, **keep this option off!**
:::

If you suspect that custom split normals negatively affects your shading, you can try the following to see if it improves it:

- Create **another** "PA-H Recalculate Normals" component on your avatar. 
  - You are allowed to add that component multiple times on the same object.
- In that new component, enable Erase Custom Split Normals.
- Add the blendshape that you want to recalculate while removing Custom Split Normals.
- If that blendshape is present in multiple SkinnedMeshRenderers, **you should limit the selection to only the SkinnedMeshRenderer that has custom split normals**:
  - Enable "Limit To Specific Meshes".
  - In the "Renderers" list, only add the SkinnedMeshRenderer that has custom split normals.

:::tip
You can have the same blendshape specified on multiple "PA-H Recalculate Normals" components.

If a blendshape of SkinnedMeshRenderer is affected by multiple components, the "Erase Custom Split Normals" option will take priority.
:::

If you see no improvement, cancel your changes and add your blendshape back to your original "PA-H Recalculate Normals" component.

## Learn more

- [Technical retrospective](https://hai-vr.notion.site/Recalculate-Normals-Retrospective-e8b319e25c5a4b779c220a4d8286ded4).
  This is an article I've written that describes the quirks I had to overcome to build this tool,
  and provides some background about how blendshape normals are relevant.

## Versions

- **1.8.0** (Upcoming): Recalculate Normals should now properly work on avatars that were not posed like the model, or had a different orientation than the model.
- **1.4.0**: Add "Erase Custom Split Normals" option.
- **1.3.0**: Added.

Classification: *This component is application-agnostic.*
