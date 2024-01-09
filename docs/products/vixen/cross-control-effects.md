---
unlisted: true
---

# Cross-Control Effects

Sometimes you may want a control to affect another control.

We've split those into three major categories: **Item slots, Flags, and Ejects**.

- If a control toggles an item that completely replaces the item of another control, you may want to switch the other controls off.
    - Those controls belong to the same **Item slot**.
    - Example: You can't wear a sweater and a kimono at the same time.

- If a control toggles an item that is drawn on top of an item of another control, you may want to hide the other item **without switching the other control off**.
    - That control raises a **Flag** that the other control listens to.
    - Example: You can wear a sweater and a bra at the same time, but the bra is not visible when the sweater is active.

- A control may be used to switch other controls on and off.
    - That control **Ejects and Sets** other controls.
    - Example: You may want a button that, when clicked, sets all of your clothing to be themed for Valentine's Day, and ejects all items that are out of theme.

## "Switched ON" and "Active" are different things

There is an important distinction to be made first between a control being "Switched ON" and a control being "Active".

### "Switched ON" AND "Conditions" => "Active"

The toggles and properties that you define in a control play when the control is "Active".
Generally, the control becomes "Active" when the user "Switches ON" that control.

However, when a control is "Switched ON", it does not necessarily mean that the control becomes "Active".
For a control to be "Active", the control must be "Switched ON", while simultaneously the additional conditions of the control must pass.

### Cross-Control Effects are tied to "Active"

The three major categories of Cross-Control Effects trigger when the control becomes "Active":

- The control replaces the item in the slot *when the control becomes active*; not necessarily when the control is switched on in the menu.
- The control raises the flags *when the control becomes active*; not necessarily when the control is switched on in the menu.
- The control ejects and sets other control *when the control becomes active*; not necessarily when the control is switched on in the menu.
