import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Edit All Mesh Anchor Override

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

Finds all SkinnedMeshRenderers and all MeshRenderers of the avatar and changes the Anchor Override.

The location of this component in the avatar hierarchy does not matter. If you need more control,
use [Modular Avatar Mesh Settings](https://modular-avatar.nadena.dev/docs/reference/mesh-settings) instead.

## Versions

- **1.2.0**: Added.

Classification: *This component is application-agnostic.*
