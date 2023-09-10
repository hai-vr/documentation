---
sidebar_position: 5
---

# Functions: VRChat

These functions are specific to the VRChat Avatars SDK. For more functions, see [Destructive workflow](./functions-vrchat-destructive).

:::caution
To use these functions, use the extensions functions in `AacVRCExtensions`.
:::

## Base (AacFlBase)

#### Reference VRChat assets (AacVRCExtensions)

- `AacVrcAssetLibrary VrcAssets()` <br/>
  Return an AacVrcAssetLibrary, which lets you select various assets from VRChat.

## Avatars 3.0 (AacAv3)

### Parameters

- `AacFlBoolParameter IsLocal` -> Bool <br/>
  Create a Bool parameter in the animator named IsLocal.

- `AacFlEnumIntParameter<Av3Viseme> Viseme` <br/>
  Create an Int parameter in the animator named Viseme.

- `AacFlEnumIntParameter<Av3Gesture> GestureLeft` <br/>
  Create an Int parameter in the animator named GestureLeft.

- `AacFlEnumIntParameter<Av3Gesture> GestureRight` <br/>
  Create an Int parameter in the animator named GestureRight.

- `AacFlFloatParameter GestureLeftWeight` -> Float <br/>
  Create a Float parameter in the animator named GestureLeftWeight.

- `AacFlFloatParameter GestureRightWeight` -> Float <br/>
  Create a Float parameter in the animator named GestureRightWeight.

- `AacFlFloatParameter AngularY` -> Float <br/>
  Create a Float parameter in the animator named AngularY.

- `AacFlFloatParameter VelocityX` -> Float <br/>
  Create a Float parameter in the animator named VelocityX.

- `AacFlFloatParameter VelocityY` -> Float <br/>
  Create a Float parameter in the animator named VelocityY.

- `AacFlFloatParameter VelocityZ` -> Float <br/>
  Create a Float parameter in the animator named VelocityZ.

- `AacFlFloatParameter Upright` -> Float <br/>
  Create a Float parameter in the animator named Upright.

- `AacFlBoolParameter Grounded` -> Bool <br/>
  Create a Bool parameter in the animator named Grounded.

- `AacFlBoolParameter Seated` -> Bool <br/>
  Create a Bool parameter in the animator named Seated.

- `AacFlBoolParameter AFK` -> Bool <br/>
  Create a Bool parameter in the animator named AFK.

- `AacFlIntParameter TrackingType` -> Int <br/>
  Create an Int parameter in the animator named TrackingType.

- `AacFlIntParameter VRMode` -> Int <br/>
  Create an Int parameter in the animator named VRMode.

- `AacFlBoolParameter MuteSelf` -> Bool <br/>
  Create a Bool parameter in the animator named MuteSelf.

- `AacFlBoolParameter InStation` -> Bool <br/>
  Create a Bool parameter in the animator named InStation.

- `AacFlFloatParameter Voice` -> Float <br/>
  Create a Float parameter in the animator named Voice.


### Supporting conditions

- `IAacFlCondition ItIsRemote()` <br/>
  Verify that IsLocal is false. Create a Bool parameter in the animator named IsLocal.

- `IAacFlCondition ItIsLocal()` <br/>
  Verify that IsLocal is true. Create a Bool parameter in the animator named IsLocal.


## Asset Library (AacVrcAssetLibrary)

- `AvatarMask LeftHandAvatarMask()` <br/>
  Left Hand avatar mask asset.

- `AvatarMask RightHandAvatarMask()` <br/>
  Right Hand avatar mask asset.

- `AnimationClip ProxyForGesture(AacAv3.Av3Gesture gesture, bool masculine)` <br/>
  Gesture proxy animation asset. There are two idle animations for the neutral hand, the bool selects one or the other.