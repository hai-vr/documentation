---
sidebar_position: 2
---

# CAD Models

:::danger
(2026 notice) This page describes an old project, and it may be incomplete.
:::

:::danger
These are not ready-to-print files.

**You will need to tweak those files to fit the shape of your foot.**
:::

## Materials

Materials:
- TPU 95A (Personally, I've used "SUNLU Flexible Filament TPU 1.75mm, 95A").
- Non-textured (smooth) print bed.
- Electrical tape.
- One of the parts will need a separately-printed support in order to print clean bridges.

## Files

---

### tt-belt.step

- [https://github.com/hai-vr/hai-3d-printing](https://github.com/hai-vr/hai-3d-printing)

This is the belt for the right foot.

This print is meant to fit exactly my foot.

This part has an embedded protection for the 5th toe splay sensor.

:::info
During assembly, the toe splay sensor must be oriented with the striped side facing against the skin.
:::

![Fusion360_bbe9NJyL9a.png](img%2FFusion360_bbe9NJyL9a.png)

---

### tt-belt-button.step

- [https://github.com/hai-vr/hai-3d-printing](https://github.com/hai-vr/hai-3d-printing)

This button needs to be printed twice, and it serves to prevent the belt holder from retracting.

![Fusion360_6z7EopoKDs.png](img%2FFusion360_6z7EopoKDs.png)

---

### tt-big-toe-inserter.step

- [https://github.com/hai-vr/hai-3d-printing](https://github.com/hai-vr/hai-3d-printing)

This is a pathway for the flex sensor of the Big toe to slide through.

In my personal prototype, the flex sensor of the toe is bare, with the exception of the root,
because I estimate that specific sensor is sufficiently protected.

![Fusion360_kioQZWK3TF.png](img%2FFusion360_kioQZWK3TF.png)

---

### tt-2nd-phalange-inserter.step

- [https://github.com/hai-vr/hai-3d-printing](https://github.com/hai-vr/hai-3d-printing)

This is a pathway for the flex sensor of the 2nd toe to slide through.

:::warning
In order to use this, we need to print with **some really clean bridges**, because the flex sensor that slides under it
will have a friction contact with the bottom of that bridge.

To print the clean bridges, I recommend printing a PLA or PETG bridge support (file not provided).<br />
*(It involves pausing the TPU print before the bridge layer is printed, in order for you to insert the PLA bridge support)*
:::

![Fusion360_nigZjLMstK.png](img%2FFusion360_nigZjLMstK.png)

---

### tt-2nd-phalange-sensor-hook.step

- [https://github.com/hai-vr/hai-3d-printing](https://github.com/hai-vr/hai-3d-printing)

This is the flex sensor for the 2nd toe.

It has a hook part, which attaches to the 2nd distal ring.

Once the print is complete, the face that is printed on the print bed will be facing up,
because we want the smooth bottom face to slide against the underside bridging of the pathway for the 2nd toe.

![Fusion360_9ql4Iv7vAP.png](img%2FFusion360_9ql4Iv7vAP.png)

---

### tt-2nd-distal-ring.step

- [https://github.com/hai-vr/hai-3d-printing](https://github.com/hai-vr/hai-3d-printing)

This is the ring that attaches to the 2nd toe distal.

This ring is sized to fit my toe.

Attach to your toe with the triangle pointing side facing away from you.

:::info
During assembly, make sure you attach that ring onto the hook the before you secure the flex sensor with electrical tape.
:::

You need socks with individual toes, or redesign this part.
This ring will just slide off your toe if you don't use socks, due to the way the bare skin moves when curling.

![Fusion360_8LRS45XQYH.png](img%2FFusion360_8LRS45XQYH.png)

---