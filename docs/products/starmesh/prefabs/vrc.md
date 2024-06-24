import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# VRChat prefabs

<HaiTags>
<HaiTag requiresVRChat={true} />
</HaiTags>

In order to use these prefabs, you need to install [**Starmesh V1.5 or higher**](/docs/products/starmesh/install).

You will also need *Modular Avatar* installed in your project.

:::warning
**Starmesh generates *Modular Avatar Blendshape Sync* components during the build** in order to bind the generated blendshapes
of the *Starmesh Select Meshes* components with existing animations inside the animators, while allowing multiple independent copies of that animator to coexist in the same avatar.

The components you see inside the prefab are just the tip of the iceberg.

**You cannot replace the Modular Avatar components with the equivalent VRCFury components**.
:::


## *Ripple Wave Back Sample* prefabs

Current version of this prefab: V1.0

<video controls muted width="816">
    <source src={require('../img/qU1Rm3YaXR.mp4').default}/>
</video>

### Basic setup

- **[Download this prefab](https://github.com/hai-vr/p4s/raw/main/RippleWaveBackSample_VRC_StarmeshV1.5.0_V1.0.unitypackage)** and install it in your project.
  - (You need to already have [*Starmesh* and *Modular Avatar* installed in your project](/docs/products/starmesh/install)).
- The prefabs for this gimmick is located in `Assets/HaiPrefabsForStarmesh/PrefabsVRC/RippleWaveBackSample/`.
- Add **RippleWaveBackSample.prefab** inside your avatar.
- Change the position of the *Center* object to line up with your hip (X and Z).
- Change the position of the *RippleWave* object to line up with your hip (X and Z).

### Add or remove the menu

- Add **RippleWaveBackToggleMenu.prefab** inside your avatar to create a menu item that toggles the contacts on and off. By default, it is ON.
- By default, the prefab adds 1 synced bool (1 bit) for a menu toggle, which is ON by default.
  - If you want to remove that toggle, on the *RippleWaveBackSample* object, set the RippleWaveBackToggle > Parameter type to be Animator only.
  - If you want to make that toggle OFF by default, on the *RippleWaveBackSample* object, set the RippleWaveBackToggle > Default value to 0.

### Other

- You can change the speed of the animation:
  - On the *RippleWaveBackSample* object, set the RippleWaveBackSpeed Default value to another speed value.
  - A speed value of 1 makes the animation play in 1 second.
  - A speed value of 1.5 makes the animation play in 0.66 second.
  - A speed value of 2 makes the animation play in 0.5 second.
  - A speed value of 3 makes the animation play in 0.33 second.
  - A speed value of 4 makes the animation play in 0.25 second.
- You can have multiple of those prefabs in the same avatar, and they will execute independently.

### Performance considerations

- Each instance of this prefab use a Starmesh Ripple Wave operator, which generates a multi-frame blendshape that has a [VRAM cost](/docs/products/starmesh/faq#vram-cost-of-multi-frame-blendshapes) higher than most blendshapes.
  - Keep an eye on the VRAM estimate located at the bottom of the inspector for the Ripple Wave operator.
- Each instance of this prefab costs 1 animator layer, which is not easily convertible to a blend tree because an animation is playing.
- Each instance of this prefab has 2 contact receivers.
- By default, all instances of this prefab share the same synced toggle (1 bit).

## *Squishy Hair* prefabs

The prefabs for this gimmick is located in `Assets/HaiPrefabsForStarmesh/PrefabsVRC/SquishyHair/`.

:::warning
This prefab is not currently available, please check again later.
:::
