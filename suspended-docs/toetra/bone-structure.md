﻿---
sidebar_position: 2
unlisted: true
---

# Bone structure

:::danger
This tool is currently not available, and this documentation is currently being written.
:::

## Foot structure

A human foot is made of a lot of bones. ToeTra only exposes a few of them that it finds relevant for animation interaction purposes:
- the metatarsal bones (OFF by default),
- the proximal bones,
- the intermediate bones,
- and the distal bones.

Some intermediate phalanx bones exist in the human skeleton, but they are omitted by default because these bones cannot move independently from the distal bones
on the 4th and 5th toe, so they are irrelevant for character animation and weight painting.

### Humanoid by default

The tool suggests bones for humanoid characters by default, which are the following:

- The foot has five toes.
- The 1st toe (Big toe) does not have an intermediate bone on humans.
- The 4st toe and 5th toe (little toe) have an intermediate bone that is so small on humans, they are OFF by default.

### Non-humanoid

If you want to rig non-humanoid characters, such as models that have three claws instead of five toes, you can adjust the generation of each toe.

- To remove a bone, uncheck "Exists".
- To add or remove the intermediate bone, check "Has Intermediate".

### Metatarsal bones

You can generate and configure the metatarsal bones by checking "Include Metatarsal Bones".

:::tip
On humans, the 2nd and 3rd metatarsal bones seem to move with the foot as one, while the 1st, 4th and 5th can move, although the movement is very limited.
:::

## Rigging basics

Switch your scene view to an Isometric projection from the top, and focus on your **right** foot.

Open the 1st toe (Big toe) tab:

- Move the tip of the toe first. The tip of the blue line should be roughly located on the **surface of the mesh**.
   - Do not bother with the toe elevation for now.
- Then move its parent to the location of a toe joint. 
- Do the same for all of its parents.

Continue doing this with the 2nd, 3rd, 4th, and 5th toe.

Now, switch your scene view to an Isometric projection from the side.

Open the 1st toe (Big toe) tab:

- You will see a yellow arrow pointing down on each gizmo. This yellow arrow always points to the down direction, so you should generally drag this arrow.
- Use that yellow arrow to move the tip of the toe to a better elevation.
- Use that yellow arrow again to move the other joints to a better elevation.