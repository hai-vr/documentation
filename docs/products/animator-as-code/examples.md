---
sidebar_position: 2
---

# Examples

:::danger
This is the work-in-progress documentation for Animator As Code **V1**, which has not yet been released. The last public version of Animator As Code is V0.
:::

:::tip
These examples below are using a **destructive workflow**.

If you are familiar with non-destructive workflow tools such as **Modular Avatar** or **VRCFury**, you should probably see the **[non-destructive workflow examples](./examples-maac)**.
:::

## #0 Toggle a GameObject

This example shows:

- Creating a FX layer
- Creating states
- Creating animations
- Declaring a Bool parameter
- Creating transitions with conditions
-
![sx_2022-02-25_00-47-15_dDwKV4bsE2](https://user-images.githubusercontent.com/60819407/155912947-7e5ac988-71f7-44cd-b526-2e245faffcd9.png)

```csharp
public class GenExample0_ToggleGo : MonoBehaviour
{
    public VRCAvatarDescriptor avatar;
    public AnimatorController assetContainer;
    public string assetKey;
    public GameObject item;
}

private void Create()
{
    var my = (GenExample0_ToggleGo) target;
    // The avatar is used here:
    // - to find the FX playable layer animator, where a new layer will be created.
    // - to resolve the relative animation path to the item.
    // The generated animation files are stored in the asset container.
    var aac = AacExample.AnimatorAsCode("Example 0", my.avatar, my.assetContainer, my.assetKey, AacExample.Options().WriteDefaultsOff());

    // Create a layer in the FX animator.
    // Additional layers can be created in the FX animator (see later in the manual).
    var fx = aac.CreateMainFxLayer();

    // The first created state is the default one connected to the "Entry" node.
    // States are automatically placed on the grid (see later in the manual).
    var hidden = fx.NewState("Hidden")
        // Animation assets are generated as sub-assets of the asset container.
        // The animation path to my.skinnedMesh is relative to my.avatar
        .WithAnimation(aac.NewClip().Toggling(my.item, false));
    var shown = fx.NewState("Shown")
        .WithAnimation(aac.NewClip().Toggling(my.item, true));

    // Creates a Bool parameter in the FX layer.
    // Parameters are added to the Animator if a parameter with the same name
    // does not exist yet.
    var itemParam = fx.BoolParameter("EnableItem");

    // Transitions are created with a set of default values
    // That can be changed in the Generator settings (see later in the manual).
    hidden.TransitionsTo(shown).When(itemParam.IsTrue());
    shown.TransitionsTo(hidden).When(itemParam.IsFalse());
}
```

## #1 Toggle a SkinnedMeshRenderer with two conditions

This example shows:

- Simple toggle animations
- Groups of Bool parameters
- Simple transitions

![sx_2022-02-25_00-39-05_DbvwrouqFc](https://user-images.githubusercontent.com/60819407/155912964-ffdfe363-6c1f-41d4-b474-9f18e1749c4d.png)

```csharp
public class GenExample1_ToggleSmr : MonoBehaviour
{
    public VRCAvatarDescriptor avatar;
    public AnimatorController assetContainer;
    public string assetKey;
    public SkinnedMeshRenderer skinnedMesh;
}

private void Create()
{
    var my = (GenExample1_ToggleSmr) target;
    var aac = AacExample.AnimatorAsCode(SystemName, my.avatar, my.assetContainer, my.assetKey);
    
    var fx = aac.CreateMainFxLayer();
    var hidden = fx.NewState("Hidden")
        // The runtime type of my.skinnedMesh is used within the animation.
        // In this case, the "SkinnedMeshRenderer" component is disabled.
        .WithAnimation(aac.NewClip().TogglingComponent(my.skinnedMesh, false));
    var shown = fx.NewState("Shown")
        .WithAnimation(aac.NewClip().TogglingComponent(my.skinnedMesh, true));
    
    // This creates two Bool parameters in the animator.
    // The resulting value can be used in conditions.
    var accessoriesParams = fx.BoolParameters("EnableAccessories", "AccessoryThing");
    
    // The following line creates one transition.
    // The conditions are "EnableAccessories is true" and "AccessoryThing is true"
    hidden.TransitionsTo(shown).When(accessoriesParams.AreTrue());
    
    // The following line creates two transitions:
    // - The first transition is "EnableAccessories is false"
    // - The second transition is "AccessoryThing is false"
    shown.TransitionsTo(hidden).When(accessoriesParams.IsAnyFalse());
}
```

## #2 Animate a SkinnedMesh with Motion time

This example shows:

- Describing animations with simplified keyframes
- Animating a state with Motion Time (formerly known as Normalized Time)

![sx_2022-02-25_01-25-53_2KNRPmra4o](https://user-images.githubusercontent.com/60819407/155912980-53ba1528-0872-4b65-a491-2e9442f48bae.png)


```csharp
public class GenExample2_Animate : MonoBehaviour
{
    public VRCAvatarDescriptor avatar;
    public AnimatorController assetContainer;
    public string assetKey;
    public SkinnedMeshRenderer wedgeMesh;
}

private void Create()
{
    var my = (GenExample2_Animate) target;
    var aac = AacExample.AnimatorAsCode(SystemName, my.avatar, my.assetContainer, my.assetKey);
    
    var fx = aac.CreateMainFxLayer();
    
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
        .MotionTime(fx.FloatParameter("WedgeAmount"));
}
```

## #3 Using Parameter Drivers

This example shows:

- Driving parameters using VRC Parameter Driver behavior
- VRChat Parameters
- Creating systems with multiple FX layers
- Complex transitions
- *Show code...*

    ```csharp
    public class GenExample3_Gesturing : MonoBehaviour
    {
        public VRCAvatarDescriptor avatar;
        public AnimatorController assetContainer;
        public string assetKey;
        public SkinnedMeshRenderer iconMesh;
    }
    
    private GenExample3_Gesturing my;
    private AacFlBase aac;
    
    private void Create()
    {
        my = (GenExample3_Gesturing) target;
        aac = AacExample.AnimatorAsCode(SystemName, my.avatar, my.assetContainer, my.assetKey);
        
        CreateMainLayer();
        CreateSupportingLayer();
    }
    
    private void CreateMainLayer()
    {
        var layer = aac.CreateMainFxLayer();
        
        var dirtyCheckParameter = layer.BoolParameter("AAC_INTERNAL_GesturingIcon_DirtyCheck");
        
        // ### Create states
        var lackOfChangeDetected = layer.NewState("Animate To NoChange")
            .WithAnimation(IconAppears());
        
        // By default, states have an animation that animates a dummy object for 1 frame.
        var noChange = layer.NewState("NoChange", 1, 0).RightOf();
        
        var changeDetected = layer.NewState("Animate To Changing").Under()
            .WithAnimation(IconDisappears());
        
        // This creates a clip that animates a dummy object for 1.5f seconds.
        var changing = layer.NewState("Changing", 0, 1).LeftOf()
            .WithAnimation(aac.DummyClipLasting(1.5f, AacFlUnit.Seconds));
        
        // When this state is entered, the parameter is driven to the value of false.
        var stillChanging = layer.NewState("Still Changing", 0, 2).Under()
            .Drives(dirtyCheckParameter, false);
        
        // ------
        
        // ### Create transitions
        lackOfChangeDetected.TransitionsTo(changeDetected).AfterAnimationIsAtLeastAtPercent(0.7f).When(dirtyCheckParameter.IsTrue());
        
        // The transition duration is 30% of the animation duration.
        lackOfChangeDetected.TransitionsTo(noChange).AfterAnimationFinishes().WithTransitionDurationPercent(0.3f);
        
        noChange.TransitionsTo(changeDetected).When(dirtyCheckParameter.IsTrue());
        
        // By using AfterAnimationFinishes, the transition will trigger after the animation
        // for the icon appearing finishes.
        changeDetected.TransitionsTo(changing).AfterAnimationFinishes();
        
        changing.TransitionsTo(stillChanging).When(dirtyCheckParameter.IsTrue());
        // By using AfterAnimationFinishes, the transition will trigger after 1.5 seconds,
        // which is the length of the animation in Changing.
        changing.TransitionsTo(lackOfChangeDetected).AfterAnimationFinishes();
        
        // The transition will immediately happen upon entering, by using Exit time set to 0.
        stillChanging.AutomaticallyMovesTo(changing);
    }
    
    private void CreateSupportingLayer()
    {
        // Create an additional FX layer.
        var layer = aac.CreateSupportingFxLayer("Detection");
        var reevaluating = layer.NewState("Reevaluating", -1, 0);
        
        foreach (var left in Enumerable.Range(0, 8))
        {
            foreach (var right in Enumerable.Range(0, 8))
            {
                var state = layer.NewState($"Gesture {left} {right}", left, right)
                    // When this state is entered, the parameter is driven to the value of true.
                    .Drives(layer.BoolParameter("AAC_INTERNAL_GesturingIcon_DirtyCheck"), true);
        
                reevaluating.TransitionsTo(state)
                    // Use ".Av3" to access VRChat standard parameters.
                    // Accessing these parameters will create the corresponding parameter in the animator.
                    .When(layer.Av3().GestureLeft.IsEqualTo(left))
                    .And(layer.Av3().GestureRight.IsEqualTo(right));
                state.TransitionsTo(reevaluating)
                    .When(layer.Av3().GestureLeft.IsNotEqualTo(left))
                    .Or()
                    .When(layer.Av3().GestureRight.IsNotEqualTo(right));
            }
        }
    }
    
    private AacFlClip IconAppears()
    {
        return aac.NewClip().Animating(clip =>
        {
            clip.Animates(my.iconMesh, "blendShape.Wedge")
                .WithFrameCountUnit(keyframes => keyframes.Easing(0, 0f).Easing(10, 100f));
        });
    }
    
    private AacFlClip IconDisappears()
    {
        return aac.NewClip().Animating(clip =>
        {
            clip.Animates(my.iconMesh, "blendShape.Wedge")
                .WithFrameCountUnit(keyframes => keyframes.Easing(0f, 100f).Easing(10, 0f));
        });
    }
    ```