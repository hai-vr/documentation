﻿import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# 💬 Blank Expressions Menu and Parameters

<HaiTags>
<HaiTag requiresVRChat={true} />
</HaiTags>

Replaces the expressions menu and the expression parameters with blank ones, as early as possible.

This ensures that menus and parameters created by other non-destructive tooling will begin with a blank state.

:::info
This component exists so that you can drop a prefab containing this component into an avatar in order to reset it,
without having to modify the original avatar descriptor by hand.
:::

## Versions

- **1.2.0**: Added.

Classification: *This component is **💬 VRChat Only**.*
