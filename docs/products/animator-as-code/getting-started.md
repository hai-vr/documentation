---
sidebar_position: 2
---

# Getting started

:::danger
This is the work-in-progress documentation for Animator As Code **V1**, which has not yet been released. The last public version of Animator As Code is V0.
:::

## Initialize Animator As Code

After [installing Animator As Code](install.md), there are different ways to start depending on your project.

- Follow the [**Non-destructive Avatars**](#non-destructive) section:
  - if you are building a personal VRChat avatar and you want to create animators and animations in a non-destructive workflow (ideal for Modular Avatar, NDMF, and VRCFury users), or
  - if you are building a Unity Editor tool and you intend to redistribute the non-destructive generator code to other users.

- Follow the [**Barebones**](#barebones) section:
  - if you are building a VRChat avatar and you do not want to use a non-destructive workflow, or
  - if you are building a VRChat avatar prefab and you intend to distribute the animator controllers to others, or
  - if you are building a VRChat world, or
  - if you are building non-VRChat content.

### Non-destructive

When creating personal avatars, you are encouraged to use a non-destructive workflow.

We will use the same framework that Modular Avatar uses, which is NDMF. NDMF will execute the Plugin shown
below when the user enters Play Mode, or when the user builds the avatar.

This example shows a simple (non-optimized) toggle using state machines.
- To use that toggle, the user can add an ExampleToggle component in the avatar, and configure it.
- When entering Play mode or when building the avatar, the plugin will check if there is at least one ExampleToggle exists in the avatar.
- If so, it initializes an AnimatorAsCode object which will create assets inside NDMF's asset container.
- Then, it creates a new Animator Controller.
- Then, for each ExampleToggle component:
  - it creates a new layer,
  - it creates two states and their animation files to toggle the items,
  - it creates a bool parameter,
  - it creates transitions between those states, with the corresponding conditions.
- Finally, it creates a [Modular Avatar Merge Animator](https://modular-avatar.nadena.dev/docs/reference/merge-animator) component
  in order to register that new Animator Controller in the FX Animator. Modular Avatar will take the responsibility to merge the animator.

```csharp
#if UNITY_EDITOR
using AnimatorAsCode.V1;
using AnimatorAsCode.V1.ModularAvatar;
using MyNamespace;
using nadena.dev.ndmf;
using UnityEditor;
using UnityEngine;
using VRC.SDK3.Avatars.Components;
using VRC.SDKBase;

// This example uses NDMF. See https://github.com/bdunderscore/ndmf?tab=readme-ov-file#getting-started
[assembly: ExportsPlugin(typeof(ExampleTogglePlugin))]
namespace MyNamespace
{
    public class ExampleToggle : MonoBehaviour, IEditorOnly
    {
        // Your MonoBehaviour contains the parameters and scene object references,
        // which will be used to generate animations.
        public GameObject[] items;
        public string parameterName;
    }

    public class ExampleTogglePlugin : Plugin<ExampleTogglePlugin>
    {
        public override string QualifiedName => "dev.hai-vr.docs.animator-as-code.exampletoggle";
        public override string DisplayName => "Example Toggle";
        
        private const string SystemName = "ExampleToggle";
        private const bool UseWriteDefaults = true;

        protected override void Configure()
        {
            InPhase(BuildPhase.Generating).Run($"Generate {DisplayName}", Generate);
        }

        private void Generate(BuildContext ctx)
        {
            // Find all components of type ExampleToggle in this avatar.
            var components = ctx.AvatarRootTransform.GetComponentsInChildren<ExampleToggle>(true);
            if (components.Length == 0) return; // If there are none in the avatar, skip this entirely.

            // Initialize Animator As Code.
            var aac = AacV1.Create(new AacConfiguration
            {
                SystemName = SystemName,
                AnimatorRoot = ctx.AvatarRootTransform,
                DefaultValueRoot = ctx.AvatarRootTransform,
                AssetKey = GUID.Generate().ToString(),
                AssetContainer = ctx.AssetContainer,
                ContainerMode = AacConfiguration.Container.OnlyWhenPersistenceRequired,
                // States will be created with Write Defaults set to ON or OFF based on whether UseWriteDefaults is true or false.
                DefaultsProvider = new AacDefaultsProvider(UseWriteDefaults)
            });

            // Create a new animator controller.
            // This will be merged with the rest of the playable layer at the end of this function.
            var ctrl = aac.NewAnimatorController();
            
            for (var index = 0; index < components.Length; index++)
            {
                // Create a toggle for each found component.
                var toggle = components[index];
                
                // Create a new layer in that animator controller.
                var layer = ctrl.NewLayer($"Toggle_{index + 1}");

                // The first created state is the default one connected to the "Entry" node.
                var hidden = layer.NewState("Hidden")
                    // The animation path to toggle.items is relative to the animator root.
                    .WithAnimation(aac.NewClip().Toggling(toggle.items, false));
                var shown = layer.NewState("Shown")
                    .WithAnimation(aac.NewClip().Toggling(toggle.items, true));
                
                // Creates a Bool parameter in the animator.
                var itemParam = layer.BoolParameter(toggle.parameterName);
                
                // Creates transitions. By default, the transitions are already configured with our default values.
                hidden.TransitionsTo(shown).When(itemParam.IsTrue());
                shown.TransitionsTo(hidden).When(itemParam.IsFalse());
            }

            // Create a new object in the scene. We will add Modular Avatar components inside it.
            var modularAvatar = MaAc.Create(new GameObject(SystemName)
            {
                transform = { parent = ctx.AvatarRootTransform }
            });
            
            // By creating a Modular Avatar Merge Animator component,
            // our animator controller will be added to the avatar's FX layer.
            modularAvatar.NewMergeAnimator(ctrl.AnimatorController, VRCAvatarDescriptor.AnimLayerType.FX);
        }
    }
}
#endif
```

:::note
For the sake of this first example, this uses state machines to create a toggle, but this comes at a performance cost,
which isn't the state of the art for VRChat avatar animators.

Modern toggles generally use blend trees, this can be done in Animator As Code too.
:::

:::danger
This section is not complete yet.
:::

- TODO: Explain assetContainer and assetKey

### Barebones

:::danger
This section is not complete yet.
:::

The following shows the minimal code to use Animator As Code, if your project doesn't fall into the non-destructive Avatars category.

- TODO: Explain assetContainer and assetKey 

```csharp
GameObject[] items;

string systemName = "LayerName";
AnimatorController worldController; // Supply the world animator controller asset
Transform animatorRoot; // Supply your animator root located in the world
Object assetContainer; // Supply a project asset where generated assets will be added to
string assetKey = GUID.Generate().ToString(); // Supply a stable key that will be used to keep track of previously generated assets
bool useWriteDefaults = true; // States will be created with Write Defaults set to ON or OFF based on whether UseWriteDefaults is true or false.
var aac = AacV1.Create(new AacConfiguration
{
    SystemName = systemName,
    AnimatorRoot = animatorRoot,
    DefaultValueRoot = animatorRoot,
    AssetKey = assetKey,
    AssetContainer = assetContainer,
    ContainerMode = AacConfiguration.Container.Everything,
    DefaultsProvider = new AacDefaultsProvider(useWriteDefaults)
});

// Create a new layer in your animator controller.
AacFlLayer layer = aac.CreateSupportingArbitraryControllerLayer(worldController, "ExampleSuffix");

// The first created state is the default one connected to the "Entry" node.
var hidden = layer.NewState("Hidden")
    // The animation path to toggle.items is relative to the animator root.
    .WithAnimation(aac.NewClip().Toggling(toggle.items, false));
var shown = layer.NewState("Shown")
    .WithAnimation(aac.NewClip().Toggling(toggle.items, true));

// Creates a Bool parameter in the animator.
var itemParam = layer.BoolParameter(toggle.parameterName);

// Creates transitions. By default, the transitions are already configured with our default values.
hidden.TransitionsTo(shown).When(itemParam.IsTrue());
shown.TransitionsTo(hidden).When(itemParam.IsFalse());
```

## Animator and Animation examples

### Toggle a GameObject

:::danger
This section is not complete yet.
:::

```csharp
public class Example : MonoBehaviour, IEditorOnly
{
    public GameObject item;
    public string parameterName;
}

// # Generator

// The first created state is the default one connected to the "Entry" node.
var hidden = layer.NewState("Hidden")
    // The animation path to toggle.items is relative to the animator root.
    .WithAnimation(aac.NewClip().Toggling(example.item, false));
var shown = layer.NewState("Shown")
    .WithAnimation(aac.NewClip().Toggling(example.item, true));

// Creates a Bool parameter in the animator.
var itemParam = layer.BoolParameter(example.parameterName);

// Creates transitions. By default, the transitions are already configured with our default values.
hidden.TransitionsTo(shown).When(itemParam.IsTrue());
shown.TransitionsTo(hidden).When(itemParam.IsFalse());
```

### Toggle a SkinnedMeshRenderer with two conditions

:::danger
This section is not complete yet.
:::

```csharp
public class Example : MonoBehaviour, IEditorOnly
{
    public GameObject skinnedMesh;
}

// # Generator
    
var hidden = layer.NewState("Hidden")
    // The runtime type of my.skinnedMesh is used within the animation.
    // In this case, the "SkinnedMeshRenderer" component is disabled.
    .WithAnimation(aac.NewClip().TogglingComponent(example.skinnedMesh, false));
var shown = layer.NewState("Shown")
    .WithAnimation(aac.NewClip().TogglingComponent(example.skinnedMesh, true));

// This creates two Bool parameters in the animator.
// The resulting value can be used in conditions.
var accessoriesParams = layer.BoolParameters("EnableAccessories", "AccessoryThing");

// The following line creates one transition.
// The conditions are "EnableAccessories is true" and "AccessoryThing is true"
hidden.TransitionsTo(shown).When(accessoriesParams.AreTrue());

// The following line creates two transitions:
// - The first transition is "EnableAccessories is false"
// - The second transition is "AccessoryThing is false"
shown.TransitionsTo(hidden).When(accessoriesParams.IsAnyFalse());
```

### Animate a SkinnedMesh with Motion time

:::danger
This section is not complete yet.
:::

```csharp
layer.NewState("Motion")
    .WithAnimation(aac.NewClip().Animating(clip =>
    {
        clip.Animates(my.wedgeMesh, "blendShape.Wedge").WithFrameCountUnit(keyframes =>
            keyframes.Easing(0, 100f).Easing(28, 0).Easing(29, 0).Easing(30, 0).Easing(31, 0).Easing(32, 0).Easing(60, 100f)
        );
        clip.Animates(my.wedgeMesh, "material._Metallic").WithFrameCountUnit(keyframes =>
            keyframes.Constant(0, 1f).Constant(28, 0).Constant(60, 0)
        );
    }))
    .MotionTime(layer.FloatParameter("WedgeAmount"));
```

### Use Parameter Drivers

:::danger
This section is not complete yet.
:::