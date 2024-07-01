---
sidebar_position: 5
title: "VRChat"
---

# Functions: VRChat

:::danger
This is the work-in-progress documentation for Animator As Code **V1**, which has not yet been released. The last public version of Animator As Code is V0.
:::

:::info
New additions in V1 are indicated with a light bulb 💡 icon.
:::

These functions are specific to the VRChat Avatars SDK. For more functions, see [Destructive workflow](./vrchat-destructive-workflow).

To use these functions, use the extensions functions in `AacVRCExtensions`:

- Add `using AnimatorAsCode.V1.VRC;` in your class imports.
- If you use assembly definitions, add the `AnimatorAsCodeFramework.V1.VRC` assembly reference.

#### Animator creation overview

```mermaid
graph TD;
    AacV1[static AacV1]:::roots-->|Create|Base:::roots;
    Base-->|VrcAssets|VrcAssetLibrary
    
    Base-->|NewAnimatorController|Controller:::focus;
    Controller-->|NewLayer|Layer:::focus;
    Layer-->|Av3|Av3;
    Av3-->|*|Parameter;
    Av3-->|ItIsRemote<br>/ItIsLocal|Condition;
    
    Layer-->|NewState|State:::focus;
    Layer-->|NewSubStateMachine|StateMachine:::focus;
    StateMachine-->|NewSubStateMachine|StateMachine;
    StateMachine-->|NewState|State;
    
    State-->|Drives<br>/Driving*<br>/Tracking*<br>/Locomotion*<br>/PrintsToLogUsingTrackingBehaviour|State;
    
    State-->|Audio λ|EditAudio;
    State-->|Driving λ|EditDriver;
    
    classDef disabled fill:#CCC
    classDef roots fill:#FCC
    classDef focus fill:#CFF
```

## Base (AacFlBase)

#### Reference VRChat assets (AacVRCExtensions)

- `AacVrcAssetLibrary VrcAssets()`<br/>
  Return an AacVrcAssetLibrary, which lets you select various assets from VRChat.


## Layer (AacFlLayer)

#### Create VRChat parameters

- `AacAv3 Av3()`<br/>
  Return an AacAv3 object, letting you select various standard Avatars 3.0 Animator Parameters. Subsequently invoking its functions will create invoked parameters in that layer.


## Avatars 3.0 (AacAv3)

### Parameters

- `AacFlBoolParameter IsLocal`<br/>
  Create a Bool parameter in the animator named IsLocal.

- `AacFlEnumIntParameter<Av3Viseme> Viseme`<br/>
  Create an Int parameter in the animator named Viseme.

- `AacFlEnumIntParameter<Av3Gesture> GestureLeft`<br/>
  Create an Int parameter in the animator named GestureLeft.

- `AacFlEnumIntParameter<Av3Gesture> GestureRight`<br/>
  Create an Int parameter in the animator named GestureRight.

- `AacFlFloatParameter GestureLeftWeight`<br/>
  Create a Float parameter in the animator named GestureLeftWeight.

- `AacFlFloatParameter GestureRightWeight`<br/>
  Create a Float parameter in the animator named GestureRightWeight.

- `AacFlFloatParameter AngularY`<br/>
  Create a Float parameter in the animator named AngularY.

- `AacFlFloatParameter VelocityX`<br/>
  Create a Float parameter in the animator named VelocityX.

- `AacFlFloatParameter VelocityY`<br/>
  Create a Float parameter in the animator named VelocityY.

- `AacFlFloatParameter VelocityZ`<br/>
  Create a Float parameter in the animator named VelocityZ.

- `AacFlFloatParameter VelocityMagnitude`💡<br/>
  Create a Float parameter in the animator named VelocityMagnitude.

- `AacFlFloatParameter Upright`<br/>
  Create a Float parameter in the animator named Upright.

- `AacFlBoolParameter Grounded`<br/>
  Create a Bool parameter in the animator named Grounded.

- `AacFlBoolParameter Seated`<br/>
  Create a Bool parameter in the animator named Seated.

- `AacFlBoolParameter AFK`<br/>
  Create a Bool parameter in the animator named AFK.

- `AacFlIntParameter TrackingType`<br/>
  Create an Int parameter in the animator named TrackingType.

- `AacFlIntParameter VRMode`<br/>
  Create an Int parameter in the animator named VRMode.

- `AacFlBoolParameter MuteSelf`<br/>
  Create a Bool parameter in the animator named MuteSelf.

- `AacFlBoolParameter InStation`<br/>
  Create a Bool parameter in the animator named InStation.

- `AacFlFloatParameter Voice`<br/>
  Create a Float parameter in the animator named Voice.

- `AacFlBoolParameter Earmuffs`💡<br/>
  Create a Bool parameter in the animator named Earmuffs.

- `AacFlBoolParameter IsOnFriendsList`💡<br/>
  Create a Bool parameter in the animator named IsOnFriendsList.

- `AacFlBoolParameter ScaleModified`💡<br/>
  Create a Bool parameter in the animator named ScaleModified.

- `AacFlFloatParameter ScaleFactor`💡<br/>
  Create a Float parameter in the animator named ScaleFactor.

- `AacFlFloatParameter ScaleFactorInverse`💡<br/>
  Create a Float parameter in the animator named ScaleFactorInverse.

- `AacFlFloatParameter EyeHeightAsMeters`💡<br/>
  Create a Float parameter in the animator named EyeHeightAsMeters.

- `AacFlFloatParameter EyeHeightAsPercent`💡<br/>
  Create a Float parameter in the animator named EyeHeightAsPercent.


### Supporting conditions

- `IAacFlCondition ItIsRemote()`<br/>
  Verify that IsLocal is false. Create a Bool parameter in the animator named IsLocal.

- `IAacFlCondition ItIsLocal()`<br/>
  Verify that IsLocal is true. Create a Bool parameter in the animator named IsLocal.


## Asset Library (AacVrcAssetLibrary)

- `AvatarMask LeftHandAvatarMask()`<br/>
  Left Hand avatar mask asset.

- `AvatarMask RightHandAvatarMask()`<br/>
  Right Hand avatar mask asset.

- `AnimationClip ProxyForGesture(AacAv3.Av3Gesture gesture, bool masculine)`<br/>
  Gesture proxy animation asset. There are two idle animations for the neutral hand, the bool selects one or the other.


## State (AacFlState)

### Driver state behaviour

:::tip
Due to how VRCAvatarParameterDriver has evolved over the years,
consider using the [**Driving lambda expression**](#driver-state-behaviour-as-a-lambda-expression) instead.
:::

#### Local

- `AacFlState DrivingLocally()`<br/>
  Set the driver to be Local only. Create an Avatar Parameter Driver state behaviour if it does not exist.

#### Set

- `AacFlState Drives(AacFlIntParameter parameter, int value)`<br/>
  Drive the Int parameter to value. Create an Avatar Parameter Driver state behaviour if it does not exist.

- `AacFlState Drives(AacFlFloatParameter parameter, float value)`<br/>
  Drive the Float parameter to value. Create an Avatar Parameter Driver state behaviour if it does not exist.

- `AacFlState Drives(AacFlBoolParameter parameter, bool value)`<br/>
  Drive the Bool parameter to value. Create an Avatar Parameter Driver state behaviour if it does not exist.

- `AacFlState Drives(AacFlBoolParameterGroup parameters, bool value)`<br/>
  Drive the Bool parameter to value. Create an Avatar Parameter Driver state behaviour if it does not exist.

#### Add

- `AacFlState DrivingIncreases(AacFlFloatParameter parameter, float additiveValue)`<br/>
  Drive the Float parameter, incrementing it by `additiveValue`. Create an Avatar Parameter Driver state behaviour if it does not exist.

- `AacFlState DrivingDecreases(AacFlFloatParameter parameter, float positiveValueToDecreaseBy)`<br/>
  Drive the Float parameter, decreasing it by the amount of `positiveValueToDecreaseBy`. Create an Avatar Parameter Driver state behaviour if it does not exist.

- `AacFlState DrivingIncreases(AacFlIntParameter parameter, int additiveValue)`<br/>
  Drive the Int parameter, incrementing it by `additiveValue`. Create an Avatar Parameter Driver state behaviour if it does not exist.

- `AacFlState DrivingDecreases(AacFlIntParameter parameter, int positiveValueToDecreaseBy)`<br/>
  Drive the Int parameter, decreasing it by the amount of `positiveValueToDecreaseBy`. Create an Avatar Parameter Driver state behaviour if it does not exist.

#### Random

- `AacFlState DrivingRandomizesLocally(AacFlFloatParameter parameter, float min, float max)`<br/>
  Drive the Float parameter value to be random between min and max. Set the driver to be Local only. Create an Avatar Parameter Driver state behaviour if it does not exist.

- `AacFlState DrivingRandomizesLocally(AacFlIntParameter parameter, int min, int max)`<br/>
  Drive the Int parameter value to be random between min and max. Set the driver to be Local only. Create an Avatar Parameter Driver state behaviour if it does not exist.

- `AacFlState DrivingRandomizesLocally(AacFlBoolParameter parameter, float chance)`<br/>
  Drive the Bool parameter value to be random with the specified chance of being true. Set the driver to be Local only. Create an Avatar Parameter Driver state behaviour if it does not exist.

### Tracking state behaviours

- `AacFlState PrintsToLogUsingTrackingBehaviour(string value)`<br/>
  Use an Animator Tracking Control to print logs to the avatar wearer. Create an Animator Tracking Control state behaviour if it does not exist.

- `AacFlState TrackingTracks(TrackingElement element)`<br/>
  Use an Animator Tracking Control to set the element to be tracking. Create an Animator Tracking Control state behaviour if it does not exist.

- `AacFlState TrackingAnimates(TrackingElement element)`<br/>
  Use an Animator Tracking Control to set the element to be animating. Create an Animator Tracking Control state behaviour if it does not exist.

- `AacFlState TrackingSets(TrackingElement element, VRC_AnimatorTrackingControl.TrackingType trackingType)`<br/>
  Use an Animator Tracking Control to set the element to be the value of `trackingType`. Create an Animator Tracking Control state behaviour if it does not exist.
 
### Locomotion state behaviour

- `AacFlState LocomotionEnabled()`<br/>
  Enable locomotion. Create an Animator Locomotion Control if it does not exist.

- `AacFlState LocomotionDisabled()`<br/>
  Disable locomotion. Create an Animator Locomotion Control if it does not exist.

### Driver state behaviour as a lambda expression💡

- `AacVRCFlEditDriver Driving(Action<AacVRCFlEditDriver> action)`💡<br/>
  Creates a new VRCAvatarParameterDriver behaviour, and edits it. By default, it is non-local, so it drives even if it's not on the avatar wearer.
  This always creates a new behaviour even if there are already other VRCAvatarParameterDriver behaviours.

### Audio state behaviour as a lambda expression💡

- `AacVRCFlEditPlayAudio Audio(AudioSource source, Action<AacVRCFlEditAudio> action)`💡<br/>
  Creates a new VRCAnimatorPlayAudio behaviour, and edits it.
  If you don't have the AudioSource, use the overload that accepts a string.
  By default, this behaviour does nothing (everything is set to NeverApply, and does neither stop nor plays anything), unlike a VRCAnimatorPlayAudio that would be created by hand.
  This always creates a new behaviour even if there are already VRCAnimatorPlayAudio behaviours.

- `AacVRCFlEditPlayAudio Audio(string audioSourcePath, Action<AacVRCFlEditAudio> action)`💡<br/>
  Creates a new VRCAnimatorPlayAudio behaviour, and edits it.
  This overload accepts a path, but if you do have the AudioSource, use the overload that accepts an AudioSource.
  By default, this behaviour does nothing (everything is set to NeverApply, and does neither stop nor plays anything), unlike a VRCAnimatorPlayAudio that would be created by hand.
  This always creates a new behaviour even if there are already VRCAnimatorPlayAudio behaviours.

## Driver editing (AacVRCFlEditDriver)💡

#### Local

- `AacVRCFlEditDriver Locally()`💡<br/>
  Set the driver to be Local only.

#### Set

- `AacVRCFlEditDriver Sets(AacFlIntParameter parameter, int value)`💡<br/>
  Drive the Int parameter to value.

- `AacVRCFlEditDriver Sets(AacFlFloatParameter parameter, float value)`💡<br/>
  Drive the Float parameter to value.

- `AacVRCFlEditDriver Sets(AacFlBoolParameter parameter, bool value)`💡<br/>
  Drive the Bool parameter to value.

- `AacVRCFlEditDriver Sets(AacFlBoolParameterGroup parameters, bool value)`💡<br/>
  Drive the Bool parameter to value.

#### Add

- `AacVRCFlEditDriver Increases(AacFlFloatParameter parameter, float additiveValue)`💡<br/>
  Drive the Float parameter, incrementing it by `additiveValue`.

- `AacVRCFlEditDriver Decreases(AacFlFloatParameter parameter, float positiveValueToDecreaseBy)`💡<br/>
  Drive the Float parameter, decreasing it by the amount of `positiveValueToDecreaseBy`.

- `AacVRCFlEditDriver Increases(AacFlIntParameter parameter, int additiveValue)`💡<br/>
  Drive the Int parameter, incrementing it by `additiveValue`.

- `AacVRCFlEditDriver Decreases(AacFlIntParameter parameter, int positiveValueToDecreaseBy)`💡<br/>
  Drive the Int parameter, decreasing it by the amount of `positiveValueToDecreaseBy`.

#### Random

- `AacVRCFlEditDriver Randomizes(AacFlFloatParameter parameter, float min, float max)`💡<br/>
  Drive the Float parameter value to be random between min and max.

## Audio editing (AacVRCFlEditPlayAudio)💡

#### Play and Stop OnEnter

All of these functions affect both the Stop and Play checkboxes when the state is entered. To do neither Stop nor Play, don't call any of those functions.

- `AacVRCFlEditPlayAudio ReplaysOnEnter()`💡<br/>
  Stop, and Play when the state is entered.

- `AacVRCFlEditPlayAudio StartsPlayingOnEnter()`💡<br/>
  Does not stop, and Play when the state is entered.

- `AacVRCFlEditPlayAudio ReplaysOnEnterAfterSeconds(float delaySeconds)`💡<br/>
  Stop, and Play when the state is entered after a delay in seconds.

- `AacVRCFlEditPlayAudio StartsPlayingOnEnterAfterSeconds(float delaySeconds)`💡<br/>
  Does not stop, and Play when the state is entered after a delay in seconds.

- `AacVRCFlEditPlayAudio StopsPlayingOnEnter()`💡<br/>
  Stop, and do not Play when the state is entered.

#### Play and Stop OnExit

All of these functions affect both the Stop and Play checkboxes when leaving the state. To do neither Stop nor Play, don't call any of those functions.

- `AacVRCFlEditPlayAudio ReplaysOnExit()`💡<br/>
  Stop, and Play when leaving the state.

- `AacVRCFlEditPlayAudio StartsPlayingOnExit()`💡<br/>
  Does not stop, and Play when leaving the state.

- `AacVRCFlEditPlayAudio StopsPlayingOnExit()`💡<br/>
  Stop, and do not Play when leaving the state.

#### Clips

- `AacVRCFlEditPlayAudio SelectsClipIfStopped(VRC_AnimatorPlayAudio.Order order, AudioClip[] clipsWithNulls)`💡<br/>
  Defines the list of clips and the order they are going to play in, if stopped.<br/>
  The list can safely contain null values.<br/>
  If you want to use the VRC_AnimatorPlayAudio.Order.Parameter enum value, use the overload that accepts an AacFlIntParameter instead.

- `AacVRCFlEditPlayAudio SelectsClip(VRC_AnimatorPlayAudio.Order order, AudioClip[] clipsWithNulls)`💡<br/>
  Defines the list of clips and the order they are going to play in.<br/>
  The list can safely contain null values.<br/>
  If you want to use the VRC_AnimatorPlayAudio.Order.Parameter enum value, use the overload that accepts an AacFlIntParameter instead.

- `AacVRCFlEditPlayAudio SelectsClipIfStopped(AacFlIntParameter indexParameter, AudioClip[] clipsWithNulls)`💡<br/>
  Defines the list of clips, which will play using the parameter as an index, if stopped.<br/>
  The list can safely contain null values, however, null values will be removed, causing the indices of elements of that list to change, which may or may not be an issue.

- `AacVRCFlEditPlayAudio SelectsClip(AacFlIntParameter indexParameter, AudioClip[] clipsWithNulls)`💡<br/>
  Defines the list of clips, which will play using the parameter as an index.<br/>
  The list can safely contain null values, however, null values will be removed, causing the indices of elements of that list to change, which may or may not be an issue.


#### Loop

- `AacVRCFlEditPlayAudio SetsLoopingIfStopped()`💡<br/>
  Set the audio source as looping if stopped.

- `AacVRCFlEditPlayAudio SetsNonLoopingIfStopped()`💡<br/>
  Set the audio source as non-looping if stopped.

- `AacVRCFlEditPlayAudio SetsLooping()`💡<br/>
  Set the audio source as looping.

- `AacVRCFlEditPlayAudio SetsNonLooping()`💡<br/>
  Set the audio source as non-looping.

#### Volume

- `AacVRCFlEditPlayAudio RandomizesVolumeIfStopped(float min, float max)`💡<br/>
  Randomizes the volume if stopped.

- `AacVRCFlEditPlayAudio RandomizesVolume(float min, float max)`💡<br/>
  Randomizes the volume.

- `AacVRCFlEditPlayAudio SetsVolumeIfStopped(float value)`💡<br/>
  Sets the volume if stopped.

- `AacVRCFlEditPlayAudio SetsVolume(float value)`💡<br/>
  Sets the volume.


#### Pitch

- `AacVRCFlEditPlayAudio RandomizesPitchIfStopped(float min, float max)`💡<br/>
  Randomizes the pitch if stopped.

- `AacVRCFlEditPlayAudio RandomizesPitch(float min, float max)`💡<br/>
  Randomizes the pitch.

- `AacVRCFlEditPlayAudio SetsPitchIfStopped(float value)`💡<br/>
  Sets the pitch if stopped.

- `AacVRCFlEditPlayAudio SetsPitch(float value)`💡<br/>
  Sets the pitch.
