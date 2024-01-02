---
title: Assign UV Tile (UDIM)
---

# Assign UV Tile

Sets the UV Tile of vertices that are moved by a blendshape.

This is meant to be used in tandem with shader features, especially [Poiyomi Toon UV Tile Discard](https://www.poiyomi.com/special-fx/uv-tile-discard).

<video controls muted width="816">
    <source src={require('../img/13rQ7HGwPr.mp4').default}/>
</video>

## How to use

This component will assign the UV tile of vertices that are moved by a blendshape.

This is meant to be used in tandem with shader features, especially [Poiyomi Toon UV Tile Discard](https://www.poiyomi.com/special-fx/uv-tile-discard),
which in this case "*provides an efficient way to toggle portions of a model on and off at runtime*".

- Using *[Poiyomi Toon UV Tile Discard](https://www.poiyomi.com/special-fx/uv-tile-discard)* makes this effectively similar to [Delete Polygons](./delete-polygons),
except that this will **not** lower your avatar polygon count; instead it will ease the rendering load when the toggle is off.
- *If you do not animate the shader feature, use [Delete Polygons](./delete-polygons) instead, which will lower your avatar polygon count.*

To use this component:
- Add one or several "PA-H Assign UV Tile" component anywhere in your avatar.
- Add blendshapes which move the polygons that you want shader features to affect. Any SkinnedMeshRenderer that has that blendshape will be affected.
- For each component, assign the channel and the corresponding checkbox. The UI is built to closely mirror [Poiyomi Toon UV Tile Discard](https://www.poiyomi.com/special-fx/uv-tile-discard).

Enter Play Mode or upload the avatar to test the results: as this is a non-destructive component, the original mesh remains intact.

<video controls muted width="816">
    <source src={require('../img/pOxhnkOYpj.mp4').default}/>
</video>

## Shader-specific uses

### Poiyomi Toon "UV Tile Discard"

If you use [Poiyomi Toon UV Tile Discard](https://www.poiyomi.com/special-fx/uv-tile-discard):

- Set the "UV Channel" to UV1, UV2, or UV3, so that it matches the "Discard UV" setting of your material.
- Use the checkbox grid. The UI is built to closely mirror Poiyomi Toon UV Tile Discard.
- Keep the "Existing UV Data" to *Do Not Clear*.
  - If you are experiencing issues caused by an existing UV channel, change the UV channel, or set "Existing UV Data" to *Set to Zero*.

:::danger
Using UV0 with "UV Tile Discard" through this component is not recommended, but if you really want to use UV0,
then set the "Existing UV Data" to *Shift*.
:::

### SCSS "Inventory System"

If you use [SCSS's Inventory System](https://gitlab.com/s-ilent/SCSS/-/wikis/Manual/Inventory-System):

:::danger
You cannot use the SCSS Inventory System to partially hide meshes that are part of the body flesh, as this would result in the texture visibly warping along the seams of the blendshape.

In SCSS, this feature should only be used with individual pieces of clothing or accessories.
:::

- Set the "UV Channel" to UV0.
- Set "Existing UV Data" to *Shift*.
- Set the "U" value to the corresponding Inventory System slot.
- Keep the "V" value to zero.

## Option: Keep Partial Polygons

If you want to exclude the vertices of polygons that are still connected to the mesh from being affected, check "Keep Partial Polygons".

On blendshapes that shrink the body, this preserves the end caps, so the blendshape still has an effect on the mesh.

This might help with some avatar models, however, this will have no effect on blendshapes that have no edge loops separating vertices apart.

<video controls muted width="816">
    <source src={require('../img/YkcjjmKw2G.mp4').default}/>
</video>

## Special thanks

- [d4rkpl4y3r](https://github.com/d4rkc0d3r/) for the references on [mesh reconstruction](https://github.com/d4rkc0d3r/d4rkAvatarOptimizer)!

## Versions

- **1.7.0**: Added.
