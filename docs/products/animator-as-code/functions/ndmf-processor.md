---
sidebar_position: 8
title: "NDMF Processor"
---

# Functions: NDMF Processor

:::danger
This is the work-in-progress documentation for Animator As Code **V1**, which has not yet been released. The last public version of Animator As Code is V0.
:::

This integration lets you write scripts that run when an avatar is being processed by [NDMF (Non-Destructive Modular Framework)](https://github.com/bdunderscore/ndmf). An Animator As Code instance (`AacFlBase`) is provided for you.

Here's an example of a toggle written with the NDMF Processor:

```csharp
#if UNITY_EDITOR
using System;
using ModularAvatarAsCode.V1;
using nadena.dev.ndmf;
using NdmfAsCode.V1.Example;
using UnityEngine;
using VRC.SDK3.Avatars.Components;

[assembly: ExportsPlugin(typeof(NdmfAsCodeToggleProcessor))]
namespace NdmfAsCode.V1.Example
{
    public class NdmfAsCodeToggle : MonoBehaviour
    {
        public string parameter;
        public GameObject[] objects;
        public Texture2D icon;
    }

    public class NdmfAsCodeToggleProcessor : AbstractNdmfAsCodePlugin
    {
        protected override Type ScriptType => typeof(NdmfAsCodeToggle);

        protected override NdmfAsCodeOutput Execute()
        {
            var my = (NdmfAsCodeToggle)script;
            
            var ctrl = aac.NewAnimatorController();
            var fx = ctrl.NewLayer();
            
            var off = fx.NewState("OFF").WithAnimation(aac.NewClip().Toggling(my.objects, false));
            var on = fx.NewState("ON").WithAnimation(aac.NewClip().Toggling(my.objects, true));

            var param = fx.BoolParameter(my.parameter);
            off.TransitionsTo(on).When(param.IsTrue());
            on.TransitionsTo(off).When(param.IsFalse());

            var maAc = MaAc.Create(script.gameObject);
            maAc.NewMergeAnimator(ctrl, VRCAvatarDescriptor.AnimLayerType.FX);
            maAc.NewParameter(param);
            maAc.EditMenuItemOnSelf().Toggle(param).Name(my.gameObject.name).WithIcon(my.icon);

            return NdmfAsCodeOutput.Regular();
        }
    }
}
#endif
```

## Minimal template

Change `YourScript` and `YourScriptProcessor` with the names of your choice.

```csharp
#if UNITY_EDITOR
using System;
using ModularAvatarAsCode.V1;
using nadena.dev.ndmf;
using NdmfAsCode.V1.Example;
using UnityEngine;
using VRC.SDK3.Avatars.Components;

[assembly: ExportsPlugin(typeof(NdmfAsCodeToggleProcessor))]
namespace YourNamespace
{
    public class YourScript : MonoBehaviour
    {
    }

    public class YourScriptProcessor : AbstractNdmfAsCodePlugin
    {
        protected override Type ScriptType => typeof(YourScript);

        protected override NdmfAsCodeOutput Execute()
        {
            var my = (YourScript)script;
            
            var ctrl = aac.NewAnimatorController();
            var fx = ctrl.NewLayer();
            
            // var maAc = MaAc.Create(script.gameObject);
            // maAc.NewMergeAnimator(ctrl, VRCAvatarDescriptor.AnimLayerType.FX);

            return NdmfAsCodeOutput.Regular();
        }
    }
}
#endif
```

## Direct Blend Trees merger

If you're familiar with the concept of merging blend trees, the processor can merge them all for you.

```csharp
#if UNITY_EDITOR
using System;
using nadena.dev.ndmf;
using NdmfAsCode.V1;
using UnityEngine;
using YourNamespace;

[assembly: ExportsPlugin(typeof(YourScriptProcessor))]
namespace YourNamespace
{
    public class YourScript : MonoBehaviour
    {
        public string parameter;
    }

    public class YourScriptProcessor : AbstractNdmfAsCodePlugin
    {
        protected override Type ScriptType => typeof(YourScript);

        protected override NdmfAsCodeOutput Execute()
        {
            var my = (YourScript)script;

            var bt = aac.NewBlendTree()
                .Simple1D(aac.NoAnimator().FloatParameter(my.parameter));
                // .WithAnimation(aac.NewClip()..., 0)
                // .WithAnimation(aac.NewClip()..., 1)
            
            return NdmfAsCodeOutput.MergeIntoDirectBlendTree(bt.BlendTree);
        }
    }
}
#endif
```

## Plugin (AbstractNdmfAsCodePlugin)

- `protected AacFlBase aac;` <br/>
This field contains the Animator As Code instance. To customize the configuration, see [Overrides](#overrides) below.

- `protected Component script;` <br/>
This field contains the instance of your targeted script being processed. You should immediately cast this script to use it.

- `protected BuildContext buildContext;` <br/>
This field contains the build context of NDMF.


### Overrides

- `protected virtual Type ScriptType` <br/>
Define the component type that you are targeting. This must be overriden in your processor.

You may override those methods if necessary:

- `protected virtual string SystemName(Component script, BuildContext context) => GetType().Name;` <br/>
Generated layers will be prefixed with the system name.

- `protected virtual Transform AnimatorRoot(Component script, BuildContext context) => context.AvatarRootTransform;` <br/>
The root transform is used to determine the relative paths to the object references that will be used within the animation. If you want to reuse a component on multiple avatars without reassigning the references, you can override this behaviour.

- `protected virtual Transform DefaultValueRoot(Component script, BuildContext context) => context.AvatarRootTransform;` <br/>
(At the moment, the DefaultValueRoot is not used in Animator As Code. It is meant to be used for sampling the default values of animated properties, so it may be different from the AnimatorRoot above)

- `protected virtual bool UseWriteDefaults(Component script, BuildContext context) => false;` <br/>
Choose the default WriteDefaults state.
