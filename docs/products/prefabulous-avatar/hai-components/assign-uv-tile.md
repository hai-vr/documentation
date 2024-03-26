---
title: Assign UV Tile (UDIM)
---

# Assign UV Tile

Sets the UV Tile of vertices that are moved by a blendshape, or optionally an entire mesh.

This is meant to be used in tandem with shader features, especially:
- [Poiyomi Toon UV Tile Discard](https://www.poiyomi.com/special-fx/uv-tile-discard),
- [lilToon 1.7.1 and above using UV Tile Discard](https://twitter.com/lil_xyzw/status/1747601947069464752) since mid-January 2024.

<video controls muted width="816">
    <source src={require('../img/13rQ7HGwPr.mp4').default}/>
</video>

## How to use

This component will assign the UV tile of vertices that are moved by a blendshape, or optionally an entire mesh.

This is meant to be used in tandem with shader features, especially [Poiyomi Toon UV Tile Discard](https://www.poiyomi.com/special-fx/uv-tile-discard) and [lilToon UV Tile Discard](https://twitter.com/lil_xyzw/status/1747601947069464752) (since mid-January 2024),
which in this case "*provides an efficient way to toggle portions of a model on and off at runtime*".

- Using *[Poiyomi Toon](https://www.poiyomi.com/special-fx/uv-tile-discard)* or [lilToon](https://twitter.com/lil_xyzw/status/1747601947069464752) UV Tile Discard makes this effectively similar to [Delete Polygons](./delete-polygons),
except that this will **not** lower your avatar polygon count; instead it will ease the rendering load when the toggle is off.
- *If you do not animate the shader feature, use [Delete Polygons](./delete-polygons) instead, which will lower your avatar polygon count.*

To use this component:
- Add one or several "PA-H Assign UV Tile" component anywhere in your avatar.
- Then:
    - If you want to affect some blendshapes:
      - Keep the Mode to **"Blend Shapes"**.
      - Add blendshapes which move the polygons that you want shader features to affect. Any SkinnedMeshRenderer that has that blendshape will be affected.
    - If you want to affect the entire mesh:
      - Set the Mode to **"Entire Mesh"**.
      - Click on *Meshes* to edit the list with the meshes you want to affect (or drag and drop meshes to it).
- For each component, assign the channel and the corresponding checkbox. The UI is built to closely mirror [Poiyomi Toon UV Tile Discard](https://www.poiyomi.com/special-fx/uv-tile-discard), and [lilToon](https://twitter.com/lil_xyzw/status/1747601947069464752)'s layout is just as similar.

Enter Play Mode or upload the avatar to test the results: as this is a non-destructive component, the original mesh remains intact.

<video controls muted width="816">
    <source src={require('../img/pOxhnkOYpj.mp4').default}/>
</video>

## About "Entire Mesh" mode

"Entire Mesh" should be used alongside an avatar optimization tool that will merge existing meshes, such as [d4rkpl4y3r's d4rkAvatarOptimizer](https://github.com/d4rkc0d3r/d4rkAvatarOptimizer)
or [anatawa12's AvatarOptimizer](https://github.com/anatawa12/AvatarOptimizer).

Prefabulous Avatar does not provide any mesh optimization components that rectifies animation paths at this time.

## Shader-specific uses

### Poiyomi Toon "UV Tile Discard"

If you use [Poiyomi Toon UV Tile Discard](https://www.poiyomi.com/special-fx/uv-tile-discard):

:::warning
If you use Poiyomi Toon version 8.0 or lower and you notice an obvious graphical glitch when using UV Tile Discard,
please upgrade to Poiyomi Toon version 8.1 or higher.
:::

- Set the "UV Channel" to UV1, UV2, or UV3, so that it matches the "Discard UV" setting of your material.
- Use the checkbox grid. The UI is built to closely mirror Poiyomi Toon UV Tile Discard.
- Keep the "Existing UV Data" to *Do Not Clear*.
  - If you are experiencing issues caused by an existing UV channel, change the UV channel, or set "Existing UV Data" to *Set to Zero*.

:::danger
Using UV0 with "UV Tile Discard" through this component is not recommended, because you cannot partially hide meshes that are part of the body flesh,
as this would result in the texture visibly warping along the seams of the blendshape; in this case, use UV1, UV2, or UV3.

That said, if you really want to use UV0, then set the "Existing UV Data" to *Shift*.
:::

### lilToon "UV Tile Discard"

- If you use [lilToon UV Tile Discard](https://twitter.com/lil_xyzw/status/1747601947069464752):

:::warning
You must use lilToon 1.7.1 or above.
:::

- Set the "UV Channel" to UV1, UV2, or UV3, so that it matches the "Discard UV" setting of your material.
  - It is **strongly recommended** that you switch the UV channel of the material to something other than UV0.
- Use the checkbox grid to match your setting from the UV Tile Discard tab.
- Keep the "Existing UV Data" to *Do Not Clear*.
  - If you are experiencing issues caused by an existing UV channel, change the UV channel, or set "Existing UV Data" to *Set to Zero*.

:::danger
Using UV0 with "UV Tile Discard" through this component is not recommended, because you cannot partially hide meshes that are part of the body flesh,
as this would result in the texture visibly warping along the seams of the blendshape; in this case, use UV1, UV2, or UV3.

That said, if you really want to use UV0, then set the "Existing UV Data" to *Shift*.
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

- **1.9.0**:
    - Assign UV Tile can now assign the **entire mesh** to an UV Tile.
    - NDMF Compatibility: This component now runs before `com.anatawa12.avatar-optimizer` in order to make sure meshes are not merged and blendshapes are not lost before this runs.
- **1.7.0**: Added.

Classification: *This component is application-agnostic.*
