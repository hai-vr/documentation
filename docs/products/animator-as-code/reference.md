---
sidebar_position: 6
---

# Reference manual

:::danger
This is the work-in-progress documentation for Animator As Code **V1**, which has not yet been released. The last public version of Animator As Code is V0.
:::

## Create states

Using your layer, you may now create states. Your state will be configured with defaults based on your AAC configuration, most notably, the Write Defaults setting.

By default, states have a dummy animation that lasts one frame (1/60th of a second).

It is intended to create the animation clip directly while declaring the state, this will be explained later on.

```csharp
var hidden = fx.NewState("Hidden")
    .WithAnimation(aac.NewClip().Toggling(my.item, false));
```

## Creating parameters for use within layers

Using your layer, you can create parameters.

The parameter will be added to the animator the layer belongs to.

If you need to reuse a parameter across multiple layers, you need to invoke it on all relevant layers.

*(Once done, you are not forced to reuse the resulting parameter instance on the same layer it was created from)*

```csharp

fx.NewState("Motion")
    // This creates a Float parameter on the FX layer.
    .MotionTime(fx.FloatParameter("WedgeAmount"))
    // ...
```

If a parameter with the same name already exists in the animator, it will not be created again.

*This is also true if the animator already has a parameter with the same name but with a different type, and no error will be raised.*

There are also dedicated functions to obtain Avatars 3.0 parameters, such as.

```csharp
var gestureLeftWeight = fx.Av3().GestureLeftWeight
```

## Forcing the value of parameters

In some rare cases you may wish to override the default value of animator parameters, for example in use for special conditions, for use in blend trees as a constant value.

Using your layer:

```csharp
fx.OverrideValue(fx.FloatParameter("SmoothingAmount"), 0.7f)
```

## Visually organize your states

By default, a newly created state will be visually placed under the previously created state.

For more control, states have `LeftOf`, `RightOf`, `Over`, `Under`, `Shift` operators, which let you move a state to be visually next to another state.

The value is in grid units.

![Untitled](https://user-images.githubusercontent.com/60819407/155912996-89369e2d-435d-4619-b5ee-3ac4b6f8827c.png)

```csharp
var init = fx.NewState("Init"); // This is the first state. By default it is at (0, 0)
var a = fx.NewState("A"); // This will be placed under Init.
var b = fx.NewState("B"); // This will be placed under A.
var c = fx.NewState("C").RightOf(a); // This will be placed right of A.
var d = fx.NewState("D"); // This will be placed under C.
var e = fx.NewState("E").RightOf(); // This will be placed right of D.
var alternate = fx.NewState("Alternate").Over(c); // This will be placed over C.

// This will be placed relative to Alternate: 2 blocks over, and 1 to the right.
var reset = fx.NewState("Reset").Shift(alternate, 1, -2);
```

## Create an animation

By default, states have a dummy animation that lasts one frame (1/60th of a second). If you want the state to play an animation of your choice, there is usually an invocation to the `.WithAnimation(...)` function:

```csharp
var hidden = fx.NewState("Hidden")
    .WithAnimation(aac.NewClip().Toggling(my.item, false));
```

The invocation uses AAC to create a new clip inside the asset container. You don’t need to specify a name for this clip, it is irrelevant.

Animations use object references instead of paths. They are converted to paths in the animation clip asset by resolving the relative path to the animator root of the AAC configuration.

Most of the functions lets you create single-frame constant animations.

For more complex animations, use the `.Animating(...)` function.

```csharp
fx.NewState("Motion")
    .WithAnimation(aac.NewClip().Animating(clip =>
    {
        clip.Animates(my.wedgeMesh, "blendShape.Wedge").WithFrameCountUnit(keyframes =>
            keyframes.Easing(0, 100f).Easing(28, 0).Easing(29, 0).Easing(30, 0).Easing(31, 0).Easing(32, 0).Easing(60, 100f)
        );
        clip.Animates(my.wedgeMesh, "material._Metallic").WithFrameCountUnit(keyframes =>
            keyframes.Constant(0, 1f).Constant(28, 0).Constant(60, 0)
        );
    }))
```

## Create transitions and define conditions

Using the states, you can create transitions between states. Your transition will be configured with defaults based on your AAC configuration, defined within the DefaultsProvider.

To create a transition from Any, Exit, or Entry, there are some functions in the states like `.TransitionsFromAny()` or `.Exits()`.

Start defining conditions for that transition using the `.When(...)` operator.

Parameters have functions that generate conditions once invoked.

```csharp
reevaluating.TransitionsTo(state)
    // Use ".Av3" to access VRChat standard parameters.
    // Accessing these parameters will create the corresponding parameter in the animator.
    .When(layer.Av3().GestureLeft.IsEqualTo(left))
    .And(layer.Av3().GestureRight.IsEqualTo(right));
state.TransitionsTo(reevaluating)
    .When(layer.Av3().GestureLeft.IsNotEqualTo(left))
    .Or()
    .When(layer.Av3().GestureRight.IsNotEqualTo(right));
```

## When(), And(), and Or() operators

In animator transitions, all conditions must be verified for the transition to occur; this is effectively a “AND” of all of the conditions (A && B && C).

This is done by using the `.And(...)` operator: `.When(A).And(B).And(C)`

To represent “OR”, new transitions need to be created; ((A && B && C) || (D && E)) results in:

- Transition 1: (A && B && C)
- Transition 2: (D && E)

This is done by using the `.Or(...)` operator: `.When(A).And(B).And(C).Or().When(D).And(E)`

From this limitation, conditions with nested OR cannot be expressed easily, such as:

- 🚫 (F && (G || H) && (J || K))

## Conditions that generate multiple transitions

Some conditions generate multiple transitions, such as `boolParameters.IsAnyFalse()`

In order to still let you express these expressions easily, the following applies:

- These conditions can only be used in a `.When(...)` operator, and not within a `.And(...)`
- If such a condition is used, calling `.And(...)` will apply the condition to all transitions generated by the `.When(...)` operator up until the next `Or(...)` operator if any exists.
    - For example:
      `.When(fx.BoolParameters(I, J).IsAnyFalse()).And(K.IsTrue())`
    - Is equivalent to:
      `.When(I.IsFalse()).And(K.IsTrue()).Or().When(J.IsFalse()).And(K.IsTrue())`

## Use the WhenConditions() operator to build in a `for` loop

The presence of the `.When(...)` operator can make it difficult to build conditions iteratively in a `for` loop.

For this purpose, use the `.WhenConditions()` operator. This will let you build conditions using the `.And(...)` operator.

```csharp
var conditions = state.TransitionsFromEntry().WhenConditions();
for (var i = 0; i < numberOfBits; i++)
{
   conditions.And(parameter[i].IsEqualTo(bitMask[i]));
}
```

## Create many-to-one transitions using a `foreach` loop

There is no facility to create multiple identical transitions from multiple states to another state.

Use a regular `foreach` loop to achieve this.

```csharp
foreach (var cancelWhenNotAllowed in new[] {auto, reverse, manual, custom, done})
{
    cancelWhenNotAllowed.TransitionsTo(idle).When(allowSystemParameter.IsFalse());
}
```
