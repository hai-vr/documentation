---
title: User agent
sidebar_position: 300
---

# User agent

XYVR currently uses the following user agent, where `{version}` is the version of XYVR
in [.NET assembly versioning](https://learn.microsoft.com/en-us/dotnet/standard/assembly/versioning) notation `X.Y.Z.W`
and `W` is equal to 0 for releases.

```text
Hai.XYVR/{version} (docs.hai-vr.dev/docs/products/xyvr/user-agent)
```

For inquiries about the client behavior, contact Haï~ through Discord: `vr_hai`.

Source code: https://github.com/hai-vr/XYVR/blob/main/api-vrchat/VRChatAPI.cs
- **VRChat API**: All data requests are made with a random delay between 700ms and 1300ms (1 second on average).
- **Resonite API**: All data requests are made with a random delay between 400ms and 600ms (0.5 seconds on average).
