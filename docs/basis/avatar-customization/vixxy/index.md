# Vixxy

import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";

<HaiTags>
<HaiTag requiresBasis={true} />
</HaiTags>

*Vixxy* is a user-accessible interface to toggle or trigger effects on an avatar in Basis.

This component is primarily intended to be used through the Unity inspector directly by non-programmer users.

## Create a toggle

Create a new GameObject in your avatar and add a **HVR Vixxy Control** component to it.

Then, click the "Create menu on this control" button.

Drag objects into the *Toggle Objects* category:

- Objects placed in *Enable these when active* will be visible when the menu is turned on.
- Objects placed in *Disable these when active* will be visible when the menu is turned off.

If you want to toggle a component instead of the object itself, drag the object into the *Toggle Objects* category, and then choose the desired component in the dropdown.

## Use more than two choices

If you want more than two choices, open the *Settings* category, and click

## Menu

There are three different types of controls achievable:
- A toggle between two choices (OFF/ON).
- A selection between more than three choices.
- A slider.

These controls are accessible in-app through *"Settings > My Avatar"*:

## Change Properties

If you need to change the value of blendshapes or change the values inside shaders, open the *Change Properties* category.

### Create the first object group

In the Properties category, click + to create a group.

Drag the objects to change into that group.

## Search for properties

In the components that will show up below, click one of *Properties*, *Materials*, *BlendShapes* to start looking for properties to affect.

In the search field, type a few letters corresponding to the property you're looking for, and press the Add button to add it.

When done, press the _ button at the top right to minimize the search.

You can then edit the property.

### Available functions

The following is possible as of the current version:
- ✅ Toggle GameObjects and many Component types ON/OFF.
- ✅ Change the value of blendshapes.
- ✅ Change float values in material properties.
- ✅ Change color values in material properties.
- ✅ Change texture slots in material properties.
- ✅ Change the text string of a TextMeshPro / TextMeshProUGUI / Text component, with float number formatting.

The following is not yet possible as of the current version.
- ❌ Cannot change material slot in a Renderer.
- ❌ Cannot change any other property.
- ❌ Cannot translate, scale, or rotate objects.

### Display a number inside TextMeshPro

The text inside TextMeshPro components and Text components can be modified. Here are some examples to get you started:

You can display absolute values using `{0}`, `{0:0}`, or `{0:0.00}`.

For a value of 93.1234:

- `Heart rate: {0}` shows *Heart rate: 93.1234*
- `Heart rate: {0:0}` shows *Heart rate: 93*
- `Heart rate: {0:0.0}` shows *Heart rate: 93.1*
- `Heart rate: {0:0.00}` shows *Heart rate: 93.12*

If your values use 0.0 to represent 0% and 1.0 to represent 100%, they can be displayed as a percentage
using `{1}`, `{1:0}`, or `{1:0.00}`. You do not need to display the percent sign if you wish not to.

For a value of 0.123456:

- `Power: {1}%` shows *Power: 12.3456%*
- `Power: {1:0}%` shows *Power: 12%*
- `Power: {1:0.0}%` shows *Power: 12.3%*
- `Power: {1:0.00}%` shows *Power: 12.34%*

A period `.` will always be displayed for the decimal separator, even if the computer OS language is set to French.

## Additional settings

### Networking

When the **Networked** option is checked, the state of this object will be made visible to other users.

[//]: # ()
[//]: # (### Advanced Networking)

[//]: # ()
[//]: # (- **Automatic**: This is the best setting for almost all cases. *This is the default.*)

[//]: # (- **Updated Extremely Frequently**: This should only be used for anything controlled by an external program which outputs a)

[//]: # (  continuous stream of data: heart rate that updates rapidly, face tracking, toe tracking, tracker position, etc.)

[//]: # (  - This should **NOT** be used for anything controlled by an external program which is not continuous:)

[//]: # (    Do not use this with a doorbell, light switch, shock collar, heart rate that updates slowly, etc.)

[//]: # ()
[//]: # (### Remember)

[//]: # ()
[//]: # (*Remember* controls how the state of your avatar is saved and restored when loading avatars.)

[//]: # ()
[//]: # (- **Do Not Remember**: The state of this object is not saved.)

[//]: # (- **Remember In This Avatar**: The state of this object is restored when an avatar with this same name loads.)

[//]: # (  - Recommended to save things within a costume.)

[//]: # (  - This is similar to how other social VR apps do it.)

[//]: # (  - Examples: The color of your shirt, whether your sleeves are pulled back.)

[//]: # (- **Remember In This Tag**: The state of this object is restored when an avatar with the same tag and address loads. You can choose the tag.)

[//]: # (  - Recommended to save the settings of an avatar base which may be shared across multiple costumes of the same avatar.)

[//]: # (  - Examples: Whether your head uses a ponytail, wearing glasses, the visibility of ears.)

[//]: # (- **Remember Across Avatars**: The state of this object is restored when an avatar loads, even on completely different avatars, as long as the address remains the same. *This is the default.*)

[//]: # (  - Recommended to save settings which may be shared across most of your avatars.)

[//]: # (  - Examples: Light limit, how shiny your skin is, the emission strength.)

[//]: # ()
[//]: # ()
[//]: # (## User, Creator, Developer)

[//]: # ()
[//]: # (The interface has three sections: **User, Creator, and Developer**.)

[//]: # ()
[//]: # (- The **User** section is intended for users who will wear the avatar: They can change the menu name, icon, and default state if applicable.)

[//]: # (- The **Creator** section is intended for setting up the control: Define how this control is wired to scene objects, the type of menu, and networking options.)

[//]: # (- The **Developer** section is intended for debugging the control: It shows how the control has translated the inputs of both the User and Creator sections into internal objects.)
