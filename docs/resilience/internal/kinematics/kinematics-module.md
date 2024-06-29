# Kinematics (Module)

Kinematics manages the initialization and update cycles of the Kinematics solver,
and the FullTra module that binds the IK targets to be solved.

Conventions:
- This module uses **setup-teardown**.
- This module uses **manual update invocation**.

During setup, this module:
- will create components responsible for running the IK solver on an avatar.

On update invocation, this module:
- is responsible for asking the IK solver to pose an avatar.

During teardown, this module:
- will destroy all objects it has created.
