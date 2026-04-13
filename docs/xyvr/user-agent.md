---
title: User agent
sidebar_position: 300
unlisted: true
---

# User agent

XYVR currently uses the following user agent, where `{version}` is the version of XYVR
in [.NET assembly versioning](https://learn.microsoft.com/en-us/dotnet/standard/assembly/versioning) notation `X.Y.Z.W`
and `W` is equal to 0 for releases.

```text
Hai.XYVR/{version} (docs.hai-vr.dev/docs/products/xyvr/user-agent)
```

The user agent is the same for ChilloutVR, VRChat, Resonite, and cluster.mu.

For inquiries about the client behavior, contact Haï~ through Discord: `vr_hai`.

- **VRChat API**: All data requests are made with a random delay.
  - During regular use, the following rates are applied:
    - 4 requests per second on average for requesting details of individual sessions, and
    - 1 request per second on average for all other requests.
  - When the application starts, requests are 4 times faster than usual to display the first complete list of sessions.
  - Source code: https://github.com/hai-vr/XYVR/blob/main/account-vrchat/api/VRChatAPI.cs
- **Resonite API**: All data requests are made with a random delay, at 1 request per second on average.
