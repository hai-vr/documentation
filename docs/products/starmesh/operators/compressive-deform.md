# Compressive Deform

:::danger
This tool is currently not available, and this documentation is currently being written.
:::

The *Starmesh Op. Compressive Deform* component creates a blendshape that emulates the [effect of a flat surface being compressed](https://en.wikipedia.org/wiki/Poisson%27s_ratio)
against that object.

This is different from rescaling. The surface of a non-flat object will be progressively flattened as it's being compressed.
- This blendshape has multiple frames, so it *emulates* a non-linear interpolation.
- It will move vertices progressively as the blendshape progresses.
- Tt will not flatten vertices far from the compression surface, unless the compression surface becomes closer.
- It will expand the object laterally to the force.
- The lateral expansion is limited by the proximity to the compression surface.
