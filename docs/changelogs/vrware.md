# VRWare (World)

## 2024-01-07 - Fonts Update

### New community translations

- Added Russian localization by Belka
- Added Toki Pona localization by fuopy
- Add new font to support community-created Russian localization.
- Add new font to support community-created Toki Pona localization.

### Other

- "Most Players" minigame should no longer internally crash when a player leaves the instance while the minigame is running.


## 2023-08-14 - Sync update

### Manual sync with no remediations

VRWare has been updated with a significant change in the way minigames are synced:
- VRWare was initially designed in November 2020, when Continuous sync was the only available sync method, minigames would sync 2 minigames in advance in order to compensate for problems in sync speed that occured during playtests.
- In the November 2021 version of VRWare, the game uses Manual sync but it still uses the underlying logic behind Continuous sync, because Manual sync used to stutter every time a new player joins the instance.
- In 2022 and 2023, VRChat's Manual sync appears to have significantly improved. However, the method used in VRWare still had occasional desyncs due to the complexity I had initially introduced by designing my way around Continuous sync.
- I have decided to try a different sync method by scheduling the next minigame as soon as the current minigame starts. This dangerously reduces the sync time window to 1 second, and also requires all clients to start the next minigame before the instance master sends the new information about the next minigame in order to avoid a desync, so it was a risky change.
- After testing that new sync system yesterday in an instance with 70 players, the system looked quite robust, so I've decided to push this change live.

### Other

- Particle success/failure effects will no longer play under spectators.
- Fix an issue where the URL field would be focused by default for desktop players, causing minigames that involve clicking to fail.
- Fix the "Everyone, exactly" minigame where the player would fail despite having succeeded their task.


## 2023-08-14 - Playtesting Update

Added a new minigame variant to "Everyone, exactly".

> The players must press the trigger of a gun multiple times to shoot a box. The total number of hits is counted. Any player shooting the box any time after the counter hits 0 will fail the minigame.

### Updated localization keys

A new localization key has been added:

- `GwTeamHitBullseye2023_PistolExactly`
  - > Everyone, hit exactly {0} times!


## 2023-08-09 - VRWare 2023

### The VRWare worlds have been updated
- The *VRWare Quest* world is now Cross-platform instead of being Quest-only. The name remains *VRWare Quest*.
- *VRWare Quest* now has a soft cap of 28 players instead of 12 players, therefore supporting 56 players.
- *VRWare* remains PC-only, and now has a soft cap of 40 players instead of 28 players, therefore supporting 80 players.
- Avatar scaling is now allowed, but some minigames may be physically impossible to complete.

### Introducing Hard mode
- It runs to 51 points instead of 31 points.
- Minigames start faster, and increases to a faster point.
- The timing of some minigames are tighter.
- Some minigames have been modified with harder win conditions.
- Hard mode is meant to be played in a group of people who agree to it. It is enabled if more than 51% of players vote for hard mode, so the instance master does not get to decide on their own. VRWare seems to be used as a gamemode to introduce new players to VRChat, so the timings in Normal mode remains accessible to new VRChat players.

### Introducing Spectator area
- Anyone walking up the stairs of the world will be considered a spectator.
- Spectators can jump back into the game by walking down the stairs at any point, except during games involving locomotion.
- Spectator can still play minigames as long as the minigame does not require locomotion.
- Spectators will not be accounted for in difficulty scaling (i.e. delay before platforms fall in "Don't fall", or the number of times to hit in "Everyone, hit").
- Although unlikely, Spectators retain the ability to win a round.

### Introducing StringLoader translations
- Translations can now be loaded from URLs
- Translators from the community can look up this document: https://github.com/hai-vr/vrw-t
- Added Traditional Chinese localization by XoF_eLtTiL
- Added Simplified Chinese localization by XoF_eLtTiL
- Added Polish localization by VRowe Futra

### Appearance
- The game area has been partially remodeled.
- World is now fogged, with color matching the sky.

### In terms of cleanup
- Internally, the original VRWare project has been updated to VCC.
- Fix a potential issue introduced by recent VRChat updates where the avatar bone lengths can change way more frequently than the game expects.
- Some old unused minigames made during early development have been removed from the scene.
- Attempting to fix an issue with the synced random number generation that previously caused minigames to play the exact same way.
- Attempting to solve raycast issues with some of the minigames where firing weapons would not hit targets.
- *Portal to VRWare* has been made private, and the private world *VRWare Cross-Platform* has been renamed to *VRWare Classic 2021*.
