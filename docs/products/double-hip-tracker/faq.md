﻿# FAQ

### What counts as a loss of tracking?

Whenever a tracker loses sight of the lighthouses, or the tracker loses radio signal, or the tracker turns off, it is considered as a loss of tracking.

Double Hip Tracker only makes use of the internal tracker status provided by the driver to figure out if a tracker has been lost (`Running_OK` status).

It doesn’t guess if a tracker has been lost in any other way. In particular, if your room has reflective surfaces, or if SteamVR thinks the tracker is healthy but still incorrectly estimates the position of a tracker, Double Hip Tracker will not be able to help during those situations.

### Can it be used alongside IMU-based trackers/pose estimators?

No, you should not use it alongside IMU-based trackers or pose estimators. The majority of IMU-based trackers rely on a pose estimator software, so any tracker mixing should be handled on that pose estimator software.

If your hip is driven by a lighthouse tracker, then the pose estimator must also reposition your feet accordingly, therefore it is the job of the pose estimator to take into account lighthouse trackers.

Also, this application has only been tested with lighthouse-based trackers. I do not know if this system works or not with [self-tracking trackers](https://developer.vive.com/resources/tracker/).

### Does it run on Unity?

Double Hip Tracker is not a Unity application.

It is written in C#, and uses the OpenVR API directly, with a standalone math library.

The idea is to keep Double Hip Tracker as lightweight and as pragmatic as I can.

### Third party acknowledgements

You can find third party acknowledgements here:

[Double Hip Tracker: Third party acknowledgements](https://www.notion.so/Double-Hip-Tracker-Third-party-acknowledgements-cefe0ac8d42a4f5d9b2e3a8e4154b9e1?pvs=21)