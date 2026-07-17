---
title: Inverse Kinematics
---

# Inverse Kinematics (IK)

HVR contains a custom IK solver. Unlike most IK solvers which run once per frame, our IK solver was designed to selectively run
multiple times per frame so that we can introduce more complex interactions; for instance, this enables the use of [Physics Animation](./physics-animation).

Inverse Kinematics is accessed through the *HIK Full Tiger* component, but in HVR, you should use the [*HVR Avatarlike*](./avatarlike)
component instead, which will spawn and set up the avatar for you.

---

This page is not yet available. Please see [hvr-ik directly on GitHub](https://github.com/hai-vr/hvr-ik/blob/main/README.md).