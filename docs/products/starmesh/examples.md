---
unlisted: true
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Examples

:::danger
This tool is currently not available, and this documentation is currently being written.
:::

Starmesh does only one thing: it creates blendshapes and bones on your avatar, reducing the cost of experimentation.

It is up to you to decide what those blendshapes and bones are going to do.

To make your avatar actually make use of those fresh new blendshapes and bones, you need to integrate with your
preferred application (VRChat, VNyan, Warudo, ...).

Starmesh does not handle any integration, but you may find examples of integrations on this page.

## Unity integration: Constraints

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

Constraints can be used to create bones which can relax parts of your avatar when two bones rotate at a heavy angle in relation to each other.

This may be used to fix heavy pinching of some bones, such as the kneecap.

## VRChat integration: PhysBones and Contacts

<HaiTags>
<HaiTag requiresVRChat={true} />
</HaiTags>

### Using Contacts to estimate thigh-knee angle

By adding a named [Contact Receiver of type Proximity](https://creators.vrchat.com/avatars/avatar-dynamics/contacts#receiver),
you can to estimate an angle between two articulated bones.

This can be used in conjunction with the [Compressive Deform](./operators/compressive-deform) operator to squish the skin the more
acute angle those bones are.

### Using PhysBone squish to detect pressing

The [PhysBone _Squish](https://creators.vrchat.com/avatars/avatar-dynamics/physbones/#options) parameter can be used to detect when an area is being pressed in a specific direction.

This can be used in conjunction with the [Compressive Deform](./operators/compressive-deform) operator to squish the skin the more
that area is being pressed.

## Warudo integration: Create a Mod

<HaiTags>
<HaiTag requiresWarudo={true} />
</HaiTags>

If you're familiar with Unity development (or UdonSharp), you can [create mods](https://docs.warudo.app/docs/modding/mod-sdk#custom-scripts)
by adding C# scripts in the folder of your Character Mod, which will animate the generated blendshapes of your avatar.
