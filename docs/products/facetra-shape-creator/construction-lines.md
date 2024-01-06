---
sidebar_position: 2
---

# Construction lines

:::danger
The documentation for *Haï's FaceTra Shape Creator* is currently located [in a different page](https://hai-vr.notion.site/hai-vr/Ha-s-FaceTra-Shape-Creator-f1d95d4459e54fc3b2f166d9ebb5ebf3).
:::

:::danger
The documentation page is currently being written.
:::

The shape creator works by defining construction lines that will let the tool know where are the major facial features of your mesh.

In your Scene view, make sure you have **Gizmos** shown, and move your Scene view to focus on the face of your avatar.

![gizmos.png](img%2Fgizmos.png)

### Facial structures

The examples in this document will show three avatars (Karin, Foshunia, and Actias) as supporting examples.

These three avatars have different facial structures. Use them as references for your own construction lines.

## Setup construction lines: Points

### Mouth Commissure

The mouth commissure is the tip of your lips.

- Press the “Select Vertex…” button and click on your scene to select the tip of your lips.

:::warning
**Does it not work?**<br/>
If this step doesn’t work on your avatar, make sure that the “Avatar Root” is correctly set.<br/>
The Avatar Root is the object where the Animator is located. It is NOT the Armature.<br/>
If it still doesn’t work, ping me on the Discord server!
:::

- Press “Stop” when you are done.

You can further adjust the position with the handle in the scene view if necessary.

<div className="row">
    <div className="col col--4 margin-bottom--lg">
        <div className="card">
            <div className="card__body">
![karin.png](img%2Fconstruction%2F1_mouthcommissure%2Fkarin.png)
            </div>
        </div>
    </div>
    <div className="col col--4 margin-bottom--lg">
        <div className="card">
            <div className="card__body">
![foshunia.png](img%2Fconstruction%2F1_mouthcommissure%2Ffoshunia.png)
            </div>
        </div>
    </div>
    <div className="col col--4 margin-bottom--lg">
        <div className="card">
            <div className="card__body">
![actias.png](img%2Fconstruction%2F1_mouthcommissure%2Factias.png)
*On furry avatars, the tip of your lips may be located behind your eyes. This is fine.*
            </div>
        </div>
    </div>
</div>

[//]: # (Note to self: install this https://github.com/flexanalytics/plugin-image-zoom)

:::warning
**Everything happens on the right-hand side of the face (the left side of your screen)**<br/>
With some rare exceptions, most actions that you will do relates to pulling and pushing on the right-hand side of the face,
which is the left-hand side of your screen.
:::

### Mouth Center

The mouth center is the middle of the lips.

- Do the same as previously described using the “Select Vertex…” button.
- The point doesn’t need to be precisely on a vertex. If your lips are not fully closed together, you can move the gizmo to be somewhere between.

The mouth center is guaranteed to be in the middle of your avatar.

<div className="row">
    <div className="col col--4 margin-bottom--lg">
        <div className="card">
            <div className="card__body">
![karin.png](img%2Fconstruction%2F2_mouthcenter%2Fkarin.png)
            </div>
        </div>
    </div>
    <div className="col col--4 margin-bottom--lg">
        <div className="card">
            <div className="card__body">
![foshunia.png](img%2Fconstruction%2F2_mouthcenter%2Ffoshunia.png)
*If your lips is slightly curved forwards, the mouth center still remains on the visible part of your lips; it is not inside your mouth.*
            </div>
        </div>
    </div>
    <div className="col col--4 margin-bottom--lg">
        <div className="card">
            <div className="card__body">
![actias.png](img%2Fconstruction%2F2_mouthcenter%2Factias.png)
*On furry avatars, the center should be on the tip of the bottom jaw, not the beak or the snout itself.*
            </div>
        </div>
    </div>
</div>

### Cheek

The cheek is a general location of your cheeks.

It is mainly used later for puffing the cheeks.

- Do the same as previously described using the “Select Vertex…” button.
    - Don’t think too much about this, and just put the cheek somewhere around the same level as your lips.


<div className="row">
    <div className="col col--4 margin-bottom--lg">
        <div className="card">
            <div className="card__body">
XXX
            </div>
        </div>
    </div>
    <div className="col col--4 margin-bottom--lg">
        <div className="card">
            <div className="card__body">
YYY
            </div>
        </div>
    </div>
    <div className="col col--4 margin-bottom--lg">
        <div className="card">
            <div className="card__body">
ZZZ
            </div>
        </div>
    </div>
</div>

### Nose

The nose is the tip of your nose.

- Do the same as previously described using the “Select Vertex…” button.


<div className="row">
    <div className="col col--4 margin-bottom--lg">
        <div className="card">
            <div className="card__body">
![karin.png](img%2Fconstruction%2F4_nose%2Fkarin.png)
            </div>
        </div>
    </div>
    <div className="col col--4 margin-bottom--lg">
        <div className="card">
            <div className="card__body">
![foshunia.png](img%2Fconstruction%2F4_nose%2Ffoshunia.png)
            </div>
        </div>
    </div>
    <div className="col col--4 margin-bottom--lg">
        <div className="card">
            <div className="card__body">
![actias.png](img%2Fconstruction%2F4_nose%2Factias.png)
            </div>
        </div>
    </div>
</div>

:::danger
The documentation page is currently being written.
:::

### Jaw Puller

The jaw puller is roughly located on your chin. It will be used to move the jaw of your avatar.

- Do the same as previously described using the “Select Vertex…” button.

## Setup construction lines: Dividers

Dividers provide hints on how to divide existing shapes in half.

### Eye Divider

The eye divider splits the eye in half, so that there is the top half and the bottom half of the eye.

This will be used to cut existing artist-authored blendshapes in half, so that you can derive new animations by combining existing blendshapes.

- Press the “Select Vertex…” button and click somewhere in the middle of the eye.
- Press “Stop” when you are done.
- Move and rotate the gizmo to better match your eye shape.

<div className="row">
    <div className="col col--4 margin-bottom--lg">
        <div className="card">
            <div className="card__body">
XXX
            </div>
        </div>
    </div>
    <div className="col col--4 margin-bottom--lg">
        <div className="card">
            <div className="card__body">
YYY
            </div>
        </div>
    </div>
    <div className="col col--4 margin-bottom--lg">
        <div className="card">
            <div className="card__body">
ZZZ
            </div>
        </div>
    </div>
</div>

- Use the red cubic handle to shift the red parallel lines closer or further apart. The area inside that region will be smoothed when dividing the blendshapes. The lines need to be apart so that there is not an abrupt cut when dividing the blendshapes, but it must not go past the most sensitive parts of the top and bottom eyelids.

### Mouth Divider

### Mouth Left/Right Divider

### Optional: Nose Projection

### Optional: Neck Separator

## Setup construction lines: Vertex filters

### Upper Teeth and Lower Teeth Selection

### Tongue Selection

### Pupil Selection

## Setup construction lines: Special

### Mouth Press direction

### Tongue Puller

:::danger
The documentation page is currently being written.
:::






