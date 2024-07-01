---
sidebar_position: 4
title: "Base functions"
---

# Functions

:::danger
This is the work-in-progress documentation for Animator As Code **V1**, which has not yet been released. The last public version of Animator As Code is V0.
:::

:::info
New additions in V1 are indicated with a light bulb 💡 icon.
:::

#### Animator creation overview

```mermaid
graph TD;
    AacV1[static AacV1]:::roots-->|Create|Base:::roots;
    Base-->|CreateMainArbitraryControllerLayer<br>/CreateSupportingArbitraryControllerLayer<br>/CreateFirstArbitraryControllerLayer|Layer;

    Base-->|NewAnimatorController|Controller:::focus;
    Controller-->|NewLayer|Layer;
    Layer-->|NewState|State;
    Layer-->|NewSubStateMachine|StateMachine;
    StateMachine-->|NewSubStateMachine|StateMachine;
    StateMachine-->|NewState|State;
    StateMachine-->|TransitionsTo<br>/TransitionsFromAny<br>/Exits<br>/Restarts|Transition;
    StateMachine-->|TransitionsFromEntry|EntryTransition;
    State-->|TransitionsTo<br>/TransitionsFromAny<br>/Exits|Transition;
    State-->|TransitionsFromEntry|EntryTransition;
    Transition-->|When|TransitionContinuation;
    EntryTransition-->|When|TransitionContinuation;
    TransitionContinuation-->|And|TransitionContinuation;
    TransitionContinuation-->|Or|NewTransitionContinuation;
    NewTransitionContinuation-->|When|TransitionContinuation;
    
    Layer-->|IntParameter<br>/FloatParameter<br>/BoolParameter|Parameter;
    Parameter-->|IsGreaterThan<br>/IsLessThan<br>/IsEqualTo<br>/IsNotEqualTo<br>/IsTrue<br>/IsFalse|Condition;
    Layer-->|IntParameters<br>/FloatParameters<br>/BoolParameters|ParameterGroup;
    ParameterGroup-->|AreGreaterThan<br>/AreLessThan<br>/AreEqualTo<br>/AreNotEqualTo<br>/AreTrue<br>/AreFalse<br>/AreTrueExcept<br>/AreFalseExcept|Condition;
    ParameterGroup-->|IsAnyTrue<br>/IsAnyFalse<br>|OrCondition;
    
    Base-->|NewClip|Clip:::disabled;
    Base-->|NewBlendTree|BlendTree:::disabled;
    
    classDef disabled fill:#CCC
    classDef roots fill:#FCC
    classDef focus fill:#CFF
```

#### Asset creation overview

```mermaid
graph TD;
    AacV1[static AacV1]:::roots-->|Create|Base:::roots;
    Base-->|NewAnimatorController|Controller:::disabled;
    
    Base-->|NewClip|Clip:::focus;
    Base-->|NewBlendTree|BlendTree:::focus;
    Clip-->|Animating λ|EditClip;
    EditClip-->|Animates|SettingCurve;
    SettingCurve-->|WithSecondsUnit λ<br>/WithFrameCountUnit λ<br>/WithUnit λ|SettingKeyframes;
    
    BlendTree-->|FreeformCartesian2D<br>/FreeformDirectional2D<br>/SimpleDirectional2D|BlendTree2D;
    BlendTree-->|Simple1D|BlendTree1D;
    BlendTree-->|Direct|BlendTreeDirect;
    
    classDef disabled fill:#CCC
    classDef roots fill:#FCC
    classDef focus fill:#CFF
```

## Animator As Code (AacV1)

- `static AacFlBase Create(AacConfiguration configuration)`<br/>
Create an Animator As Code (AAC) base.


## Base (AacFlBase)

#### Create assets

- `AacFlClip NewClip()`<br/>
Create a new clip. The asset is generated into the container.

- `AacFlClip CopyClip(AnimationClip originalClip)`<br/>
Create a new clip that is a copy of `originalClip`. The asset is generated into the container.

- `AacFlNonInitializedBlendTree NewBlendTree()`💡<br/>
  Create a new BlendTree asset. The asset is generated into the container.

- `BlendTree NewBlendTreeAsRaw()`<br/>
  Create a new BlendTree asset and returns a native BlendTree object. The asset is generated into the container.💡 You may use NewBlendTree() instead to obtain a fluent interface.

- `AacFlClip NewClip(string name)`<br/>
Create a new clip with a name. However, the name is only used as a suffix for the asset. The asset is generated into the container. FIXME: This is quite pointless because the name is mangled anyways.

- `AacFlClip DummyClipLasting(float numberOf, AacFlUnit unit)`<br/>
Create a new clip which animates a dummy transform for a specific duration specified in an unit (Frames or Seconds).

- `AacFlController NewAnimatorController()`💡<br/>
Create a new animator controller. The asset is generated into the container.

- `AacFlController NewAnimatorController(string name)`💡<br/>
Create a new animator controller with a name. However, the name is only used as a suffix for the asset. The asset is generated into the container.

- `T DuplicateAsset<T>(T assetToDuplicate) where T : Object`💡<br/>
Duplicate a new asset into the container and return it. For example, use this to create modified material variants. This asset will be removed the same way as other generated assets.

#### Reference VRChat assets

:::info
See functions specific to [VRChat](./vrchat#base-aacflbase).
:::

#### Maintain assets

- `void ClearPreviousAssets()`<br/>
  Removes all assets from the asset container matching the specified asset key.

#### Create layers (Destructive workflow)

:::info
For VRChat-specific functions, see [VRChat (Destructive workflow)](./vrchat-destructive-workflow#extensions-for-base-aacflbase)
:::

- `AacFlLayer CreateMainArbitraryControllerLayer(AnimatorController controller)`<br/>
Create a main layer for an arbitrary AnimatorController, clearing the previous one of the same system. You are not obligated to have a main layer.

- `AacFlLayer CreateSupportingArbitraryControllerLayer(AnimatorController controller, string suffix)`<br/>
Create a supporting layer for an arbitrary AnimatorController, clearing the previous one of the same system and suffix. You can create multiple supporting layers with different suffixes, and you are not obligated to have a main layer to create a supporting layer.

- `AacFlLayer CreateFirstArbitraryControllerLayer(AnimatorController controller)`<br/>
Clears the topmost layer of an arbitrary AnimatorController, and returns it.

#### Remove layers (Destructive workflow)

:::info
See functions specific to [VRChat (Destructive workflow)](./vrchat-destructive-workflow#extensions-for-base-aacflbase)
:::

#### Create parameters without an animator💡

- `AacFlNoAnimator NoAnimator()`💡<br/>
If you are not creating an animator, this returns an object from which you can obtain animator parameter objects. You should use this class if you are creating BlendTree assets without any animator controllers to back it. Otherwise, it is strongly recommended to obtain animator parameter objects directly from the layer objects instead of using NoAnimator(), as the use of NoAnimator() will not result in the registration of any parameters inside the animator controller.


## Controller (AacFlController)💡

- `AnimatorController AnimatorController`
Exposes the underlying Unity AnimatorController.

- `AacFlLayer NewLayer(string suffix)`💡<br/>
Create a new layer with a specific suffix. You cannot create multiple layers with the same suffix on the same controller.

- `AacFlLayer NewLayer()`💡<br/>
Create a new layer. You cannot invoke this method multiple times on the same controller.


## Layer (AacFlLayer)

- `AacFlStateMachine StateMachine =>`<br/>
Exposes the underlying AnimatorAsCode StateMachine object of this layer.

- `AacFlState NewState(string name)` 🔺<br/>
Create a new state, initially positioned below the last generated state of this layer.<br/>
🔺 If the name is already used, a number will be appended at the end.

- `AacFlState NewState(string name, int x, int y)` 🔺<br/>
Create a new state at a specific position `x` and `y`, in grid units. The grid size is defined in the DefaultsProvider of the AacConfiguration of AAC. `x` positive goes right, `y` positive goes down.<br/>
🔺 If the name is already used, a number will be appended at the end.

- `AacFlStateMachine NewSubStateMachine(string name)`💡<br/>
  Create a new state machine, initially positioned below the last generated state of this layer.<br/>
🔺 If the name is already used, a number will be appended at the end.

- `AacFlStateMachine NewSubStateMachine(string name, int x, int y)`💡<br/>
  Create a new state machine at a specific position `x` and `y`, in grid units. The grid size is defined in the DefaultsProvider of the AacConfiguration of AAC. `x` positive goes right, `y` positive goes down.<br/>
🔺 If the name is already used, a number will be appended at the end.

#### Create layer transitions

- `AacFlTransition AnyTransitionsTo(AacFlState destination)`<br/>
Create a transition from Any to the `destination` state.

- `AacFlTransition AnyTransitionsTo(AacFlStateMachine destination)`<br/>
Create a transition from Any to the `destination` state machine.

- `AacFlEntryTransition EntryTransitionsTo(AacFlState destination)`<br/>
Create a transition from the Entry to the `destination` state.

- `AacFlEntryTransition EntryTransitionsTo(AacFlStateMachine destination)`<br/>
Create a transition from the Entry to the `destination` state machine.

#### Create parameters

- `AacFlBoolParameter BoolParameter(string parameterName)`<br/>
Create a Bool parameter in the animator.

- `AacFlBoolParameter TriggerParameterAsBool(string parameterName)`<br/>
Create a Trigger parameter in the animator, but returns a Bool parameter for use in AAC.

- `AacFlFloatParameter FloatParameter(string parameterName)`<br/>
Create a Float parameter in the animator.

- `AacFlIntParameter IntParameter(string parameterName)`<br/>
Create an Int parameter in the animator.

#### Create parameter groups

- `AacFlBoolParameterGroup BoolParameters(params string[] parameterNames)`<br/>
Create multiple Bool parameters in the animator, and returns a group of multiple Bools.

- `AacFlBoolParameterGroup TriggerParametersAsBools(params string[] parameterNames)`<br/>
Create multiple Trigger parameters in the animator, but returns a group of multiple Bools for use in AAC.

- `AacFlFloatParameterGroup FloatParameters(params string[] parameterNames)`<br/>
Create multiple Float parameters in the animator, and returns a group of multiple Bools.

- `AacFlIntParameterGroup IntParameters(params string[] parameterNames)`<br/>
Create multiple Int parameters in the animator, and returns a group of multiple Bools.

- `AacFlBoolParameterGroup BoolParameters(params AacFlBoolParameter[] parameters)`<br/>
Combine multiple Int parameters into a group.

- `AacFlBoolParameterGroup TriggerParametersAsBools(params AacFlBoolParameter[] parameters)`<br/>
Combine multiple Trigger parameters into a group. FIXME: This is a pointless function because BoolParameters already exists.

- `AacFlFloatParameterGroup FloatParameters(params AacFlFloatParameter[] parameters)`<br/>
Combine multiple Int parameters into a group.

- `AacFlIntParameterGroup IntParameters(params AacFlIntParameter[] parameters)`<br/>
Combine multiple Int parameters into a group.
  
#### Set animator parameter value

- `AacFlLayer OverrideValue(AacFlBoolParameter toBeForced, bool value)`<br/>
Set the Bool value of `toBeForced` parameter to `value` in the animator.

- `AacFlLayer OverrideValue(AacFlFloatParameter toBeForced, float value)`<br/>
Set the Float value of `toBeForced` parameter to `value` in the animator.

- `AacFlLayer OverrideValue(AacFlIntParameter toBeForced, int value)`<br/>
Set the Int value of `toBeForced` parameter to `value` in the animator.

- `AacFlLayer CopyParametersAndOverridesTo(AacFlLayer otherLayer)💡<br/>
Copy all created parameters to the other layer, and overrides it with a value if a value was stored.

#### Edit avatar mask

- `AacFlLayer WithAvatarMask(AvatarMask avatarMask)`<br/>
Set the Avatar Mask of the layer.

- `AacFlLayer WithAvatarMaskNoTransforms()`<br/>
Set the Avatar Mask of the layer to be an Avatar Mask which denies all transforms. The asset is generated into the container.

- `AacFlLayer ResolveAvatarMask(Transform[] paths)`<br/>
Set the Avatar Mask of the layer to be an Avatar Mask that allows the specified transforms. If `paths` is an empty array, all transforms are denied, which is effectively the same as calling `.WithAvatarMaskNoTransforms()`. The asset is generated into the container.

#### Edit layer attributes

- `AacFlLayer WithWeight(float weight)` <br />
Set the weight of the layer.

- `AacFlLayer WithBlendingMode(AnimatorLayerBlendingMode blendingMode)` <br />
Set the blending mode of the layer.


## Sub State Machine (AacFlStateMachine)💡

- `AnimatorStateMachine Machine;`<br/>
Exposes the underlying Unity AnimatorStateMachine object of this state machine.

- `AacFlStateMachine NewSubStateMachine(string name)`💡<br/>
Create a new state machine, initially positioned below the last generated state of this layer.<br/>
🔺 If the name is already used, a number will be appended at the end.

- `AacFlNewTransitionContinuation Restarts()`💡<br/>
Creates a new transition of the entire state machine node to itself, which is evaluated after the state machine commits to an exit transitions.

- `AacFlNewTransitionContinuation Exits()`💡<br/>
Create a transition from this state machine node to the exit.
  

## No Animator (AacFlNoAnimator)💡

:::warning
You should use this class if you are creating BlendTree assets without any animator controllers to back it.

Otherwise, it is strongly recommended to obtain animator parameter objects directly from the [layer objects](#create-parameters) instead of using NoAnimator(), as the use of NoAnimator() will not result in the registration of any parameters inside the animator controller.
:::

- `AacFlFloatParameter FloatParameter(string parameterName)`💡<br/>
Create a Float parameter, for use without a backing animator.

- `AacFlIntParameter IntParameter(string parameterName)`💡<br/>
Create an Int parameter, for use without a backing animator.

- `AacFlBoolParameter BoolParameter(string parameterName)`💡<br/>
Create a Bool parameter, for use without a backing animator.

- `AacFlNoAnimator OverrideValue(AacFlFloatParameter toBeForced, float value)`💡<br/>
Stores the Float value of `toBeForced` parameter to `value`, which will be used in the CopyParametersAndOverridesTo() function.

- `AacFlNoAnimator OverrideValue(AacFlIntParameter toBeForced, int value)`💡<br/>
Stores the Int value of `toBeForced` parameter to `value`, which will be used in the CopyParametersAndOverridesTo() function.

- `AacFlNoAnimator OverrideValue(AacFlBoolParameter toBeForced, bool value)`💡<br/>
Stores the Bool value of `toBeForced` parameter to `value`, which will be used in the CopyParametersAndOverridesTo() function.

- `AacFlNoAnimator CopyParametersAndOverridesTo(AacFlLayer otherLayer)`💡<br/>
Copy all created parameters to the other layer, and overrides it with a value if a value was stored.

## State (AacFlState)

- `AnimatorState State`<br/>
Expose the underlying AnimatorState object.


### Graph Positioning

- `AacFlState LeftOf(AacFlState otherState)`<br/>
Move the node the left of the other node in the graph.

- `AacFlState RightOf(AacFlState otherState)`<br/>
Move the node the right of the other node in the graph.

- `AacFlState Over(AacFlState otherState)`<br/>
Move the node to be over the other node in the graph.

- `AacFlState Under(AacFlState otherState)`<br/>
Move the node to be under the other node in the graph.

- `AacFlState LeftOf()`<br/>
Move the node to the left of the last created node of the state machine this belongs to in the graph.

- `AacFlState RightOf()`<br/>
Move the node to the right of the last created node of the state machine this belongs to in the graph.

- `AacFlState Over()`<br/>
Move the node to be over the last created node of the state machine this belongs to in the graph.

- `AacFlState Under()`<br/>
Move the node to be under the last created node of the state machine this belongs to in the graph.

- `At(int x, int y)`<br/>
Move the node to be at a specific position in grid units, where x positive goes right, and y positive goes down.

- `AacFlState Shift(AacFlState otherState, int shiftX, int shiftY)`<br/>
Move the state to be shifted next to the other state in the graph, in grid units. shiftX positive goes right, shiftY positive goes down.

- `AacFlState Shift(Vector3 otherPosition, int shiftX, int shiftY)`<br/>
Given another position in non-grid units, move the state to be shifted next to that position, in grid units. shiftX positive goes right, shiftY positive goes down.

### Paths

- `string ResolveRelativePath(Transform item)`<br/>
Resolve the path of an item relative to the AnimatorRoot.

### Attributes


- `AacFlState WithAnimation(Motion clip)`<br/>
Set a specific raw Motion for the state. This could be a blend tree.

- `AacFlState WithAnimation(AacFlClip clip)`<br/>
Set a specific clip for the state. See `(AacFlBase).NewClip()` and similar.

- `AacFlState WithAnimation(AacFlBlendTree clip)`💡<br/>
Set a specific blend tree for the state. See `(AacFlBase).NewBlendTree()` and similar.

- `AacFlState MotionTime(AacFlFloatParameter floatParam)`<br/>
Set the Motion Time to a parameter. This was formerly known as Normalized Time.

- `AacFlState WithCycleOffset(AacFlFloatParameter floatParam)`<br/>
Set the Cycle Offset to a parameter.

- `AacFlState WithCycleOffsetSetTo(float cycleOffset)`<br/>
Set the Cycle Offset to a specific value.

- `AacFlState WithSpeed(AacFlFloatParameter parameter)`<br/>
Set the Speed to a parameter.

- `AacFlState WithSpeedSetTo(float speed)`<br/>
Set the Speed to a specific value.

- `AacFlState WithWriteDefaultsSetTo(bool shouldWriteDefaults)`<br/>
Set Write Defaults. If you need to do this to many states, consider changing the AacConfiguration DefaultsProvider when creating the AnimatorAsCode instance.


### Transitions


- `AacFlTransition TransitionsTo(AacFlState destination)`<br/>
Create a new transition from this state to the `destination` state.

- `AacFlTransition TransitionsTo(AacFlStateMachine destination)`<br/>
Create a new transition from this state to the `destination` state machine.

- `AacFlTransition TransitionsFromAny()`<br/>
Create a new transition from Any to this state.

- `AacFlEntryTransition TransitionsFromEntry()`<br/>
Create a new transition from Entry to this state. Note that the first created state is the default state, so generally this function does not need to be invoked onto the first created state.<br/>
Calling this function will not define this state to be the default state.

- `AacFlState AutomaticallyMovesTo(AacFlState destination)`<br/>
Create a transition with no exit time to the `destination` state.<br/>
Calling this function does not return the transition.

- `AacFlState AutomaticallyMovesTo(AacFlStateMachine destination)`<br/>
Create a transition with no exit time to the `destination` state machine.<br/>
Calling this function does not return the transition.

- `AacFlTransition Exits()`<br/>
Create a transition from this state to the exit.


### State behaviours

:::info
See functions specific to [VRChat](./vrchat#state-aacflstate).
:::


## Clip (AacFlClip)


- `AnimationClip Clip;`  <br/>
Expose the underlying Clip object.


### Attributes


- `AacFlClip Looping()`<br/>
Set the clip to be looping.

- `AacFlClip NonLooping()`<br/>
Set the clip to be non-looping.


### Single-frame Animations


- `AacFlClip Toggling(GameObject[] gameObjectsWithNulls, bool value)`<br/>
Enable or disable GameObjects. This lasts one frame. The array can safely contain null values.

- `AacFlClip BlendShape(SkinnedMeshRenderer renderer, string blendShapeName, float value)`<br/>
Change a blendShape of a skinned mesh. This lasts one frame.

- `AacFlClip BlendShape(SkinnedMeshRenderer[] rendererWithNulls, string blendShapeName, float value)`<br/>
Change a blendShape of multiple skinned meshes. This lasts one frame. The array can safely contain null values.

- `AacFlClip Positioning(GameObject[] gameObjectsWithNulls, Vector3 localPosition)`💡<br/>
Change the position of a GameObject in local space. This lasts one frame. This lasts one frame. The array can safely contain null values. // FIXME: This is weird, this should be a Transform array, and also this needs a single-object overload.

- `AacFlClip RotatingUsingEulerInterpolation(GameObject[] gameObjectsWithNulls, Vector3 localEulerAngles)`💡<br/>
Change the rotation of GameObjects in local space, with Euler interpolation. This lasts one frame. The array can safely contain null values. // FIXME: This is weird, this should be a Transform array, and also this needs a single-object overload.

- `AacFlClip RotatingUsingQuaternionInterpolation(GameObject[] gameObjectsWithNulls, Quaternion localQuaternionAngles)`💡<br/>
  Change the rotation of GameObjects in local space, with Quaternion interpolation. This lasts one frame. The array can safely contain null values. // FIXME: This is weird, this should be a Transform array, and also this needs a single-object overload.

- `AacFlClip Scaling(GameObject[] gameObjectsWithNulls, Vector3 scale)`<br/>
Change the local scale of GameObjects. This lasts one frame. The array can safely contain null values. // FIXME: This is weird, this should be a Transform array, and also this needs a single-object overload.

- `AacFlClip Toggling(GameObject gameObject, bool value)`<br/>
 Enable or disable a GameObject. This lasts one frame.

- `AacFlClip TogglingComponent(Component[] componentsWithNulls, bool value)`<br/>
Toggle several components. This lasts one frame. The runtime type of each individual component will be used. The array can safely contain null values.

- `AacFlClip TogglingComponent(Component component, bool value)`<br/>
Toggle a component. This lasts one frame. The runtime type of the component will be used.

- `AacFlClip SwappingMaterial(Renderer renderer, int slot, Material material)`<br/>
Swap a material of a Renderer on the specified slot (indexed at 0). This lasts one frame.

- `AacFlClip SwappingMaterial(ParticleSystem particleSystem, int slot, Material material)`<br/>
Swap a material of a Particle System on the specified slot (indexed at 0). This lasts one frame. This effectively takes the ParticleSystemRenderer of the component.


### Multi-frame Animations💡

- `AacFlClip BlendShape(SkinnedMeshRenderer renderer, string blendShapeName, AnimationCurve animationCurve)`💡<br/>
Change a blendShape of a skinned mesh, with an animation curve.

- `AacFlClip BlendShape(SkinnedMeshRenderer[] rendererWithNulls, string blendShapeName, AnimationCurve animationCurve)`💡<br/>
Change a blendShape of multiple skinned meshes, with an animation curve. The array can safely contain null values.


### Clip Editing


- `AacFlClip Animating(Action<AacFlEditClip> action)`<br/>
Start editing the clip with a lambda expression.


## Clip editing (AacFlEditClip)

:::tip
Consider using [Property Finder](../../property-finder) to locate the animatable properties that you are interested in.

![property-finder-aac.png](./img/property-finder-aac.png)
:::

- `AnimationClip Clip;`  <br/>
Expose the underlying Clip object.


- `AacFlSettingCurve Animates(string path, Type type, string propertyName)`<br/>
Animates a path the traditional way.

- `AacFlSettingCurve Animates(Transform transform, Type type, string propertyName)`<br/>
Animates an object in the hierarchy relative to the animator root, the traditional way.

- `AacFlSettingCurve Animates(GameObject gameObject)`<br/>
Animates the active property of a GameObject, toggling it.

- `AacFlSettingCurve Animates(Component anyComponent, string property)`<br/>
Animates the enabled property of a component, toggling it. The runtime type of the component will be used.

- `AacFlSettingCurve Animates(Component[] anyComponents, string property)`<br/>
Animates the enabled property of several components, toggling them. The runtime type of the component will be used. // FIXME: Safety is not provived on nulls. It should probably be, for convenience.

- `AacFlSettingCurve AnimatesAnimator(AacFlParameter floatParameter)`<br/>
Animates a Float parameter of the animator (may sometimes be referred to as an Animated Animator Parameter, or AAP).

- `AacFlSettingCurveColor AnimatesColor(Component anyComponent, string property)`<br/>
Animates a color property of a component. The runtime type of the component will be used.

- `AacFlSettingCurveColor AnimatesColor(Component[] anyComponents, string property)`<br/>
Animates a color property of several components. The runtime type of the component will be used. // FIXME: Safety is not provived on nulls. It should probably be, for convenience.

- `AacFlSettingCurveColor AnimatesHDRColor(Component anyComponent, string property)`💡<br/>
  Animates a HDR color property of a component (uses XYZW instead of RGBA). The runtime type of the component will be used. // FIXME: this needs multi-component, with safety

- `AacFlSettingCurveObjectReference AnimatesObjectReference(Component anyComponent, string property)`💡<br/>
  Animates an object reference of a component. The runtime type of the component will be used. // FIXME: this needs multi-component, with safety

- `EditorCurveBinding BindingFromComponent(Component anyComponent, string propertyName)`<br/>
Returns an EditorCurveBinding of a component, relative to the animator root. The runtime type of the component will be used. This is meant to be used in conjunction with traditional animation APIs.


### Curve of type Float (AacFlSettingCurve)

- `void WithOneFrame(float desiredValue)`<br/>
Define the curve to be exactly one frame by defining two constant keyframes, usually lasting 1/60th of a second, with the desired value.

- `void WithFixedSeconds(float seconds, float desiredValue)`<br/>
Define the curve to last a specific amount of seconds by defining two constant keyframes, with the desired value.

- `void WithSecondsUnit(Action<AacFlSettingKeyframes> action)`<br/>
Start defining the keyframes with a lambda expression, expressing the unit to be in seconds.

- `void WithFrameCountUnit(Action<AacFlSettingKeyframes> action)`<br/>
Start defining the keyframes with a lambda expression, expressing the unit in frames.

- `void WithUnit(AacFlUnit unit, Action<AacFlSettingKeyframes> action)`<br/>
Start defining the keyframes with a lambda expression, expressing the unit.


### Curve of type Color (AacFlSettingCurveColor)

- `void WithOneFrame(Color desiredValue)`<br/>
Define the curve to be exactly one frame by defining two constant keyframes, usually lasting 1/60th of a second, with the desired color value.


### Curve of type ObjectReference (AacFlSettingCurveObjectReference)💡

- `void WithOneFrame(Object objectReference)`💡<br/>
  Define the curve to be exactly one frame by defining two constant keyframes, usually lasting 1/60th of a second, with the desired object reference value.


### Keyframes of type Float (AacFlSettingKeyframes)

- `AacFlSettingKeyframes Easing(float timeInUnit, float value)`<br/>
Create a curved spline keyframe. The unit is defined by the function that invokes this lambda expression.

- `AacFlSettingKeyframes Linear(float timeInUnit, float value)`<br/>
Create a linear keyframe. The unit is defined by the function that invokes this lambda expression.

- `AacFlSettingKeyframes Constant(float timeInUnit, float value)`<br/>
Create a constant keyframe. The unit is defined by the function that invokes this lambda expression.


### Keyframes of type Color (AacFlSettingKeyframesColor)

- `AacFlSettingKeyframesColor Easing(int frame, Color value)`<br/>
Create a curved spline keyframe. The unit is defined by the function that invokes this lambda expression.

- `AacFlSettingKeyframesColor Linear(float frame, Color value)`<br/>
Create a linear keyframe. The unit is defined by the function that invokes this lambda expression.

- `AacFlSettingKeyframesColor Constant(int frame, Color value)`<br/>
Create a constant keyframe. The unit is defined by the function that invokes this lambda expression.


## Blend Trees (AacFlBlendTree)💡

- `BlendTree BlendTree;`💡<br/>
Exposes the underlying Unity BlendTree asset.

### Initialization (AacFlNonInitializedBlendTree : AacFlBlendTree)💡

- `AacFlBlendTree2D FreeformCartesian2D(AacFlFloatParameter parameterX, AacFlFloatParameter parameterY)`💡<br/>
Define this BlendTree as being FreeformCartesian2D.

- `AacFlBlendTree2D FreeformDirectional2D(AacFlFloatParameter parameterX, AacFlFloatParameter parameterY)`💡<br/>
Define this BlendTree as being FreeformDirectional2D.

- `AacFlBlendTree2D SimpleDirectional2D(AacFlFloatParameter parameterX, AacFlFloatParameter parameterY)`💡<br/>
Define this BlendTree as being SimpleDirectional2D.

- `AacFlBlendTree1D Simple1D(AacFlFloatParameter parameter)`💡<br/>
Define this BlendTree as being Simple1D.

- `AacFlBlendTreeDirect Direct()`💡<br/>
Define this BlendTree as being Direct.

### 2D Blend Tree (AacFlBlendTree2D : AacFlBlendTree)💡

- `AacFlBlendTree2D WithAnimation(AacFlBlendTree blendTree, Vector2 pos, Action<AacFlBlendTreeChildMotion> furtherDefiningChild = null)`💡<br/>
Add a BlendTree in the specified coordinates. The last parameter overload is optional: by default, the timeScale is 1, cycle offset is 0, mirror is false.

- `AacFlBlendTree2D WithAnimation(AacFlBlendTree blendTree, float x, float y, Action<AacFlBlendTreeChildMotion> furtherDefiningChild = null)`💡<br/>
Add a BlendTree in the specified `x` and `y` coordinates. The last parameter overload is optional: by default, the timeScale is 1, cycle offset is 0, mirror is false.

- `AacFlBlendTree2D WithAnimation(AacFlClip clip, Vector2 pos, Action<AacFlBlendTreeChildMotion> furtherDefiningChild = null)`💡<br/>
Add a Clip in the specified coordinates. The last parameter overload is optional: by default, the timeScale is 1, cycle offset is 0, mirror is false.

- `AacFlBlendTree2D WithAnimation(AacFlClip clip, float x, float y, Action<AacFlBlendTreeChildMotion> furtherDefiningChild = null)`💡<br/>
Add a Clip in the specified `x` and `y` coordinates. The last parameter overload is optional: by default, the timeScale is 1, cycle offset is 0, mirror is false.

- `AacFlBlendTree2D WithAnimation(Motion motion, Vector2 pos, Action<AacFlBlendTreeChildMotion> furtherDefiningChild = null)`💡<br/>
Add a raw motion in the specified coordinates. The last parameter overload is optional: by default, the timeScale is 1, cycle offset is 0, mirror is false.

- `AacFlBlendTree2D WithAnimation(Motion motion, float x, float y, Action<AacFlBlendTreeChildMotion> furtherDefiningChild = null)`💡<br/>
Add a raw motion in the specified `x` and `y` coordinates. The last parameter overload is optional: by default, the timeScale is 1, cycle offset is 0, mirror is false.

### 1D Blend Tree (AacFlBlendTree1D : AacFlBlendTree)💡

- `AacFlBlendTree1D WithAnimation(AacFlBlendTree blendTree, float threshold, Action<AacFlBlendTreeChildMotion> furtherDefiningChild = null)`💡<br/>
Add a BlendTree in the specified threshold. The last parameter overload is optional: by default, the timeScale is 1, cycle offset is 0, mirror is false.

- `AacFlBlendTree1D WithAnimation(AacFlClip clip, float threshold, Action<AacFlBlendTreeChildMotion> furtherDefiningChild = null)`💡<br/>
Add a Clip in the specified threshold. The last parameter overload is optional: by default, the timeScale is 1, cycle offset is 0, mirror is false.

- `AacFlBlendTree1D WithAnimation(Motion motion, float threshold, Action<AacFlBlendTreeChildMotion> furtherDefiningChild = null)`💡<br/>
Add a raw motion in the specified threshold. The last parameter overload is optional: by default, the timeScale is 1, cycle offset is 0, mirror is false.

### Direct Blend Tree (AacFlBlendTreeDirect : AacFlBlendTree)💡

- `AacFlBlendTreeDirect WithAnimation(AacFlBlendTree blendTree, AacFlFloatParameter parameter, Action<AacFlBlendTreeChildMotion> furtherDefiningChild = null)`💡<br/>
Add a BlendTree driven by the specified parameter. The last parameter overload is optional: by default, the timeScale is 1, cycle offset is 0, mirror is false.

- `AacFlBlendTreeDirect WithAnimation(AacFlClip clip, AacFlFloatParameter parameter, Action<AacFlBlendTreeChildMotion> furtherDefiningChild = null)`💡<br/>
Add a Clip driven by the specified parameter. The last parameter overload is optional: by default, the timeScale is 1, cycle offset is 0, mirror is false.

- `AacFlBlendTreeDirect WithAnimation(Motion motion, AacFlFloatParameter parameter, Action<AacFlBlendTreeChildMotion> furtherDefiningChild = null)`💡<br/>
Add a raw motion driven by the specified parameter. The last parameter overload is optional: by default, the timeScale is 1, cycle offset is 0, mirror is false.

### Further define a blend tree child (AacFlBlendTreeChildMotion)💡

- `AacFlBlendTreeChildMotion WithTimeScaleSetTo(float timeScale)`💡<br/>
Set the time scale. The time scale value is 1 by default.

- `AacFlBlendTreeChildMotion WithMirrorSetTo(bool mirror)`💡<br/>
Set the mirror option. The mirror option value is false by default.

- `AacFlBlendTreeChildMotion WithCycleOffsetSetTo(float cycleOffset)`💡<br/>
Set the cycle offset. The cycle offset value is 0 by default.


## Transitions

`AnimatorTransitionBase Transition;`  <br/>
Expose the underlying Transition object (from AacFlNewTransitionContinuation)

### Attributes (AacFlTransition : AacFlNewTransitionContinuation)

- `AacFlTransition WithSourceInterruption()`<br/>
Set interruption source to be Source. // FIXME: Clunky interface.

- `AacFlTransition WithTransitionDurationSeconds(float transitionDuration)`<br/>
Set a fixed transition duration in seconds.

- `AacFlTransition WithTransitionDurationPercent(float transitionDurationNormalized)`<br/>
Set a non-fixed transition duration in a normalized amount. // FIXME: Percent is a misnomer.

- `AacFlTransition WithOrderedInterruption()`<br/>
Enable ordered interruption.

- `AacFlTransition WithNoOrderedInterruption()`<br/>
Disable ordered interruption.

- `AacFlTransition WithTransitionToSelf()`<br/>
Enable transition to self.

- `AacFlTransition WithNoTransitionToSelf()`<br/>
Disable transition to self.

- `AacFlTransition AfterAnimationFinishes()`<br/>
Set an exit time at 1, where the animation finishes.

- `AacFlTransition AfterAnimationIsAtLeastAtPercent(float exitTimeNormalized)`<br/>
Set the exit time at a specific normalized amount. // FIXME: Percent is a misnomer.


### Chaining conditions


#### Starting Conditions (AacFlNewTransitionContinuation) & (AacFlEntryTransition : AacFlNewTransitionContinuation)


- `AacFlTransitionContinuation When(IAacFlCondition action)`<br/>
Start defining conditions.

- `AacFlMultiTransitionContinuation When(IAacFlOrCondition actionsWithOr)`<br/>
Start defining conditions from a condition which may generate multiple transitions. Any And operator subsequently invoked as a result will apply to all transitions that would be generated by that condition, until the Or operator, if any.

- `AacFlTransitionContinuation When(Action<AacFlTransitionContinuationWithoutOr> actionsWithoutOr)`<br/>
Start defining conditions using a lambda expression that cannot contain Or operators.

- `AacFlTransitionContinuationOnlyOr When(Action<AacFlNewTransitionContinuation> actionsWithOr)`<br/>
Start defining conditions using a lambda expression that can contain Or operators, however the next operator, if any, must be Or.

- `AacFlTransitionContinuation WhenConditions()`<br/>
Provides an handle to start defining conditions using the And operator, for use in loops. The Or operator may be invoked at any point.


#### Single-transition continuation (AacFlTransitionContinuation : AacFlTransitionContinuationAbstractWithOr)

- `AacFlTransitionContinuation And(IAacFlCondition action)`<br/>
Add another condition to this transition. A transition requires all of its conditions to pass.

- `AacFlTransitionContinuation And(Action<AacFlTransitionContinuationWithoutOr> actionsWithoutOr)`<br/>
Add another condition to this transition. A transition requires all of its conditions to pass.


#### Multi-transition continuation (AacFlMultiTransitionContinuation : AacFlTransitionContinuationAbstractWithOr)

- `AacFlMultiTransitionContinuation And(IAacFlCondition action)`<br/>
Add another condition to all of the transitions generated by the previous conditions since the last When operator invocation. A transition requires all of its conditions to pass.

- `AacFlMultiTransitionContinuation And(Action<AacFlTransitionContinuationWithoutOr> actionsWithoutOr)`<br/>
Add another condition to all of the transitions generated by the previous conditions since the last When operator invocation. A transition requires all of its conditions to pass.


#### Continuation (AacFlTransitionContinuationAbstractWithOr)

- `AacFlNewTransitionContinuation Or()`<br/>
Creates a single new transition, copying the attributes of the one this was invoked on. This has no conditions yet, so invoking a When operator immediately after this is expected here.


#### Continuation wihtout Or (AacFlTransitionContinuationWithoutOr)

- `AacFlTransitionContinuationWithoutOr And(IAacFlCondition action)`<br/>
Add another condition to this transition. A transition requires all of its conditions to pass.

- `AacFlTransitionContinuationWithoutOr AndWhenever(Action<AacFlTransitionContinuationWithoutOr> action)`<br/>
Add additional conditions using a lambda expression that cannot contain Or operators. A transition requires all of its conditions to pass.


## Conditions (IAacFlCondition, IAacFlOrCondition)

#### AacFlFloatParameter

- `IsGreaterThan(float other)`<br/>
Float is greater than `other`.<br/>
When used on some platforms, you need to be careful as the remote value may not be the same as the local value.

- `IsLessThan(float other)`<br/>
Float is less than `other`.<br/>
When used on some platforms, you need to be careful as the remote value may not be the same as the local value.


#### AacFlIntParameter

- `IsGreaterThan(int other)`<br/>
Int is strictly greater than `other`

- `IsLessThan(int other)`<br/>
Int is strictly less than `other`

- `IsEqualTo(int other)`<br/>
Int is equal to `other`

- `IsNotEqualTo(int other)`<br/>
Int is not equal to `other`


#### AacFlEnumIntParameter\<TEnum> where TEnum : Enum

- `IsEqualTo(TEnum other)`<br/>
Int is not equal to `(int)other`

- `IsNotEqualTo(TEnum other)`<br/>
Int is equal to `(int)other`

- `IsGreaterThan(int other)`<br/>
(inherited from AacFlIntParameter) Int is strictly greater than `other`

- `IsLessThan(int other)`<br/>
(inherited from AacFlIntParameter) Int is strictly less than `other`

- `IsEqualTo(int other)`<br/>
(inherited from AacFlIntParameter)

- `IsNotEqualTo(int other)`<br/>
(inherited from AacFlIntParameter)


#### AacFlBoolParameter

- `IsTrue()`<br/>
Bool is true

- `IsFalse()`<br/>
Bool is false

- `IsEqualTo(bool other)`<br/>
Bool is equal to `other`

- `IsNotEqualTo(bool other)`<br/>
Bool is not equal to `other`


#### AacFlFloatParameterGroup

- `AreGreaterThan(float other)`<br/>
All of the Floats are greater than `other`.<br/>
When used on some platforms, you need to be careful as the remote value may not be the same as the local value.

- `AreLessThan(float other)`<br/>
All of the Floats are less than `other`.<br/>
When used on some platforms, you need to be careful as the remote value may not be the same as the local value.


#### AacFlIntParameterGroup

- `AreGreaterThan(float other)`<br/>
All of the Ints are strictly greater than `other`

- `AreLessThan(float other)`<br/>
All of the Ints are strictly less than `other`

- `AreEqualTo(float other)`<br/>
All of the Ints are equal to `other`

- `AreNotEqualTo(float other)`<br/>
All of the Ints are not equal to `other`


#### AacFlBoolParameterGroup

- `AreTrue()`<br/>
All of the Bools are true

- `AreFalse()`<br/>
All of the Bools are false

- `AreEqualTo(bool other)`<br/>
All of the Bools are equal to `other`

- `AreFalseExcept(AacFlBoolParameter exceptThisMustBeTrue)`<br/>
All the Bools except `exceptThisMustBeTrue` are false, and the Bool of `exceptThisMustBeTrue` must be true.

- `AreFalseExcept(params AacFlBoolParameter[] exceptTheseMustBeTrue)`<br/>
All the Bools except those in `exceptTheseMustBeTrue` are false, and all of the Bools in `exceptTheseMustBeTrue` must be true.

- `AreFalseExcept(AacFlBoolParameterGroup exceptTheseMustBeTrue)`<br/>
All the Bools except those in `exceptTheseMustBeTrue` are false, and all of the Bools in `exceptTheseMustBeTrue` must be true.

- `AreTrueExcept(AacFlBoolParameter exceptThisMustBeFalse)`<br/>
All the Bools except `exceptThisMustBeTrue` are true, and the Bool of `exceptThisMustBeTrue` must be false.

- `AreTrueExcept(params AacFlBoolParameter[] exceptTheseMustBeFalse)`<br/>
All the Bools except those in `exceptTheseMustBeTrue` are true, and all of the Bools in `exceptTheseMustBeTrue` must be false.

- `AreTrueExcept(AacFlBoolParameterGroup exceptTheseMustBeFalse)`<br/>
All the Bools except those in `exceptTheseMustBeTrue` are true, and all of the Bools in `exceptTheseMustBeTrue` must be false.

- `IsAnyTrue()` -> returns `IAacFlOrCondition`, can only be used inside `.When(...)`<br/>
Generates multiple transitions, verifying whether any Bool is true. This can only be used inside `.When(...)`

- `IsAnyFalse()` -> returns `IAacFlOrCondition`, can only be used inside `.When(...)`<br/>
Generates multiple transitions, verifying whether any Bool is false. This can only be used inside `.When(...)`
