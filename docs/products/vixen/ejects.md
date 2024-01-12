---
sidebar_position: 5
title: CCE - Ejects
---

# Ejects

A control may be used to switch other controls on and off.
- That control **Ejects and Sets** other controls.
- Example: You can create a button that, when clicked, sets all of your clothing to be a swimsuit, and ejects all items that are not normally worn with a swimsuit.

:::note
In this documentation page, we will use two similar terms to describe distinct concepts:

- A control is **Switched ON** when the user toggles the item on the Menu ON.
- A control is **Active** when the control is simultaneously *Switched ON* **and** additional conditions of the control are satisfied.

When a control is **Active**, the effects of that control will be visible: Objects will be toggled, properties will change, etc.

It is possible for the user to **Switch ON** a control without causing any effect to be visible if the additional conditions are not satisfied.
Therefore, a control can be *Switched ON* and still remain *Inactive*.
:::


## What are Ejects?

Ejects can handle situations that aren't covered by flags or item slots.

- When a control with an eject **becomes** active, other controls of your choice will be switched ON or OFF.

![Unity_b9eNE22OLp.png](img%2Fcce%2FUnity_b9eNE22OLp.png)

*Pictured above: When this control becomes active, this will switch a clothing item ON, and switch three other clothing items OFF.*

:::note
Ejects do not permanently switch other slots ON or OFF; the other controls are switched when the current control **becomes** active (or when it becomes inactive).
:::

## When to use it?

Ejects can be used for item sets:
- Example: You can create a button that, when clicked, sets all of your clothing to be a swimsuit, and ejects all items that are not normally worn with a swimsuit.

Ejects can be used for turning specific objects ON or OFF.
- Example: You can make it so that when a specific summer-themed dress becomes active, then a specific summer-themed hat will be switched ON.

Ejects can be used alongside flags to turn specific objects ON or OFF.
- Example: You can make it so that when some specific items raise a flag, then a specific item will be switched OFF.

## How to use

- In one of your controls:
  - In the *Ejects and Sets* panel:
    - Select the section appropriate for you:
      - The *When this becomes active* section will switch other controls ON or OFF when the current control **becomes** active.
      - The *When this becomes inactive* section will switch other controls ON or OFF when the current control **becomes** inactive.
    - Drag and drop another control in the *"+"* field.
    - If you want to switch that control OFF, keep it in the **Switch OFF** state.
    - If you want to switch that control ON, press the *"Switch OFF"* button so that it becomes **Switch ON**.

