﻿---
unlisted: true
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# ⛔💬 Multiplexer (Experimental)

<HaiTags>
<HaiTag requiresVRChat={true} />
</HaiTags>

Allows an avatar to temporarily exceed 256 bits of synced parameters during the non-destructive build process.

Excess bits from parameters of your choice will be synced at a slower rate using a [multiplexer-styled](https://en.wikipedia.org/wiki/Multiplexing) data synchronization strategy,
bringing your avatar back under the limit.

It is ideally used on parameters that are rarely updated.

:::danger
This component is in an experimental phase, and may be subject to significant changes in the future.
:::

## How to use

This component will sync the parameters of your choice using a multiplexer if you are over 256 bits of synced parameters.

This benefit comes with a time trade-off: Those parameters will take longer to sync.
- Use this on parameters that you change rarely, where you can afford to have a delay.
- Do not use this on parameters where the effect must be instantaneously seen by others, even if the parameter is changed rarely.
- Do not use this on parameters that you need to update in real-time, such as face tracking and eye tracking.

The sync delay will depend on the overall amount of bits of parameters that you want to sync.

### Option: Execute even when under limit

By default, this component will not create the multiplexer if you are not exceeding 256 bits of synced parameters in the first place.

If you find any reason to create the multiplexer regardless, you can choose to do so.

[//]: # (### Option: Remove sync from unused parameters)

[//]: # ()
[//]: # (This component can inform you of unused parameters, and take the initiative to remove those unused parameters from your avatar.)

[//]: # ()
[//]: # (:::danger)

[//]: # (If your avatar is meant to work cross-platform &#40;PC & Quest/Android&#41;, **you must keep this option turned OFF**.)

[//]: # (:::)

## Versions

- **1.11.0**: Added.

Classification: *This component is **💬 VRChat Only**.*
