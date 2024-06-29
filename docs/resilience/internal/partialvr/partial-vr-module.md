# Partial VR (Module)

Partial VR manages the initialization and update of VR systems, without relying on any of Unity's built-in VR capabilities.

It does not interrupt the operation of the main VR application.

The Partial VR object belongs in Camera space, as it spawns the hardware object representations within that space,
and those hardware object representations need to move accordingly as the camera space itself moves across other virtual representations.

Conventions:
- This module uses **setup-teardown**.
- This module uses **manual update invocation**.

During setup, this module:
- is responsible for initializing the *Partial VR* framework.
- will create components responsible for storing the VR hardware poses.
- will create components responsible for storing the VR tracked head and eye information.

On update invocation, this module:
- is responsible for polling the events of the VR system.
- is responsible for closing the *Partial VR* framework when the VR system is closing,
  so that the host application itself does not close.

During teardown, this module:
- will shut down its ties to the VR system.
- will destroy all objects it has created.
