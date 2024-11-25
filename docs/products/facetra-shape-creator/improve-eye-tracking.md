---
sidebar_position: 5
---

import {HaiVideo} from "/src/components/HaiVideo";

# Improve eye tracking

Eye tracking on avatars can come with drawbacks, especially if eye tracking was not part of the design of the avatar.

The elements of this section may improve the looks of your eye tracking, if you have noticed shortcomings during use.

You should not blindly enable these improvements as they are unnecessary if your avatar does not have shortcomings.

:::tip
This section is optional. There is no need to go through this process if your iris and pupils are fine during eye tracking.
:::

### Make eye sockets deeper (Experimental)

If your iris is clipping through your eye socket, you may be able to use this function to make your eye sockets deeper, so that your iris would no longer clip into it.

<HaiVideo src="./img/improvements/deepen-f.mp4"></HaiVideo>

- In “Eye Socket Selection”:
    - Press “Add +” to add a vertex selection.
    - Press the “Select Vertex…” button and click on the central vertex of your eye socket.
    - Press “Stop” when you are done.
    - Increase the value of “Neighbor Expansion” to select a portion of your eyesocket, but not all of it. You can also play with this setting after you have setup the “New Depth” settings below.
- In “New Depth”:
    - Press the “Select Vertex…” button and click on the central vertex of your eye socket.
    - Press “Stop” when you are done.
    - Rotate the handle so that the direction roughly matches the opening of the eye.
    - Increase or decrease the Power until you get a reasonable result.