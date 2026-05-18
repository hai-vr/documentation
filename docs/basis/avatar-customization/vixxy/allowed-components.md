# Allowed components

By default, *Vixxy* does not allow toggling or accessing all component types as a precautionary measure to
prevent affecting components that are created by the application.

These restrictions may be relaxed during the development of Vixxy.

The following components are permitted in a default configuration:

- **In UnityEngine base components:**
  - *Miscellaneous:*
    - Transform
    - GameObject
    - ParticleSystem
    - Cloth
  - *Renderers:*
    - MeshRenderer
    - SkinnedMeshRenderer
    - TrailRenderer
    - ParticleSystemRenderer
  - *Constraints:*
    - ParentConstraint
    - PositionConstraint
    - RotationConstraint
    - ScaleConstraint
    - AimConstraint
    - LookAtConstraint
  - *Colliders:*
    - SphereCollider
    - CapsuleCollider
    - BoxCollider
    - MeshCollider
  - *Physics:*
    - Rigidbody
    - ConfigurableJoint
    - HingeJoint
  - *UI:*
    - RectTransform
    - Canvas
    - Text
    - Image
- **In other packages:**
  - UnityEngine.Rendering.Universal.DecalProjector
  - GatorDragonGames.JigglePhysics.JiggleRig
  - TMPro.TextMeshPro
  - TMPro.TextMeshProUGUI
