import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";

# Local testing

<HaiTags>
<HaiTag requiresBasis={true} />
</HaiTags>

## Make your avatar an Addressable prefab

TODO:

- Teach how to mark a prefab as Addressable (prefab workflow in general).
- Solve the Modular Avatar problem that it's not processed inside Addressables.
  - Maybe open a PR to build a standard Addressable when entering Play mode.
  - This could make the avatar testing process easier in general.

## Modify the BasisUIAvatarSelection prefab

TODO: Consider opening a PR so that we have a pre-set addressable name for local avatar testing by default,
or some form or auto-discovery process.

- In the inspector, open the `Assets/Prefabs/UI/BasisUIAvatarSelection.prefab` prefab.
- In the **Basis UI Avatar Selection** component, add a new entry to the *Pre Loaded Bundles* list.
- In this entry, set the following:
  - In *Basis Remote Bundle Encrypted*:
    - Check *Is Local*
    - Set *Meta URL* to your addressable.
    - Set *Bundle URL* to your addressable.
  - In *Basis Bundle Information*:
    - In *Basis Bundle Generated*:
      - Set Asset Mode to `1`
      - *Please make sure the field only contains `1` and no spaces around it.*

![Unity_I4CVf4b2SF.png](img%2FUnity_I4CVf4b2SF.png)