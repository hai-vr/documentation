---
sidebar_position: 200
---

# Changelog

## 0.0.1-alpha.11

Features:
- Add Japanese locale, contributed by kazu0617.
- Tentatively add Arch Linux package builds, based on previous work by kazu0617.
- Instance names are now shown below the world name, if available.

Fixes:
- Fix Windows frontend was missing.
- Fix a possible crash that would have been caused by some Resonite status updates for which we could not find the session for.

Changes:
- All world thumbnails are now cached on disk to comply with VRChat's recent policy change regarding thumbnails.

## 0.0.1-alpha.10

Fixes:
- Try to fix an issue where resolving multisessions would crash because the user does not have a hashSalt defined.
- Try to fix an issue with how multisessions were not being updated during live updates.
- Delete cached VRChat worlds not seen for more than 45 days to avoid indefinitely increasing RAM usage.
- Try to fix a multithreading issue affecting Resonite session IDs.
- Try to fix a multithreading issue affecting how VRChat worlds are cached.

Changes:
- VRChat's policy on thumbnails is about to change. From now on, XYVR will start caching world thumbnail URLs on disk.
  - In the future, we will use those cached world thumbnails. This is not implemented yet as it requires a dynamic API URL to serve the images,
    which is something we have never used so far in neither Microsoft WebView 2 nor Photino.

Internal changes:
- Add more logging when sessions are being logged.
- Log errors happening in Resonite more aggressively.

## 0.0.1-alpha.9

Fixes:
- Try to fix various cases where VRChat contacts were still considered to be in a session even after leaving.
- Frontend will no longer request for /null as a thumbnail image when a session does not have a thumbnail.
- Fix crash should no longer occur when caching worlds that don't have an asset creation date. We no longer try to interpret some
  of the world data cache that we were not interested in.
- If a message in SignalR fails to be interpreted, log it and skip processing that event instead of crashing.
- Fix when all participants leave a session, that session is now properly ignored when new information about it arrives from SignalR.
- Try to fix an issue in Resonite where the sessions that a contact was located in were not tracked properly when the focused session changes
  at the same time as the list of sessions that this contact is in. 

Changes:
- When performing a ChilloutVR data collection, your own account will now be included in the data being collected as a contact.
- The main page now shows online individuals unless there is an active search.
- If a session has an equal number of users in the session (not necessarily contacts), prioritize low-capacity sessions.
  - For example, a 1/2 session in the "For Two" world will be prioritized over a 1/32 in the "SuRroom" world, because it has less remaining slots available.
- Compact mode and language are now saved as part of the preferences.
- VRChat sessions are now fetched at a rate of four requests per second when the application starts, and at one request per second
  every five minutes afterward.
- Try to improve RAM usage when Resonite sessions are being cached by discarding old session data.

Internal changes:
- Photino logs have been removed, as they are too verbose and may leak undesirable data into the logs.
- vite has been updated to 7.1.5 as suggested by Dependabot for a minor security update.
- Work towards adding localization keys.
- Reduce the number of existing logs.
- Add more logging when errors occur.
- Timestamps and source are now recorded in the console logs.
- Remove leftover Resonite debugging code. We used to get all Resonite sessions to see if it was needed to build the initial session state,
  but it was only used for debug logging.

## 0.0.1-alpha.8

Features:
- Now builds on Linux.
  - Added variant of the program based on Photino instead of Microsoft.Web.WebView2.
  - On Linux, session key is written to the filesystem instead of the Windows registry.
  - Opening URLs now uses `xdg-open` on Linux.
- Connecting to ChilloutVR accounts is now possible using Email.
  - Note: Connecting using access key is not yet supported.
  - Note: If you have not accepted the new ChilloutVR terms of service, the login will fail without an error message.
    Connect to the ChilloutVR website first to accept the terms of service.
- Improve session card:
  - Session now shows thumbnail images.
  - Session now shows the user count and session capacity.
  - If the session capacity is larger than the world capacity, the session capacity will be displayed differently.
- If the user is connected to multiple worlds at the same time on Resonite, this will now be shown in the session card and the account card.

Fixes:
- When executing the application for the first time, the directories for saving the files are now created in advance.

Changes:
- Rename app to XYVR on Windows, and xyvr on Linux.
- Add app icon on Windows.
- Active sessions are now refreshed every minute.
- World data now expires after 6 hours.

Internal changes:
- Linux-related changes that do not affect the user:
  - Javascript .NET from/to React communication has been modified to support both Microsoft.Web.WebView2 and Photino. The
    latter does not support awaiting on .NET calls, so some basic async RPC has been implemented using deferred Promises.
  - `npm run build-and-copy` no longer depends on Windows-specific `xcopy`.
  - Clicking and middle-clicking on links to external websites is now handled in the Backend for UI instead of the browser capabilities,
    because I could not figure out how to make Photino intercept and cancel navigation and window opening events caused by clicking on `<a href=` links.
  - Backend for UI has been split to its own project *ui-backend*.
  - React UI has been split to its own project *ui-frontend*.
- The internal architecture for handling session data has been drastically changed: live session data is no longer contained within the live user data.

## 0.0.1-alpha.7

Features:
- Sessions now show up above contacts, where online contacts participating in the session are grouped together.

Changes:
- XYVR is no longer allowed to be run twice to prevent the application overwriting each other's data.
- During data collection, the application will now detect if [listing online and offline VRChat friends](https://vrchat.community/openapi/get-friends) has failed to return all friends and will now try to recover from this inconsistency.

## 0.0.1-alpha.6

Fixes:
- Data collection no longer causes notes to be wiped and then rewritten.

Changes:
- The cached data for world names are invalidated after an hour, applicable once XYVR restarts. World data will be requested again only if needed.
- Change how we decide that someone is in a private world, rather than an unknown state.
- Change the terminology from "We" to "This application" in the privacy message.

Internal changes:
- Live monitoring updates and account updates are only sent to the UI when the data has actually changed, which avoids unnecessary data model updates on the React side.
- Most of the main data structures are now immutable.
- Prepare initialization code and project architecture to be more flexible if we want to support other social VR apps.

## 0.0.1-alpha.5

Features:
- Show the name of the current Resonite session and VRChat world that an account is in.
- Add `session:` to search by session name.
    - The search field now supports quotes to group worlds, such as `session:"h p"` to search for session names that contain `h p` anywhere in it.
- Show online status icons differently when an account is not in a visible world and sort them with a lower priority.

Internal changes:
- Pressing CTRL-SHIFT-E will now redact everything except world and session names.

## 0.0.1-alpha.4

Features:
- Add a button in the dropdown to unmerge all accounts from a user.
- Add `:confusables` search term, which will consider some Cyrillic characters equivalent to visually similar Latin characters.
- In compact mode, show all the user's accounts when the search term refers to matches pertaining to different accounts.
- When recent notes are retrieved, the note is now immediately written to the storage rather than requiring a data collection pass.

Fixes:
- In compact mode, keep showing the user's accounts even when `has:alt` or `accounts:>1` is used.
- Auto-reconnect to the VRChat WebSocket when the server resets the connection.
- Auto-reconnect to the Resonite SignalR when the server resets the connection.
- If "429 Too Many Requests" is received from the VRChat API, wait for 70 seconds before retrying.
- Resonite user identifiers can now be searched.

Changes:
- Pressing CTRL-SHIFT-D will switch into debug mode. Debug mode redacts all personal information and links from the UI.
- Add Resonite icon.
- GitHub workflow now creates the ZIP file as XYVR, not xyvr.
- In the logs, print the version number.
- In the logs, tag the reason why a live update is triggered.

Internal changes:
- The code now uses TypeScript in place of JavaScript.
- `package.json` now uses exact version numbers.
- Split data retrieval structures from data storage structures.

## 0.0.1-alpha.3

Features:
- Add live status updates using Resonite SignalR API.
- Add live status updates using VRChat Websocket API.
- Display the status of each account.
- Order the results by the most permissive status first.
- Add a new compact view, accessed using a toggle.
  - In the compact view, only accounts that match the search are shown, contrary to the full view.
- Add toggle to show or hide notes.
- Add dropdown to merge accounts belonging to the same user.

Changes:
- Replace emojis with icons.
- On the login screen, add links to the privacy docs.
- In Resonite GetContacts, contacts who aren't accepted yet are no longer considered to be contacts.
- When "Stay logged in" is checked, we will now request a longer expiring session token from the Resonite auth API.

Internal changes:
- Change how contacts are retrieved from Resonite.
- Don't save the Resonite UID file if it existed already.
- Add rate limiting to the Resonite API at two requests per second.

## 0.0.1-alpha.2

- Fix VRChat login is now possible with two-factor TOTP (authenticator instead of email).
- Middle clicks on links now open it in the default browser rather than in a WebView popup.

## 0.0.1-alpha.1

First alpha:
- Login, collect, and browse functionality are barely just working.
