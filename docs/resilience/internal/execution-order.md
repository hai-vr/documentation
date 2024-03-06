---
sidebar_position: 2
---

# Execution order

- Acquire all hardware tracker placements. (**+800** : PartialVR module :: )
- Convert hardware trackers to humanoid standins. (**+900** : Interaction module :: )
- Copy humanoid standins from Camera Space to Avatar Space. (**+1000** : Interaction module :: )
- Place the IK End Effectors. (**+2000** : Kinematics module :: )
- Solve local IK without external influences. (**+3000** : Kinematics module :: )
- Pose the fingers. (**+3001** : Kinematics module :: )
- Store the solved IK pose. (**+3010** : Snapshot module :: )
