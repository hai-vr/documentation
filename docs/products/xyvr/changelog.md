---
sidebar_position: 200
---

# Changelog

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
