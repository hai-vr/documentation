---
sidebar_position: 40
---

import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";
import {HaiStartingFromTag} from "/src/components/HaiStartingFromTag";
import HaiLocalization from "/src/components/HaiLocalization";

# Mesh Visibility

<HaiTags>
<HaiTag requiresBasis={true} />
<HaiStartingFromTag version={"Not released yet"} />
</HaiTags>

<HaiLocalization languages={['en', 'ja']} applicationIsLocalized={false} />

The **HVR Mesh Visibility** component is an additional condition that momentarily overrides the value of a *Vixxy Control* component
based on which Renderer components or GameObjects are enabled.

The main purpose of this component is:
- to toggle a mesh OFF when a mesh controlled by another toggle is visible, or
- to shrink blendshapes when one of several meshes is visible.

## What counts as visible?

If the object contains any *Renderer* component, then we will check if that *Renderer* is enabled and the GameObject is also active in the hierarchy (meaning, all of its parents must be active too).

Otherwise, we will only check if the GameObject is active in the hierarchy (meaning, all of its parents must be active too).

## Conditions

Conditions are processed from top to bottom. The topmost condition has priority.

- **Is Any Visible**: The condition passes when at least one of the objects is visible.
- **Are All Visible**: The condition passes when all the specified objects are visible.
- **Is Any Hidden**: The condition passes when at least one of the objects is hidden.
- **Are All Hidden**: The condition passes when all the specified objects are hidden.

When the condition passes, one of two things can happen:

- **Override Value**: The value of the control is momentarily overriden with the specified value.
- **Do Not Override**: The value of the control is no longer overriden, and the current value from the menu or other data source takes over.

## Execution cost

The *Mesh Visibility* component is only evaluated after at least one value passed to a *Vixxy Control* changes. This means the *Mesh Visibility* component is asleep most of the time.

If a *Mesh Visibility* component triggers a change to a *Vixxy Control*, we will continue evaluating *Mesh Visibility* components, up to a maximum of five times per frame, so that
cascading visibility toggles can take place.
