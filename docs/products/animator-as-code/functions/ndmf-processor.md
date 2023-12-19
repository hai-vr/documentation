---
sidebar_position: 8
title: "NDMF Processor"
---

# Functions: NDMF Processor

:::danger
This is the work-in-progress documentation for Animator As Code **V1**, which has not yet been released. The last public version of Animator As Code is V0.
:::

:::warning
The API contract for Modular Avatar As Code V1 is highly unstable. Use at your own risk.
:::

This integration lets you write scripts that run when an avatar is being processed by [NDMF (Non-Destructive Modular Framework)](https://github.com/bdunderscore/ndmf). An Animator As Code instance (`AacFlBase`) is provided for you.

## Example

Here's an example of a toggle written with the NDMF Processor:

```csharp
#if UNITY_EDITOR
using ModularAvatarAsCode.V1;
using nadena.dev.ndmf;
using NdmfAsCode.V1.Example;
using UnityEngine;
using VRC.SDK3.Avatars.Components;

[assembly: ExportsPlugin(typeof(AacToggleProcessor))]
namespace NdmfAsCode.V1.Example
{
    public class NdmfAsCodeToggle : MonoBehaviour
    {
        public string parameter;
        public GameObject[] objects;
        public Texture2D icon;
    }

    public class AacToggleProcessor : AacPlugin<NdmfAsCodeToggle>
    {
        protected override AacPluginOutput Execute()
        {
            var ctrl = aac.NewAnimatorController();
            var fx = ctrl.NewLayer();
            
            var off = fx.NewState("OFF").WithAnimation(aac.NewClip().Toggling(my.objects, false));
            var on = fx.NewState("ON").WithAnimation(aac.NewClip().Toggling(my.objects, true));

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

## Use a shared Direct Blend Tree

If you're familiar with the concept of sharing a Direct Blend Tree, the processor can merge them all for you, across all scripts that use `AacPlugin`.

```csharp
#if UNITY_EDITOR
using ModularAvatarAsCode.V1;
using nadena.dev.ndmf;
using NdmfAsCode.V1.Example;
using UnityEngine;
using VRC.SDK3.Avatars.Components;

[assembly: ExportsPlugin(typeof(AacToggleProcessor))]
namespace NdmfAsCode.V1.Example
{
    public class NdmfAsCodeToggleDBT : MonoBehaviour
    {
        public string parameter;
        public GameObject[] objects;
        public Texture2D icon;
    }

    public class AacToggleDBTProcessor : AacPlugin<NdmfAsCodeToggleDBT>
    {
        protected override AacPluginOutput Execute()
        {
            // Since this does not produce a layer but still needs Float parameters, use NoAnimator().
            // NDMF Processor will create the necessary parameters into the direct blend tree animator.
            var param = aac.NoAnimator().FloatParameter(my.parameter);
            
            var bt = aac.NewBlendTree()
                .Simple1D(param)
                .WithAnimation(aac.NewClip().Toggling(my.objects, false), 0)
                .WithAnimation(aac.NewClip().Toggling(my.objects, true), 1);

            var maAc = MaAc.Create(my.gameObject);
            // Blend Trees use a Float parameter, but the Expression Parameter can declare it as a bool.
            // Use the functions NewBoolToFloatParameter(...) and ToggleBoolToFloat(...) to reuse the parameter
            maAc.NewBoolToFloatParameter(param);
            maAc.EditMenuItemOnSelf().ToggleBoolToFloat(param).Name(my.name).WithIcon(my.icon);
            
            // TODO: We need a way to store override values! Such as One = 1, or Smoothing = 0.8.
            // This may need to be added in the output object
            return AacPluginOutput.DirectBlendTree(VRCAvatarDescriptor.AnimLayerType.FX, bt);
        }
    }
}
#endif
```

## How to use

To use NDMF Processor:

- Create a new MonoBehaviour class.
- Create a new class that inherits from `AacPlugin<YourBehaviour>`
- Override the method `protected override AacPluginOutput Execute()`
- Use the `aac` field to access an instance of AAC.
- Use the `my` field to access your MonoBehaviour instance.
- Make the method `return AacPluginOutput.Regular();`

To use that processor, add new component somewhere in your avatar that uses that behaviour.

You can have multiple of these, and the script will be executed for each instance.

## Plugin (AacPlugin\<T> where T : MonoBehaviour)

Define `T` to be your MonoBehaviour component.

### Properties

- `protected AacFlBase aac { get; private set; }` <br/>
This field contains the Animator As Code instance. To customize the configuration, see [Overrides](#overrides) below.

- `protected T my { get; private set; }` <br/>
This field contains the instance of your targeted script being processed.

- `protected BuildContext buildContext { get; private set; }` <br/>
This field contains the build context of NDMF.


### Overrides

You may override those methods if necessary:

- `protected virtual string SystemName(Component script, BuildContext context) => GetType().Name;` <br/>
Generated layers will be prefixed with the system name.

- `protected virtual Transform AnimatorRoot(Component script, BuildContext context) => context.AvatarRootTransform;` <br/>
The root transform is used to determine the relative paths to the object references that will be used within the animation. If you want to reuse a component on multiple avatars without reassigning the references, you can override this behaviour.

- `protected virtual Transform DefaultValueRoot(Component script, BuildContext context) => context.AvatarRootTransform;` <br/>
(At the moment, the DefaultValueRoot is not used in Animator As Code. It is meant to be used for sampling the default values of animated properties, so it may be different from the AnimatorRoot above)

- `protected virtual bool UseWriteDefaults(Component script, BuildContext context) => false;` <br/>
Choose the WriteDefaults state that will be used by default when creating states.

## NDMF Sequence

#### In BuildPhase.Generating

- All user plugins inheriting from `AacPlugin<T>` run before plugin `NdmfAacDBTPlugin` does.
- The plugin `NdmfAacDBTPlugin` collects all direct blend trees declared by user plugins.
- Plugins are expected to generate Modular Avatar components. Modular Avatar components belong in the Transforming build phase.
