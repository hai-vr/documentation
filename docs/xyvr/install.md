---
sidebar_position: 5
---

# Install

:::warning
*This page is a placeholder for a future free product called XYVR. Please check back another time.*
:::

## Disk space requirements

To comply with VRChat's thumbnail policy, this software is required to store the world thumbnails on your disk to minimize the number of
requests to VRChat's servers.

If you do not use VRChat, the following does not apply to you.

Depending on the number of different worlds that your friends will visit, this storage can balloon up quickly. Expect around 70MB for
every 1000 worlds visited. We recommend at least 250MB of free space.

## Download software

:::danger
All 0.0.1 alpha versions are considered to be under heavy development and may contain **breaking changes** between versions.
:::

### Windows

The software under development can be downloaded at this location:
- Windows-x64: Download **[0.0.1-alpha.13 software (GitHub)](https://github.com/hai-vr/XYVR/releases/download/0.0.1-alpha.13/XYVR-0.0.1-alpha.13-windows-x64-executable.zip)**

Installing this requires the .NET 9.0 Desktop Runtime. When you start the application, if you don't have it, it will prompt you to install the runtime
from the official Microsoft website.

*You can [audit the software source code on GitHub](https://github.com/hai-vr/XYVR/) if you are a developer.*

### Linux

The software under development can be downloaded at this location:
- Linux, x64: Download [0.0.1-alpha.13 software (GitHub)](https://github.com/hai-vr/XYVR/releases/download/0.0.1-alpha.13/xyvr-0.0.1-alpha.13-linux-x64-executable.tar.gz)
- Arch Linux, x64: Download, see [latest releases](https://github.com/hai-vr/XYVR/releases/latest)

Installing this requires libwebkit2gtk-4.0 (see below) and the .NET 9.0 Desktop Runtime.

*You can [audit the software source code on GitHub](https://github.com/hai-vr/XYVR/) if you are a developer.*

#### Installing libwebkit2gtk-4.0 (Linux only)

If you're on Ubuntu 24, you need to install `libwebkit2gtk-4.0`, which is not available on the official Ubuntu 24 repository.

A workaround is described here in the Tauri issue tracker: *[libwebkit2gtk-4.0 not available in Ubuntu 24 & Debian 13 repositories](https://github.com/tauri-apps/tauri/issues/9662#:~:text=I%20worked%20around%20this%20by%20adding%20the%20following%20line)*
