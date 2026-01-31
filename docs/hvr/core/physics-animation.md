Physics Animation
=====

import {HaiVideo} from "/src/components/HaiVideo";

*Avatars* can be affected by physics interactions using Physics Animation. This is also known as *powered ragdolls* or a *control rig*.

*Physics Animation* modifies the characteristics of rigidbodies and applies forces on individual rigidbodies and joints of a ragdoll
to make it match a pose.

In HVR, by default, the pose comes from the result of an IK solver, but that pose may come from an animation being played.

Different characteristics can be applied to different limbs of the ragdoll to produce different responses to physical interactions.

The *Physics Animation* components in HVR are heavily inspired by a GDC talk called [**Physics Animation in Uncharted 4: A Thief's End**
by *Michal Mach* presented at GDC 2017](https://www.youtube.com/watch?v=7S-_vuoKgR4), however, the implementation in HVR is vastly inferior
to the implementation described in the talk.

Other VR games like [Boneworks](https://store.steampowered.com/app/823500/) and [Hard Bullet](https://store.steampowered.com/app/1294760/)
are notorious for using similar forms of physics animation, so HVR is not unique in this regard.

<HaiVideo src="./img/M0sEtExl9r-f.mp4" halfWidth={true}></HaiVideo>
<HaiVideo src="./img/6CHORI233p-f.mp4" halfWidth={true}></HaiVideo>

*Depending on the physics animation profile, the avatar may have a drastically different reaction to physics interactions.<br/>
On the left, the head and the hips try to weakly maintain their position, and the feet are prioritized.<br/>
On the right, the hands are prioritized.*

## Applying Physics Animation

The main way to control Physics Animation is by setting up an *[HVR Avatarlike](avatarlike)* component,
and enabling **Use Physics Animation** in that component.

Then, in the hierarchy of the *HVR Avatarlike* object:
- Go to *HVRMultipurposeRig → HVRIK → RuntimeTargets*. Move and rotate the child targets to define a new pose.
- Go to *HVRMultipurposeRig → HVRPhysicsAnimation → ProfileApplier*. In the **HVR ProfileAnimationPhysicsApplier** component,
  edit the profile settings of each limb to get the physics reaction you need.

![Unity_xyY59AVt9L.png](img/Unity_xyY59AVt9L.png)

*The options highlighted in yellow "H Arms, H Legs, H Body Under Head, and H Body Over Hips" let you modify multiple limbs at once.*

You will have to experiment with the different profiles, but the following ones are the most important:
- **Normal**: The default. Tries to move to the position and world-space rotation, but gets pushed away when a parent or a child moves away.
- **Complete Stability**: Strongly maintains the position and world-space rotation.
- **Motorized**: Configures the joint of the corresponding limb so that the desired angle is the local-space angle relative to the parent.
- **Motorized in World Space**: Configures the joint of the corresponding limb so that the desired angle is the world-space angle.

The following ones are situational:
  - **Angular Stability**: Strongly maintains the world-space angle, without trying to move the position.
  - **Reactive**: A stronger and more reactive version of *Normal* that is still much weaker than *Complete Stability*; but it may spring back and forth.
