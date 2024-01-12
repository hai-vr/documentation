---
sidebar_position: 2
---

# Cross-Control Effects

Sometimes you may want a control to affect another control.

We've split those into three major categories: **Item slots, Flags, and Ejects**.

- **[Item slots](./item-slots):** If a control toggles an item that completely replaces the item of another control, you may want to switch the other controls off.
    - Those controls belong to the same **Item slot**.
    - Example: A crop-top and a sweater shouldn't be worn at the same time.
    - Example: A bra and a bikini shouldn't be worn at the same time.

- **[Flags](./flags):** If a control toggles an item that is drawn on top of an item of another control, you may want to hide the other item **without switching the other control off**.
    - That control raises a **Flag** that the other control listens to.
    - Example:
      - You can wear a crop-top and a bra/bikini at the same time, and the bra/bikini still remains visible.
      - You can wear a sweater and a bra/bikini at the same time, but the bra/bikini is not visible when the sweater is active.
      - However, if you take off your sweater, then either the bra or the bikini should show back up.
    - Other example: A crop-top and a sweater should change a conflict prevention blendshape of the body.

- **[Ejects](./ejects):** A control may be used to switch other controls on and off.
    - That control **Ejects and Sets** other controls.
    - Example: You can create a button that, when clicked, sets all of your clothing to be a swimsuit, and ejects all items that are not normally worn with a swimsuit.
    - Other example: You can make it so that when a specific summer-themed dress becomes active, then a specific summer-themed hat will be switched ON.
    - Another example: You can make it so that when some specific items raise a flag, then a specific item will be switched OFF.


## "Active" and "Switch ON"

In the next documentation pages, we will use two similar terms to describe distinct concepts:

- A control is **Switched ON** when the user toggles the item on the Menu ON.
- A control is **Active** when the control is simultaneously *Switched ON* **and** additional conditions of the control are satisfied.

When a control is **Active**, the effects of that control will be visible: Objects will be toggled, properties will change, etc.

It is possible for the user to **Switch ON** a control without causing any effect to be visible if the additional conditions are not satisfied.
Therefore, a control can be *Switched ON* and still remain *Inactive*.
