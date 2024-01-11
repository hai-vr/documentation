---
unlisted: true
sidebar_position: 2
---

# Cross-Control Effects

Sometimes you may want a control to affect another control.

We've split those into three major categories: **Item slots, Flags, and Ejects**.

- **Item slots:** If a control toggles an item that completely replaces the item of another control, you may want to switch the other controls off.
    - Those controls belong to the same **Item slot**.
    - Example: A crop-top and a sweater shouldn't be worn at the same time.
    - Example: A bra and a bikini shouldn't be worn at the same time.

- **Flags:** If a control toggles an item that is drawn on top of an item of another control, you may want to hide the other item **without switching the other control off**.
    - That control raises a **Flag** that the other control listens to.
    - Example:
      - You can wear a crop-top and a bra/bikini at the same time, and the bra/bikini still remains visible.
      - You can wear a sweater and a bra/bikini at the same time, but the bra/bikini is not visible when the sweater is active.
      - However, if you take off your sweater, then either the bra or the bikini should show back up.

- **Ejects:** A control may be used to switch other controls on and off.
    - That control **Ejects and Sets** other controls.
    - Example: You can create a button that, when clicked, sets all of your clothing to be a swimsuit, and ejects all items that are not normally worn with a swimsuit.

## "Active" and "Switch ON"

In this documentation page, we will use two similar terms to describe distinct concepts:

- A control is **Switched ON** when the user toggles the item on the Menu ON.
- A control is **Active** when the control is simultaneously *Switched ON* **and** additional conditions of the control are satisfied.

When a control is **Active**, the effects of that control will be visible: Objects will be toggled, properties will change, etc.

It is possible for the user to **Switch ON** a control without causing any effect to be visible if the additional conditions are not satisfied.
Therefore, a control can be *Switched ON* and still remain *Inactive*.


## Item slots

The simplest form of cross-control effect is an item slot.

- Only one control can be active with that item slot.
- When a control of that item slot becomes active, all the other items in that slot will be switched OFF.
- One of the items of that slot can be set to be Default. If none of the items in that slot is active, then this slot will be switched ON.
- A control can belong to multiple item slots.

![Unity_bnsUCjNr33.png](img%2Fcce%2FUnity_bnsUCjNr33.png)

*Pictured above: This control is part of the Outer item slot. Whenever this control becomes active, all other items in the Outer item slot will be switched OFF.*

### When to use it?

An item slot is best used for items of the same category that occupy the same space, where only one of those items may be visible at once time.
- Example: A crop-top and a sweater shouldn't be worn at the same time.
- Example: A bra and a bikini shouldn't be worn at the same time.

### How to use

To use item slots, first we need to create an Item Slot, and then we need to assign it to the items that belong in this item slot.

- In one of your controls:
    - In the *Item Slot* panel, type the name of the item slot next to the *+ New item slot* button. Example of names: Hat, Glasses, OuterClothing, InnerClothing, Shoes, ...
    - Press the **+ New item slot** button to create a new *Vixen Item Slot* asset. This new asset will be highlighted in your project.
- In your other controls that belong in this item slot:
    - In the *Item Slot* panel, select or drag and drop the previously created *Vixen Item Slot* asset into the field.

:::tip
You can reuse the same *Vixen Item Slot* assets across different unrelated avatars.

Example: If you have hats for Karin and Manuka avatars, you can create one Hat item slot and use it for both of your avatars.
:::

### Options

If you want the item slot to always contain at least one item in it:
- In the control that you'd like to be default for that item slot:
    - In the *Item Slot* panel, in the item slot, press the *"Regular"* button so that it becomes **Default**.


## Flags

Flags provide an opportunity to handle visibility interactions between items.

- Controls can raise flags as long as they're active.
    - Multiple controls can raise the same flag simultaneously.
    - The flag is lowered down when no control is raising that flag.
- Other controls can listen to a flag as part of their additional conditions.
    - The flag becomes a requirement for that other control to become active.
    - There is also a Control mode which only listens to a flag.
- Flags do not switch any control ON or OFF (however see [Ejects](#ejects) section below).

### When to use it?

Flags can be used when the items of a control needs to remain inactive while still keeping the control switched ON.
- Example:
  - You can wear a crop-top and a bra/bikini at the same time, and the bra/bikini still remains visible.
  - You can wear a sweater and a bra/bikini at the same time, but the bra/bikini is not visible when the sweater is active.
  - However, if you take off your sweater, then either the bra or the bikini should show back up.

Flags can be used when multiple items change the same properties of a object.
- Example: A crop-top and a sweater should change a conflict prevention blendshape of the body.

### How to use

To use flags, first we need to create a Flag, and then we need to assign it to the items that should raise that flag.

- In one of your controls:
  - In the *Flag* panel, type the name of the flag next to the *+ New flag* button. Example of names: NeedsConflictPreventionChest, NeedsConflictPreventionHip, FullyCoversWristWatch, FullyCoversBraStraps, ...
  - Press the **+ New flag** button to create a new *Vixen Flag* asset. This new asset will be highlighted in your project.
- *If you have other controls that should raise that flag:*
  - In the *Flag* panel, select or drag and drop the previously created *Vixen Flag* asset into the field.

:::tip
You can reuse the same *Vixen Flag* assets across different unrelated avatars.

Example: If you have a Karin and Manuka avatars that need a Hip conflict prevention flag, you can create one NeedsConflictPreventionHip flag and use it for both of your avatars.
:::

Finally, we need to tell other controls to listen to that flag.

There are several ways, depending on your flag type:

- If you want to create a new control that **only** listens to that flag, then:
    - Create a new Control, and instead of a Menu, set the control mode to **Listen To Flag**.
    - Assign the Flag to that field. Whenever that flag is raised, the control will become active.

- If you need an existing control to listen to a flag, then:
    - In the control that needs to listen to that flag, open the *Additional conditions* panel in the Advanced section.
    - Add a new Condition group.
    - In the newly created condition:
      - Make sure the Type is set to **Listen To Flag**.
      - Assign the Flag to that field.
      - If you want the control to become active when that flag is raised (while the control is switched ON), then make sure the Operator is set to **Is True**.
      - If you want the control to remain inactive when that flag is raised (while the control is switched ON), then set the Operator to **Is False**.

- If you want to create a new control that listens to **multiple** flags, then:
  - Create a new Control, and instead of a Menu, set the control mode to **Conditional**.
  - Follow the same instructions as above.
  - To create an **OR** condition, create multiple condition groups, with one condition in each group.
  - To create an **AND** condition, create one condition group, and put multiple conditions in it.

:::note
For performance reasons, please refrain from creating more than 5 conditions.

*In VRChat, Vixen internally uses Blend Tree recursive nesting to create conditions, but Blend Trees have a serious performance impact when recursive nesting is excessively used.*
:::

## Ejects

Ejects can handle situations that aren't covered by flags or item slots.

- When a control with an eject **becomes** active, other controls of your choice will be switched ON or OFF.

![Unity_b9eNE22OLp.png](img%2Fcce%2FUnity_b9eNE22OLp.png)

*Pictured above: When this control becomes active, this will switch a clothing item ON, and switch three other clothing items OFF.*

:::note
Ejects do not permanently switch other slots ON or OFF; the other controls are switched when the current control **becomes** active (or when it becomes inactive).
:::

### When to use it?

Ejects can be used for item sets:
- Example: You can create a button that, when clicked, sets all of your clothing to be a swimsuit, and ejects all items that are not normally worn with a swimsuit.

Ejects can be used for turning specific objects ON or OFF.
- Example: You can make it so that when a specific summer-themed dress becomes active, then a specific summer-themed hat will be switched ON.

Ejects can be used alongside flags to turn specific objects ON or OFF.
- Example: You can make it so that when some specific items raise a flag, then a specific item will be switched OFF.

### How to use

- In one of your controls:
  - In the *Ejects and Sets* panel:
    - Select the section appropriate for you:
      - The *When this becomes active* section will switch other controls ON or OFF when the current control **becomes** active.
      - The *When this becomes inactive* section will switch other controls ON or OFF when the current control **becomes** inactive.
    - Drag and drop another control in the *"+"* field.
    - If you want to switch that control OFF, keep it in the **Switch OFF** state.
    - If you want to switch that control ON, press the *"Switch OFF"* button so that it becomes **Switch ON**.

