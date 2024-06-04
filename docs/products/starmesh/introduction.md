---
sidebar_position: 1
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Introduction

:::danger
This documentation is currently being written.
:::

These components only work on a properly set up avatar for the app of your choice.

:::info[**Platform-specific considerations**]
<HaiTag requiresVRChat={true} short={true} /> If you're creating an avatar for VRChat,
make sure your avatar already has a properly configured [VRC Avatar Descriptor](https://creators.vrchat.com/avatars/creating-your-first-avatar#step-5---adding-an-avatar-descriptor).

<HaiTag requiresChilloutVR={true} short={true} /> If you're creating an avatar for ChilloutVR,
make sure your avatar already has a properly configured [CVR Avatar](https://developers.abinteractive.net/cck/components/avatar/).
:::

Starmesh has components called **Operators**, which perform the mesh deformations. For now, we will add the simplest operator:
- Create a new GameObject on your avatar, and give it the name of your choice.
    - If you're not sure where to put that new GameObject, create the GameObject at the root of the avatar.
    - If you decide to create a GameObject somewhere else in the avatar, the scale must be uniform (the same on all axes).
- Add a **Starmesh Op. Translate Rotate Scale (TRS)** component. This is an **operator**.
- *The following section will select the meshes:*
    - Click the **Create Mesh Selector** button.
    - Look in the object hierarchy: A new Mesh Selector object has been added as a child of your GameObject. Select it.
    - In that Mesh Selector, add the meshes of your avatar that you want to deform, such as your hair, or your lower body.
- *The following section will select a radius:*
    - Create a new GameObject under the hierarchy of the operator.
    - Add a **Starmesh Select Radius** component.
    - Move that object around the area of the avatar that you want to affect.
- *The following section will configure your operator:*
    - Select the object that contains the operator.
    - Change the origin.
    - Change the destination.

:::danger
This documentation page is incomplete.
:::
