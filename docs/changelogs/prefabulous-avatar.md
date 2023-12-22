---
title: ⚠️ Prefabulous Avatar
---

## 1.3.0

### New component: [Recalculate Normals](/docs/products/prefabulous-avatar/hai-components/recalculate-normals)

A new component, [Recalculate Normals](/docs/products/prefabulous-avatar/hai-components/recalculate-normals), has been added to Prefabulous Avatar.

This component improves the shading of SkinnedMeshRenderers by recalculating select blendshape normals (and tangents).

<video controls autoplay muted>
    <source src={require('/docs/products/prefabulous-avatar/img/mS1cQ7EheE.mp4').default}/>
</video>

### Technical notes

- Recalculate Normals will recalculate select blendshape normals of SkinnedMeshRenderers (and tangents).
- Blendshape delta normals (and tangents) are usually zero on avatar uploads.
  - This may cause the avatar shading to look abnormal, especially on blendshapes that flatten part of the body, or significantly push it out.
- This component attempts to recalculate normals of individual blendshapes by doing the following:
  - Bake a static mesh of a SMR mesh when 0 blendshapes are running
  - Build a data structure describing vertices that have same position and normal
  - Use [RecalculateNormals](https://docs.unity3d.com/ScriptReference/Mesh.RecalculateNormals.html). This is done even when 0 blendshapes are active, so that the delta is calculated based on Unity's judgement of what's the normal data at rest.
  - Using that previous data structure, rebuild normal data by averaging and renormalizing vertex normals that had the same position and normal
    - This is done to fix an issue where an artist-authored vertex is part of an UV seam, causing the mesh data to split that vertex into multiple, effectively causing the RecalculateNormals output to have different normals for that vertex.
  - Use [RecalculateTangents](https://docs.unity3d.com/ScriptReference/Mesh.RecalculateTangents.html).
  - Do all of the above again for each blendshape to recalculate, and use that to calculate a delta normal and a delta tangent.
  - Once all blendshapes are processed, effectively rewrite all of the mesh blendshapes with these modifications.

## 1.2.1

- Fix a compatibility issue with Unity 2022
- Allow installation with VRChat Avatars SDK 3.5.x

## 1.2.0

First public experimental release.
