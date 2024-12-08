---
unlisted: true
---

# 2024-12-08 Running Modular Avatar on other apps

- **[Open article in Japanese / 記事を日本語で開く](./modular-avatar-on-other-apps-ja)**

:::warning
This page was mainly written in 2024-12-08. The information below may quickly become obsolete.<br/>
:::

Hello, if you're trying to run Modular Avatar on applications other than VRChat, here's what I learned when trying myself.

### Modular Avatar V1.x is almost already compatible

Modular Avatar V1.x is almost already compatible with apps other than VRChat, but some VRChat-specific functionality will be removed.

This is because most of the code specific to VRChat is already disabled in Modular Avatar if the VRChat SDK is not detected in the project.

For example, [MA Merge Armature](https://modular-avatar.nadena.dev/docs/reference/merge-armature) will run because it's generic,
but [MA Menu Item](https://modular-avatar.nadena.dev/docs/reference/menu-item) will not because it's too specific to VRChat.

All sections below describe the work needed to make it compatible.

### Modular Avatar sometimes has compilation errors in some releases

Modular Avatar is only *officially* supported on the VRChat platform, so in some releases, there may be compilation errors
because some code paths without VRChat had been overlooked.

Fixing this often requires adding `#if MA_VRCSDK3_AVATARS` and `#endif` at the right locations to make the compiler
ignore imports, field declarations, or entire code blocks that are too specific to VRChat.

If something requires `context.AvatarDescriptor`, you could probably assume most of the contents of the function could be removed from compilation.

See [this pull request](https://github.com/bdunderscore/modular-avatar/pull/1232/files) as an example.

### If you use ALCOM / VCC, installing Modular Avatar will install the VRChat SDK

Installing Modular Avatar V1.x through VCC or ALCOM will also install the VRChat SDK in the project.
This is not desirable, you must not have the VRChat SDK in a non-VRChat project because the VRChat SDK contaminates the
project configuration and its build process (layer names, XR project settings, etc.), which will interfere with the functionnality
of your targeted app.

If you use [ALCOM](https://vrc-get.anatawa12.com/alcom/) package manager, you can:
- Close the Unity project,
- Install Modular Avatar,
- Uninstall the VRChat SDK Avatars package,
- Uninstall the VRChat SDK Base package.

If you use VCC, you can't uninstall the VRChat SDK package once it is installed. Either switch to ALCOM, even if it's just for
non-VRChat projects, or install Modular Avatar manually through the source. You will also need to install NDMF.

If you use neither ALCOM nor VCC, you can install it directly through the source. You will also need to install NDMF.

I've been told that in the future, Modular Avatar V2.x will no longer cause the VRChat SDK to be installed in the project when it is installed.

### Modular Avatar depends on DLLs

Modular Avatar requires some DLLs to be present in the project, which are shipped by default in the VRChat SDK.

These DLLs are often absent from other projects like ChilloutVR or Basis.

Try to install [Chillaxins](https://docs.hai-vr.dev/docs/products/chillaxins) through ALCOM, or install those DLLs yourself
from Microsoft NuGet ([System.Collections.Immutable](https://www.nuget.org/packages/System.Collections.Immutable/), [Lib.Harmony](https://www.nuget.org/packages/Lib.Harmony/)).

The DLLs are:
- System.Collections.Immutable DLL, because NDMF uses it.
- Lib.Harmony DLL, because NDMF 1.5 uses it.

### Modular Avatar depends on the Unity Burst package

Modular Avatar requires the Unity Burst package in the project, which is normally included automatically by the VRChat SDK.

Try to install [Chillaxins](https://docs.hai-vr.dev/docs/products/chillaxins) through ALCOM, or go to Unity's package manager,
and add Burst to your project.

### Connect NDMF to the build process

To ensure Modular Avatar runs when the avatar is being built, you need to connect NDMF to the build process.

In the ChilloutVR application, I've done it in [Chillaxins](https://docs.hai-vr.dev/docs/products/chillaxins) (install it through ALCOM),
see [this code](https://github.com/hai-vr/chillaxins/blob/main/Packages/dev.hai-vr.chillaxins/Scripts/Editor/ChillaxinsPreBuildAvatar.cs#L51).

In the Basis framework, see [this code](https://github.com/dooly123/Basis/blob/main/Packages/HVRBasisNDMF/Scripts/Editor/BasisNDMFBuildHook.cs#L13).
This is already included in the Basis source code itself.
