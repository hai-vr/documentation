import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";

# Create a toggle for avatars

<HaiTags>
<HaiTag requiresBasis={true} />
</HaiTags>

The HVR package provides a component to create rudimentary ways to toggle GameObjects and Components.

## When to use toggles in Basis HVR?

Using toggles is recommended for elements of clothing that are inseparable from your body, such as sweaters,
shoes, or animal ears; and elements of clothing that are strongly associated with your current avatar appearance, such as a hat.

It may not be recommended for items that are separable from your body, such a smartphone, a photo camera, or a sword;
In the meantime feel free to create toggles for those as well as long as Basis or Basis HVR does not provide a system for items. 

## Create a toggle

We need to create a component on a GameObject that will always be ON. This means you cannot put that component inside
any object that will be toggled.

Create a new GameObject at any location of your avatar hierarchy that will always be ON,
and add an **Object State Actuation** component on it.

- Objects in **When Active** will be:
  - **ON** when the state of the toggle is **Active**,
  - OFF when the state of the toggle is Inactive.
- Objects in **When Inactive** will be:
  - **ON** when the state of the toggle is **Inactive**,
  - OFF when the state of the toggle is Active.

### Activation source

Choose an *Address* that this component will listen to.

When the value of that address is greater or equal to 1, the state of the toggle will be **ON**,
otherwise it will be **OFF**.

[//]: # (## Transition effects)

[//]: # ()
[//]: # (An *Object State Actuation* can be Inactive, Active, but also **Interpolating**.)

[//]: # ()
[//]: # (When a toggle is *Interpolating*, all objects will be ON at the same time. This is done so that materials)

[//]: # (could fade in or out.)

## Networking details

As an implementation detail, *Object State Actuation* is updated through events, incurring a networking cost
only when the state changes.

A network message will be sent every time the state changes from *Active* to *Inactive* and inversely.
The current state is transmitted when the avatar loads on the wearer, and when a new joiner finishes loading the avatar.

Every single state change will result in a packet being sent, even if multiple state changes occur in the same frame.
