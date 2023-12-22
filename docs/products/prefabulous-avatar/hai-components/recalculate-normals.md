# Recalculate Normals

:::danger
This feature is not released yet.
:::

Improves the shading of SkinnedMeshRenderers by recalculating select blendshape normals (and tangent).

You should **not** use Recalculate Normals on the following blendshapes:

- In general, do not specify face expression blendshapes in toon-styled avatars.
  - Face expression blendshapes significantly move the blendshapes of the face in such a way that it's preferable to keep the normals unchanged (most of the time).
  - Use your own judgement. It may sometimes be advantageous to recalculate normals on physically-based faces,
    or on avatars modelled after animals where large portions of the face moves.
- Do not use Recalculate Normals on conflict prevention blendshapes that hide parts of the body, such as hiding hips, legs, feet, or ears.
- Do not use Recalculate Normals on blendshapes designed to hide clothing parts, such as hiding frills, bandages, socks, or piercings.

You should use Recalculate Normals on the following blendshapes:

- Body shape customization blendshapes that flatten, emboss, or enlarge areas of the body, whether it is the body flesh or clothing.
- Body adjustment blendshapes to fit clothing, such as heel adapters, or clothing that pinch the body.
