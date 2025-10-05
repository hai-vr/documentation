# Vixxy

import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";

<HaiTags>
<HaiTag requiresBasis={true} />
</HaiTags>

## User, Creator, Developer

The interface has three sections: **User, Creator, and Developer**.

- The **User** section is intended for users who will wear the avatar: They can change the menu name, icon, and default state if applicable.
- The **Creator** section is intended for setting up the control: Define how this control is wired to scene objects, the type of menu, and networking options.
- The **Developer** section is intended for debugging the control: It shows how the control has translated the inputs of both the User and Creator sections into internal objects.

## User settings



## Creator settings

### Choice

First, you need to choose the number of choices that this control will have.
- **Two choices**: Most of the time, controls have a minimum of two choices: OFF and ON. You may then configure this control to interpolate between OFF and ON, like a slider.
- **Three or more**: 

### Toggles

In the Toggle section, you can choose which GameObjects or Components will be turned on and off.

### Properties

### Networked

When the **Networked** option is checked, the state of this object will be made visible to other users. *This is the default.*

### Advanced Networking

- **Automatic**: This is the best setting for almost all cases. *This is the default.*
- **Continuous Automated Data Stream**: This should only be used for anything controlled by an external program which outputs a
  continuous stream of data: heart rate that updates rapidly, face tracking, toe tracking, tracker position, etc.
  - This should **NOT** be used for anything controlled by an external program which is not continuous:
    Do not use this with a doorbell, light switch, shock collar, heart rate that updates slowly, etc.

### Remember

*Remember* controls how the state of your avatar is saved and restored when loading avatars.

- **Do Not Remember**: The state of this object is not saved.
- **Remember In This Avatar**: The state of this object is restored when an avatar with this same name loads.
  - Recommended to save things within a costume.
  - This is similar to how other social VR apps do it.
  - Examples: The color of your shirt, whether your sleeves are pulled back.
- **Remember In This Tag**: The state of this object is restored when an avatar with the same tag and address loads. You can choose the tag.
  - Recommended to save the settings of an avatar base which may be shared across multiple costumes of the same avatar.
  - Examples: Whether your head uses a ponytail, wearing glasses, the visibility of ears.
- **Remember Across Avatars**: The state of this object is restored when an avatar loads, even on completely different avatars, as long as the address remains the same. *This is the default.*
  - Recommended to save settings which may be shared across most of your avatars.
  - Examples: Light limit, how shiny your skin is, the emission strength.
