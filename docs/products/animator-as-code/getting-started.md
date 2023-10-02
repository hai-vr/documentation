---
sidebar_position: 2
title: Getting started
---

# Getting started (Modular Avatar)

:::danger
This is the work-in-progress documentation for Animator As Code **V1**, which has not yet been released. The last public version of Animator As Code is V0.
:::

Animator As Code is split into different packages, which you will select depending on your integration needs.

The easiest way to use Animator As Code is to use NDMF and Modular Avatar to build your animators in a non-destructive workflow. However, if you do not wish to use NDMF and Modular Avatar, or if you need to create persistent assets on disk to be shared around, [you can generate animators the old way](reference.md).

For the purposes of this page, we will use NDMF and Modular Avatar to create animators.

Animator As Code V1 can be installed using VRChat Creator Companion.

- Use this link to **[install our listing to VCC](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**.
- Use this link to **[install NDMF and Modular Avatar listing to VCC](vcc://vpm/addRepo?url=https://vpm.nadena.dev/vpm.json)**.

Then, add the following packages to your avatar project:

- Animator As Code - NDMF Processor
- Animator As Code - Modular Avatar
- Animator As Code - VRChat

## Create a new AacPlugin

TODO

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
        // Decide if you are using Write Defaults ON (true) or OFF (false).
        protected override bool UseWriteDefaults(Component script, BuildContext ctx) => false;
        
        protected override AacPluginOuput Execute()
        {
            // # Create an animator controller
            var ctrl = aac.NewAnimatorController();
            
            // Create a layer
            // Additional layers can be created in the FX animator (see later in the manual).
            var fx = ctrl.NewLayer();
            
            // The first created state is the default one connected to the "Entry" node.
            // States are automatically placed on the grid (see later in the manual).
            var off = fx.NewState("Hidden")
                // Animation assets are generated in a temporary location
                // The animation path to my.item is relative to the avatar root
                .WithAnimation(aac.NewClip().Toggling(my.item, false));
            var on = fx.NewState("Shown")
                .WithAnimation(aac.NewClip().Toggling(my.item, true));

            // Creates a Bool parameter in the FX layer.
            // Parameters are added to the Animator.
            var param = fx.BoolParameter(my.parameter);

            // Transitions are created with a set of default values
            // That can be changed in the Generator settings (see later in the manual).
            off.TransitionsTo(on).When(param.IsTrue());
            on.TransitionsTo(off).When(param.IsFalse());
            

            // # Prepare to create Modular Avatar components
            var maAc = MaAc.Create(my.gameObject);
            
            // Register the controller as an FX layer to be merged.
            maAc.NewMergeAnimator(ctrl, VRCAvatarDescriptor.AnimLayerType.FX);
            // Register the parameter into the VRCExpressionParameters
            maAc.NewParameter(param);
            // Register a menu item into the VRCExpressionsMenu
            maAc.EditMenuItemOnSelf().Toggle(param).Name(my.name).WithIcon(my.icon);


            // This object is always returned, except if you are dealing with direct blend trees (see later in the manual).
            return AacPluginOuput.Regular();
        }
    }
}
#endif
```