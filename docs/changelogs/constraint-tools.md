import {HaiVideo} from "/src/components/HaiVideo";

# Constraint Tools

## 1.1.0

### ☀️ New menu option: [Activate with Skinned Offsets](/docs/products/constraint-tools/activate-with-skinned-offsets)

A new menu option named [Activate with Skinned Offsets](/docs/products/constraint-tools/activate-with-skinned-offsets) is added in
the inspector of the Parent Constraint and VRC Parent Constraint components.

Pressing this menu option will behave similarly to the *Activate* button on the Parent constraint, but **calculates different offsets**:
These offsets will make the Parent constraint behave more like weight painting/mesh skinning.

This is the same algorithm that is used by the [Skinned Mesh Constraint Builder](/docs/products/constraint-tools/skinned-mesh-constraint) component.
If you are already using this component, you do not need to use this.

![mspaint_US2AvDUNAt.png](..%2Fproducts%2Fconstraint-tools%2Fimg%2Fmspaint_US2AvDUNAt.png)

## 1.0.1

### ☀️ New component: [Skinned Mesh Constraint Builder](/docs/products/constraint-tools/skinned-mesh-constraint)

A new component, [Skinned Mesh Constraint Builder](/docs/products/constraint-tools/skinned-mesh-constraint), has been added to Constraint Tools.

This component creates a parent constraint that moves with the closest polygon of a Skinned Mesh Renderer.

Use this component when you notice that attaching an object to your body is not as straightforward as parenting to a bone.

<HaiVideo src="/docs/products/constraint-tools/img/oSEDSUFVRj.mp4"></HaiVideo>
