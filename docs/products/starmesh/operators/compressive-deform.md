# Compressive Deform

:::danger
This tool is currently not available, and this documentation is currently being written.
:::

The *Starmesh Op. Compressive Deform* component creates a blendshape that emulates the [effect of a flat surface being compressed](https://en.wikipedia.org/wiki/Poisson%27s_ratio)
against that object.

This is different from rescaling. The surface of a non-flat object will be progressively flattened as it's being compressed.
- It will move flatten vertices progressively (it will not flatten vertices far from the compression surface).
- It will expand the object laterally to the force.
- The lateral expansion is limited by the proximity to the compression surface (it will not laterally expand the whole object at once).
