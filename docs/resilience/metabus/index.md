# Metabus

The Metabus component is the public entry point to all Metabus systems.

When added to the scene, it handles the setup, update, and teardown of all Metabus systems.

This component only executes during Play Mode, or within a built application.

:::warning
This project is not currently available.
:::

## How to use

To start using Metabus:

- Add a new GameObject in your scene.
- In that object, add a new Hai/Metabus component.

## Partial VR mode

When enabled, *Partial VR* mode will hook into the host VR system, spawning a VR headset,
the controllers, and trackers in the scene.

The state of this checkbox cannot be changed after setup is complete.

:::warning
Enabling Partial VR mode will cause SteamVR to start on your machine.
:::

## Kinematics

When enabled, *Use Kinematics* will cause Metabus to initialize with an IK solver.

The state of this checkbox cannot be changed after setup is complete.
