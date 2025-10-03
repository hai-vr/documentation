---
sidebar_position: 40
---

import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";

# Avatar Optimizer

<HaiTags>
<HaiTag requiresBasis={true} />
</HaiTags>

**Basis Avatar Optimizer** is a work in progress avatar optimization processor that only works on Basis Framework avatars (for the time being).

It is specifically **not** designed for avatars that use the Animator system.

The following has been implemented so far:

- GameObject optimization:
    - Disabled GameObjects are removed.
- Blendshape optimization:
    - Keeps track of which blendshapes vary (face tracking, viseme, blink) and keeps them.
    - Bakes non-varying blendshapes into the mesh (only if all SMRs that reference that mesh have the same value).
    - Removes unused blendshapes.


---

## Third-party acknowledgements

- Portions of the code is based on [d4rkAvatarOptimizer](https://github.com/d4rkc0d3r/d4rkAvatarOptimizer/) by d4rkpl4y3r.
