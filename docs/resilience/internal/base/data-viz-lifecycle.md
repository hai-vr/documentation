# DataViz Lifecycle

DataViz Lifecycle maintains a pool of objects to display debug lines and text on the current frame being rendered.

These lines are visible within VR: This is the main value added by this component compared to traditional debug rays that are only visible from the Scene view.

The functionality of DataViz Lifecycle is not invoked directly.

It is normally invoked by calling the [DataViz Utility](./data-viz) singleton, which will then delegate calls to this instance.

Conventions:
- This module uses **setup-teardown**.
- This module operates in **LateUpdate** at **30000**.
  - Invocations after this point will have no effect.
