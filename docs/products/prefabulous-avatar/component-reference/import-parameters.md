# Import Parameters

:::danger
This is the work-in-progress documentation for *Prefabulous Avatar*, which has not yet been released.
:::

This component will import all parameters from an existing VRC Expression Parameters asset into the avatar.

Use this component when you're trying to adapt an existing prefab that was created without Modular Avatar into your avatar.

## Internal

This component internally creates or rewrites the [Modular Avatar Parameters](https://modular-avatar.nadena.dev/docs/reference/parameters)
component of that GameObject, and fills it with the parameters from the VRC Expression Parameters asset.
