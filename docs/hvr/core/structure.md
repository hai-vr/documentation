Structure
=====

*HVR* is made of three packages and one side project:
- **HVR.Core** contains all the Unity components, except the *HVRUGC* components.
- **HVR.UGC** only contains *HVRUGC* components such as the *HVRUGC Avatar* component, and is intended to be able to be installed
  separately from *HVR* if needed.
- **HVR.NetworkingPackets** contains the packets shared between the client and server.
- **HVR.Server** is a .NET 10 project that contains the server code.

Despite being a package, *HVR.Core* has many assembly definitions in it, which are described below.

```mermaid
graph TD;
    PhysicsAnimation-->Shared:::unity;
    Tracking-->Shared:::unity;
    OpenXRTools:::vendor-->|CreatesTrackers|Tracking:::unity;
    OpenVROverlayTools:::vendor-->|CreatesTrackers|Tracking:::unity;
    
    Integration:::unity-->|WeakDependency|OpenXRTools;
    Integration-->|WeakDependency|OpenVROverlayTools;
    Integration-->PhysicsAnimation:::unity;
    Integration-->UGC:::neutral;
    
    Networking.Client:::unity-->Interpolation:::unity;
    Networking.Client-->NetworkingPackets:::neutral;
    Networking.Client-->Shared:::unity;
    
    UGC-->UnityEngine:::neutral;
    Shared-->UnityEngine:::unity;
    
    Networking.Server:::dotnet10-->NetworkingPackets
    Networking.Server-->NET.10:::dotnet10;
    
    SteamworksNetworking.Client:::vendor-->|IsTransportLayer|Networking.Client
    SteamworksNetworking.Server:::vendor-->|IsTransportLayer|Networking.Server
    
    classDef disabled fill:#CCC
    classDef neutral fill:#EEE
    classDef roots fill:#FCC
    classDef unity fill:#CFF
    classDef dotnet10 fill:#FCC
    classDef vendor fill:#FFC
```