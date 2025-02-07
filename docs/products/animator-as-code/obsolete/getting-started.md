---
sidebar_position: 2
title: (OBSOLETE)Getting started
unlisted: true
---

# (OBSOLETE)Getting started (Modular Avatar)

:::danger
🚫 This documentation is obsolete, and **contains errors**. 🚫
:::

Animator As Code is split into different packages, which you will select depending on your integration needs.

The easiest way to use Animator As Code is to use NDMF and Modular Avatar to build your animators in a non-destructive workflow. However, if you do not wish to use NDMF and Modular Avatar, or if you need to create persistent assets on disk to be shared around, or if you don't use VRChat Avatars, [you can generate animators the old way](reference-barebones).

For the purposes of this page, we will use NDMF and Modular Avatar to create animators.

Animator As Code V1 can be installed using VRChat Creator Companion.

- Use this link to **[install our listing to ALCOM](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**.
- Use this link to **[install NDMF and Modular Avatar listing to ALCOM](vcc://vpm/addRepo?url=https://vpm.nadena.dev/vpm.json)**.

Then, add the following packages to your avatar project:

[//]: # (- Animator As Code - NDMF Processor)
- Animator As Code - Modular Avatar
- Animator As Code - VRChat

## Start with our example

To begin create a new scripts in your Assets called `ExampleToggle.cs`, and paste the following example in that MonoBehaviour.

You can read the comments which introduce you to the different parts of Animator As Code.

```csharp
#if UNITY_EDITOR
using ModularAvatarAsCode.V1;
using nadena.dev.ndmf;
using Example;
using UnityEngine;
using VRC.SDK3.Avatars.Components;

// The ExportsPlugin attribute registers this plugin to the Non-Destructive Modular Framework (NDMF),
// so that the script runs when the avatar is being uploaded or is being executed in Play mode.
[assembly: ExportsPlugin(typeof(ExampleTogglePlugin))]
namespace Example
{
    public class ExampleToggle : MonoBehaviour
    {
        // Your MonoBehaviour contains the parameters and scene object references,
        // which will be used to generate animations.
        public string parameter;
        public GameObject item;
        public Texture2D icon;
    }

    // AacPlugin is the class that you need to extend to implement your Animator As Code script.
    // It manages the initialization and run conditions of the script through NDMF. 
    public class ExampleTogglePlugin : AacPlugin<ExampleToggle>
    {
        // Decide if you are using Write Defaults ON (true) or OFF (false).
        protected override bool UseWriteDefaults(Component script, BuildContext ctx) => false;
        
        protected override AacPluginOutput Execute()
        {
            // # Create an animator controller.
            // The AacPlugin contains a field called `aac`, which is of type AacFlBase.
            // It is the Animator As Code instance.
            var ctrl = aac.NewAnimatorController();
            
            // Create a layer.
            // Additional layers can be created in the FX animator (see later in the manual).
            var fx = ctrl.NewLayer();
            
            // The first created state is the default one connected to the "Entry" node.
            // States are automatically placed on the grid (see later in the manual).
            var off = fx.NewState("Hidden")
                // Animation assets are generated in a temporary location.
                // The animation path to my.item is relative to the avatar root.
                .WithAnimation(aac.NewClip().Toggling(my.item, false));
            var on = fx.NewState("Shown")
                .WithAnimation(aac.NewClip().Toggling(my.item, true));

            // Creates a Bool parameter in the FX layer.
            // Parameters are added to the Animator.
            var param = fx.BoolParameter(my.parameter);

            // Transitions are created with a set of default values.
            // That can be changed in the Generator settings (see later in the manual).
            off.TransitionsTo(on).When(param.IsTrue());
            on.TransitionsTo(off).When(param.IsFalse());
            

            // # Prepare to create Modular Avatar components.
            var maAc = MaAc.Create(my.gameObject);
            
            // Register the animator controller as an FX layer to be merged.
            maAc.NewMergeAnimator(ctrl, VRCAvatarDescriptor.AnimLayerType.FX);
            // Register the parameter into the VRCExpressionParameters.
            maAc.NewParameter(param);
            // Register a menu item into the VRCExpressionsMenu.
            maAc.EditMenuItemOnSelf().Toggle(param).Name(my.name).WithIcon(my.icon);


            // This object is always returned, except if you are dealing with direct blend trees (see later in the manual).
            return AacPluginOutput.Regular();
        }
    }
}
#endif
```

Here is the same script as above without any comments:

```csharp
#if UNITY_EDITOR
using ModularAvatarAsCode.V1;
using nadena.dev.ndmf;
using Example;
using UnityEngine;
using VRC.SDK3.Avatars.Components;

[assembly: ExportsPlugin(typeof(ExampleTogglePlugin))]
namespace Example
{
    public class ExampleToggle : MonoBehaviour
    {
        public string parameter;
        public GameObject item;
        public Texture2D icon;
    }

    public class ExampleTogglePlugin : AacPlugin<ExampleToggle>
    {
        protected override bool UseWriteDefaults(ExampleToggle script, BuildContext ctx) => false;
        
        protected override AacPluginOutput Execute()
        {
            var ctrl = aac.NewAnimatorController();
            var fx = ctrl.NewLayer();
            
            var off = fx.NewState("Hidden")
                .WithAnimation(aac.NewClip().Toggling(my.item, false));
            var on = fx.NewState("Shown")
                .WithAnimation(aac.NewClip().Toggling(my.item, true));

            var param = fx.BoolParameter(my.parameter);

            off.TransitionsTo(on).When(param.IsTrue());
            on.TransitionsTo(off).When(param.IsFalse());

            var maAc = MaAc.Create(my.gameObject);
            
            maAc.NewMergeAnimator(ctrl, VRCAvatarDescriptor.AnimLayerType.FX);
            maAc.NewParameter(param);
            maAc.EditMenuItemOnSelf().Toggle(param).Name(my.name).WithIcon(my.icon);

            return AacPluginOutput.Regular();
        }
    }
}
#endif
```

## How the example is used

To use that example in your project, add the `ExampleToggle` component into one of the objects of your avatar.

The script will execute on its own when the avatar is being uploaded or is being executed in Play mode.

TODO: Need a way to temporarily generate Animator As Code controller without generating MA components.