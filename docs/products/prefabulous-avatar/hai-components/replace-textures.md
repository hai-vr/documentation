---
unlisted: true
---
# Replace Textures

Replaces textures inside materials with other ones.

This can be used to quickly create a version of your avatar with lower resolution textures.

## How to use

This component will find materials that are configured to use a texture, and replaces those textures with other ones.

This is non-destructive: the materials in your project are not modified.

## Danger: Execute in Play Mode

**By default, this component will not be executed in Play Mode.**

In order to use this component, we must create copies of all materials on your avatar.
Since they are copies, any edits made to the materials Play Mode would not be saved.

If you are normally used to editing your avatar materials in Play Mode, this could be very disruptive for your workflow.
For this reason, this component will NOT be executed in Play Mode by default.

Check the *"(DANGER) Execute in Play Mode"* checkbox to execute it anyways.

## Versions

- **1.10.0**: Added.

Classification: *This component is application-agnostic.*