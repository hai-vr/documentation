# Recalculate Normals

Improves the shading of SkinnedMeshRenderers by recalculating select blendshape normals (and tangents).

<video controls autoplay muted>
    <source src={require('../img/mS1cQ7EheE.mp4').default}/>
</video>

*Left: Recalculate Normals active. Right: Original avatar.<br />Notice how the original avatar rim light shading behaves as if the chest were not flattened.*

## How to use

This component will improve the shading of your avatar by recalculating blendshape normals:
Light, reflections, and rims are affected by the altered mesh surfaces.

To use this component:
- Add a "PA-H Recalculate Normals" component anywhere in your avatar.
- Add blendshapes that you want to recalculate. Any SkinnedMeshRenderer that has that blendshape will be affected.

Enter Play Mode or upload the avatar to test the results: as this is a non-destructive component, the original mesh remains intact.

<video controls autoplay muted>
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

<video controls autoplay muted>
    <source src={require('../img/JiHvKYMj8A.mp4').default}/>
</video>

*Left: Recalculate Normals active. Right: Original avatar.<br />Notice the shadows better match the chest shape when Recalculate Normals is active.*

## Learn more

- [Technical retrospective](https://hai-vr.notion.site/Recalculate-Normals-Retrospective-e8b319e25c5a4b779c220a4d8286ded4).
  This is an article I've written that describes the quirks I had to overcome to build this tool,
  and provides some background about how blendshape normals are relevant.
