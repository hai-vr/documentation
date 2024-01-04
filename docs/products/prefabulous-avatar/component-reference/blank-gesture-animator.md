# Blank Gesture Animator

Replaces the Gesture animator of the avatar with a blank one, as early as possible.

This ensures that Gesture layers created by other non-destructive tooling will begin with a blank state.

:::info
This component exists so that you can drop a prefab containing this component into an avatar in order to reset it,
without having to modify the original avatar descriptor by hand.
:::

## Versions

- **1.2.0**: Added.

Classification: *This component is **VRChat only**.*
