---
sidebar_position: 1
---

# Create asset and component

## Create a FaceTra asset

In the Project tab, right click in one of the folders, and create a “Hai/FaceTra” asset for your avatar.

This will be used to hold the face tracking configuration for the model.

## Create a component on your avatar

In the scene that contains your avatar, add a GameObject somewhere on your avatar, and add a “Hai’s FaceTra Shape Creator” component to it. Just type “face” in your component search.

- **Avatar Root**: Your avatar root, where the Animator component is located
- **Face Mesh:** The mesh that contains your face, which *should* be called *Body.*
    - **VRChat:** If your face mesh is not called Body, you won’t be able to use your avatar with most face tracking animators. Either rename it to Body, or make sure your face tracking animator is compatible with these kind of names.
- **Face Tra File:** Use the FaceTra asset file that you’ve created earlier.
- Leave all the rest as is.

If you have multiple avatars with the same model in your scene or in different scenes, you can duplicate or create the component again, referencing that avatar.

All face tracking configuration that will be done below is stored in the FaceTra asset file.