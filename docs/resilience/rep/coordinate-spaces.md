# Coordinate spaces

In order to favor experimentation 🧪, Resilience has several interpretations for what is normally referred to as the playspace.

In the real-world playspace, the center of the playspace is at (0,0,0), and 1 meter is 1 unit.
This space contains representations of the hardware placed in the physical world.

The objects in this real-world playspace are copied to both the **Camera space** and the **Avatar space**.

## Camera space and Avatar space

Most of the time, the Camera space and Avatar space will be the same: Your camera (HMD) will be the point of view of your avatar.

However, in Resilience, the two spaces can be separated.

For example, it is possible to switch to a third-person view, where you can observe your avatar in VR while being outside of it.

*(It might even be possible to envision a scenario where a single user could puppeteer multiple avatars at the same time,
but for now we should only assume that there is only one Avatar space active at one time)*

- The position will differ when separating.
- The rotation may be different between the two spaces, so you could look at your avatar from the front.
- The scale may be different between the two spaces, so the avatar would look smaller or bigger.

In this case, systems need to take this into account:

- When calibrating for full body tracking, hardware measurements made in relation with the avatar will be done in Avatar space.
- Some UI panels may need to be displayed and move in Camera space instead of Avatar space.
- Interacting with UI panels is likely to be done in Camera space, but it might be necessary to keep it in Avatar space for some contexts.
- Interactions with objects located in the world are likely to happen in World space using the avatar movement in Avatar space,
  but some interactions with objects located in the world might happen with the hardware movement in Camera space.
