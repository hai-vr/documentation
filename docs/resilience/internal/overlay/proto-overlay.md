# Proto Overlay

Proto Overlay will show a SteamVR Overlay relative to the Camera coordinate space.

Conventions:
- This module uses **setup-teardown**.

During setup, this module:
- is responsible for creating an overlay in the VR system.

During teardown, this module:
- will remove its overlay from the VR system.
