﻿# 💬 Mass Blendshape Sync

Generates a [Modular Avatar Blendshape Sync](https://modular-avatar.nadena.dev/docs/reference/blendshape-sync) component when the avatar is built,
which will sync as many blendshapes that exist in the *source* renderer to the renderers in *targets*.

This is ideally used with renderers that have a massive quantity of blendshapes that need to be synced, such as face tracking.

![Unity_kmeSxcDqt8.png](..%2Fimg%2FUnity_kmeSxcDqt8.png)

## How to use

This component will sync as many blendshapes that exist in the *source* renderer to the renderers in *targets*.
The blendshapes don't necessarily need to exist in Edit mode, so they can be generated by a non-destructive tool.

The blendshapes must be identically named.

To use this component:
- Add a "PA-H Mass Blendshape Sync" component anywhere in your avatar.
- In the "source" field, choose the renderer to read animations from.
- In the "targets" field, add renderers to write animations to.

## Versions

- **1.10.0**: Added.

Classification: *This component is **💬 VRChat Only**.*