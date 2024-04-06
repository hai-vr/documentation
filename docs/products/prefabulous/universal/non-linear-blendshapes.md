---
unlisted: true
---
# ⛔ Non-linear Blendshapes

Rewrites existing blendshapes by adding multiple regularly-spaced keyframes:
- At the values of 0 and 100, the blendshape looks identical to the original,
- between 0 and 100, each vertex is moved differently based on the distance it moves relative to the maximum distance moved on any vertex of this blendshape.

This causes the vertices of this blendshape to be moved non-linearly.

## Versions

- **1.11.0**: Added.

Classification: *This component is application-agnostic.*