---
sidebar_position: 200
---

# Changelog

## 0.0.1-alpha.5

Features:
- Show the name of the current Resonite session and VRChat world that an account is in.
- Add `session:` to search by session name.
    - The search field now supports quotes to group worlds, such as `session:"h p"` to search for session names that contain `h p` anywhere in it.
- Show online status icons differently when an account is not in a visible world, and sort them below.

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
