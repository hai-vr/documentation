import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# 💬 Lock Locomotion Menu Item

<HaiTags>
<HaiTag requiresVRChat={true} />
</HaiTags>

Adds a new FX layer and creates a menu item to lock locomotion.

This prevents the avatar collider from moving when the user moves the analog stick, and also when the user physically moves in the playspace.

## How to use

This component will add a menu item, which when toggled, will prevent your avatar from being moved with the analog stick.

This also prevents the avatar collider from moving when you physically move around in your playspace, so you won't go up and down on ledges and stairs.

To use this component:
- Add a "PA-H Lock Locomotion Menu Item" component in a new GameObject of your avatar.
  - If you are a regular Modular Avatar user and you already have your own personal Menu Items, place this GameObject alongside your existing menus.
  - If you are not a Modular Avatar user, keep this GameObject anywhere inside your avatar.
- Give your GameObject a name, such as "Lock locomotion", which will become the menu name.
- You have the option to choose an icon for this menu item.

### Notes for regular Modular Avatar users

If you are a regular Modular Avatar user, this component behaves similarly to a [Modular Avatar Menu Item](https://modular-avatar.nadena.dev/docs/reference/menu-item).

You can follow the same rules as if you were dealing with a Modular Avatar Menu Item.

## Other notes

You can have multiple Lock Locomotion Menu Item components across multiple menus in your avatar, and the FX layer will only ever be created once.

## Versions

- **1.2.0**: Added.

Classification: *This component is **💬 VRChat Only**.*
