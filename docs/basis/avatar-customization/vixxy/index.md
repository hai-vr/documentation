# Vixxy

WIP

### Networked

When the **Networked** option is checked, the state of this object will be made visible to other users.

### Advanced Networking

- **Automatic**: This is the best setting for almost all cases.
- **Continuous Automated Data Stream**: This should only be used for anything controlled by an external program which outputs a
  continuous stream of data: heart rate that updates rapidly, face tracking, toe tracking, tracker position, etc.
  - This should **NOT** be used for anything controlled by an external program which is not continuous:
    Do not use this with a doorbell, light switch, shock collar, heart rate that updates slowly, etc.

### Remember

- **Do Not Remember**: The state of this object is not saved.
  - This is the default.
- **Remember In This Avatar**: The state of this object is restored when an avatar with this same name loads.
  - Recommended to save things within a costume.
  - This is similar to how other social VR apps do it.
- **Remember In This Tag**: The state of this object is restored when an avatar with the same tag loads. You can choose the tag.
  - Recommended to save the settings of an avatar base which may be shared across multiple costumes of the same avatar.
- **Remember Across Avatars**: The state of this object is restored when an avatar loads, even on completely different avatars.
  - Recommended to save settings which may be shared across most of your avatars.
