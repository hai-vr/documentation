import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# 🚚 Convert VRC Constraints to Unity Constraints

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

Convert VRC Constraints to Unity Constraints for use in non-VRChat applications.

To use this component, there must be either component stubs for VRC Constraints present in the project,
or the VRChat SDK itself installed.

This component should not be used when uploading avatars for the VRChat platform.

## How to use

To use this component:
- Add a "PA-Conversions VRC Constraints -> Unity Constraints" component anywhere in your avatar.

## Versions

- **2.1.0**: Added.

Classification: *This component is application-agnostic, but requires either component stubs or the VRC SDK to be installed. If neither is installed, it will not result in compilation errors, but the component will have no effect.*
