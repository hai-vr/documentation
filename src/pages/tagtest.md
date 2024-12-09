import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Tag Test page

## Universal Requirements

<HaiTags>
<HaiTag isUniversal={true} short={true} />
<HaiTag isUniversal={true} short={false} />
</HaiTags>

<HaiTags>
<HaiTag notVRChat={true} short={true} />
<HaiTag notVRChat={true} short={false} />
</HaiTags>

## VR Applications

<HaiTags>
<HaiTag requiresVRChat={true} short={true} />
<HaiTag requiresVRChat={true} short={false} />
</HaiTags>

<HaiTags>
<HaiTag requiresResonite={true} short={true} />
<HaiTag requiresResonite={true} short={false} />
</HaiTags>

<HaiTags>
<HaiTag requiresChilloutVR={true} short={true} />
<HaiTag requiresChilloutVR={true} short={false} />
</HaiTags>

<HaiTags>
<HaiTag requiresBasis={true} short={true} />
<HaiTag requiresBasis={true} short={false} />
</HaiTags>

<HaiTags>
<HaiTag requiresSteamVR={true} short={true} />
<HaiTag requiresSteamVR={true} short={false} />
</HaiTags>

## VTubing applications

<HaiTags>
<HaiTag requiresVRM={true} short={true} />
<HaiTag requiresVRM={true} short={false} />
</HaiTags>

<HaiTags>
<HaiTag requiresWarudo={true} short={true} />
<HaiTag requiresWarudo={true} short={false} />
</HaiTags>

<HaiTags>
<HaiTag compatibleWithWarudo={true} short={true} />
<HaiTag compatibleWithWarudo={true} short={false} />
</HaiTags>

<HaiTags>
<HaiTag compatibleWithVNyan={true} short={true} />
<HaiTag compatibleWithVNyan={true} short={false} />
</HaiTags>

<HaiTags>
<HaiTag compatibleWithVSFAvatar={true} short={true} />
<HaiTag compatibleWithVSFAvatar={true} short={false} />
</HaiTags>

<HaiTags>
<HaiTag compatibleWithVSeeFace={true} short={true} />
<HaiTag compatibleWithVSeeFace={true} short={false} />
</HaiTags>

## Miscellaneous

<HaiTags>
<HaiTag compatibleWithBeatSaber={true} short={true} />
<HaiTag compatibleWithBeatSaber={true} short={false} />
</HaiTags>

<HaiTags>
<HaiTag notCompatibleWithGltf={true} short={true} />
<HaiTag notCompatibleWithGltf={true} short={false} />
</HaiTags>

<HaiTags>
<HaiTag supporter={true} short={true} />
<HaiTag supporter={true} short={false} />
</HaiTags>
