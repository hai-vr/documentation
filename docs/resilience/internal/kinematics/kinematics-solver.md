# Kinematics Solver

Pose a humanoid based on IK targets (and also the previous internal state of this solver). The internal state of this IK solver
is discarded whenever this component becomes disabled.

There is no update loop. The consumer of this IK solver must request solve accordingly,
based on the solving phase (i.e. solving for kinematics snapshots, or solving for live targets).

Conventions:
- This module uses **setup-teardown**.
- This module uses **manual update invocation**.
  - There are separate update functions depending on the phase.

## Inverse Kinematics solver

### General IK solver strategy

- Pre-pose the bones to facilitate solving:
  - The IK solver suffers from an issue where a solution would fail to converge in a low number of iterations
    if the position of the end effector is aligned with the initial pose, because its joints will refuse to bend.
  - Pre-posing will also suggest the bend direction for that particular pose.
- Solve the spine chain first:
  - The spine chain is currently the only chain in the humanoid pose that has more than one joint.
    - In this version of the solver, the wrist is not considered to be a joint.
      This may change in future version of the solver, once an abstraction of the fingertips become the end effectors so that the wrist becomes free to move.
  - Solve the spine bone positions.
  - Solve the spine bone rotations.
  - The spine chain is not a function of the hand or arm placements: only the hips, chest, and head placements influence the spine chain.
- Solve all other arm chains.
  - The root point of the arm is always the result of the spine being solved.
  - Solve each arm bone positions.
  - Solve each arm bone rotations.

### Solve position first, then rotation

Bone positions are solved before solving the rotations.
- First, we place the bone positions in such a way that the bone lengths are respected.
  - Bone positions are not restricted by any rotation limit. Rotation limits that influence bone positions are not part of this IK solver.
- Secondly, we orient the bone rotations to match the solved IK chain.
  - There is some heuristic to orient the bones. For instance, if the arm is straight, then the elbow can rotate freely to some limits (even in real-life),
    and we have to choose a sensible rotation.

### Straddling: Switching from end effector to joint effector

In its normal function, the IK solver can aim to make the end bones match the end effectors.

In alternate function, the IK solver can aim to make the joints point towards a joint effector, and the end bone point towards an end effector.
- This is different from a bend direction, as a bend direction will still aim to make the end bone match the end effector.
- This function allows the bone chain to "straddle" another object, so that instead of having a known anchor point for the end bone,
  the end bones becomes free to move as long as the joint is pointing towards a desired direction.

### Stateful IK: Wrist torque

Controllers only provide some information about the rotation of the wrist. While holding on the controller, the hand can spin more than 360 degrees
on the shoulder-to-hand axis, but it can't spin indefinitely. When spinning in this way, the arm will lock into two different configurations,
so you can have the controller in a specific rotation with the arm locked inwards, or the controller in the same rotation with the arm locked outwards.

With enough past information and assuming the user does not drop the controller, we should be able to deduce whether the arm
is being locked in one direction or another. To do this, we need to reliably keep track the twist of the controller in relationship to the HMD position.
