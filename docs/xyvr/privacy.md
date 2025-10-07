---
title: Privacy
sidebar_position: 100
---

import Privacybasics from "./_privacybasics.mdx";

# Privacy and Data considerations

<Privacybasics />

### More details

- If you check the "Stay logged in" checkbox, we store your session cookies and tokens in an encrypted file in `%APPDATA%/XYVR/.DO_NOT_SHARE__session-cookies.encrypted`
- We store your user ID and real username in `%APPDATA%/XYVR/connectors.json` , but not your email.
- We store your address book in `%APPDATA%/XYVR/individuals.json`
- We store non-login API requests and responses in `%APPDATA%/XYVR/response-collection.jsonl`
- World cache:
  - We store a cache of world names in `%APPDATA%/XYVR/.cache_world-names/`
  - We store a cache of thumbnails in `%APPDATA%/XYVR/.cache_thumbnails/`

HTTP requests and live updates:
- Requests to the VRChat API are done using the url `https://api.vrchat.cloud/api/1` at the rate of one request per second on average,
  except for live sessions (to fetch the player count of an instance) which are at four requests per second.
  - We also use the websocket URL: `wss://pipeline.vrchat.cloud/`
- Requests to the Resonite API are done using the url `https://api.resonite.com/` at the rate of two requests per second on average,
  and communication with the SignalR protocol for live updates (https://wiki.resonite.com/API#SignalR).
- Requests to the ChilloutVR API are done using the url `https://api.chilloutvr.net/1`
- **There are no requests to any other external services.**
  - There is no telemetry, analytics, or tracking of any kind.
- Information from one account is never transmitted to the service of another account (e.g., Resonite account data is never transmitted to VRChat servers, etc.)

## Application startup

When you start the XYVR application, it will do the following:
- Create a Windows Registry key at `HKEY_CURRENT_USER\SOFTWARE\XYVR\SessionDataEncryptionKey` that contains an encryption key, if it does not exist already.
- Create the `%APPDATA%/XYVR/` folder.
- Load user preferences from `%APPDATA%/XYVR/ui-preferences.json` (dark mode, etc.)

## Application exit

When you exit the XYVR application, it will do the following:
- Save user preferences in `%APPDATA%/XYVR/ui-preferences.json` (dark mode, etc.)
- Save `%APPDATA%/XYVR/individuals.json`

## VRChat login

Requests to the VRChat API are done using the url `https://api.vrchat.cloud/api/1`

When you connect to your VRChat account using the XYVR application, it will do the following:
- Send an HTTPS request to log in to your VRChat account (https://vrchat.community/openapi/get-current-user) using your email/username and password.
  - We will not save your email/username and password into any persistent storage.
- Send your 2FA code to your VRChat account (https://vrchat.community/openapi/verify2fa and https://vrchat.community/openapi/verify2faemail-code).
- Upon successful login:
  - The application forgets your typed email/username and password.
  - If the "Stay logged in" checkbox is checked:
    - Store the session cookie into an encrypted file in `%APPDATA%/XYVR/.DO_NOT_SHARE__session-cookies.encrypted`
  - Send a request to get the user ID and the real username of your account (https://vrchat.community/openapi/get-current-user).
  - Store that account information in `%APPDATA%/XYVR/connectors.json`
  - Send a request to get your user (https://vrchat.community/openapi/get-user).
  - Store that user in `%APPDATA%/XYVR/individuals.json`

:::note
The encryption key is stored in the Windows Registry separately from the session cookie file so that if you store or backup your personal data files,
the registry key containing the encryption key will not be included.
:::

## Resonite login

Requests to the Resonite API are done using the url `https://api.resonite.com/`

When you connect to your Resonite account using the XYVR application, it will do the following:
- Create a [Resonite UID](https://wiki.resonite.com/API#GET_/users/{userId}:~:text=based%20on%20information%20about%20the%20hardware%20this%20request%20was%20sent%20from) and store it in `%APPDATA%/XYVR/resonite.uid` if it does not exist already.
- Send an HTTPS request to log in to your Resonite account (https://wiki.resonite.com/API#Creating_a_token) using your username and password with this UID.
- Upon successful login:
  - The application forgets your typed username and password.
  - If the "Stay logged in" checkbox is checked:
    - Store the session token into an encrypted file in `%APPDATA%/XYVR/.DO_NOT_SHARE__session-cookies.encrypted`
  - Store your user-id and real username in `%APPDATA%/XYVR/connectors.json`
  - Send a request to get your user (https://wiki.resonite.com/API#GET_/users/{userId}).
  - Store that user in `%APPDATA%/XYVR/individuals.json`

:::note
The encryption key is stored in the Windows Registry separately from the session cookie file so that if you store or backup your personal data files,
the registry key containing the encryption key will not be included.
:::

## ChilloutVR login

Requests to the ChilloutVR API are done using the url `https://api.chilloutvr.net/1`

When you connect to your ChilloutVR account using the XYVR application, it will do the following:
- Send an HTTPS request to log in to your ChilloutVR account using your email and password.
    - We will not save your email/username and password into any persistent storage.
- Upon successful login:
    - The application forgets your typed email and password.
    - If the "Stay logged in" checkbox is checked:
        - Store the access token into an encrypted file in `%APPDATA%/XYVR/.DO_NOT_SHARE__session-cookies.encrypted`
    - Store the user ID and username of your account information in `%APPDATA%/XYVR/connectors.json`

## Data collection

When you request a data collection, it will do the following:
- Make use of the session cookies or tokens stored in memory during the execution of the application (for when "Stay logged in" was not checked), and the
  session cookies and tokens stored in the `%APPDATA%/XYVR/.DO_NOT_SHARE__session-cookies.encrypted` file for the following requests.
- Perform various requests to the VRChat API at the rate of one request per second on average:
  - Requests to the VRChat API are done using the url `https://api.vrchat.cloud/api/1`
  - Get online friends (https://vrchat.community/openapi/get-friends) to find contacts.
  - Get offline friends (https://vrchat.community/openapi/get-friends) to find contacts.
  - Get recently updated notes (https://vrchat.community/openapi/get-user-notes) to find possible non-contacts who have notes on them.
  - Get user by id (https://vrchat.community/openapi/get-user).
- Perform various requests to the Resonite API at the rate of two requests per second on average:
  - Requests to the Resonite API are done using the url `https://api.resonite.com/`
  - Get contacts (https://wiki.resonite.com/API#GET_/users/{userId}/contacts) to find contacts.
  - Get user by userId (https://wiki.resonite.com/API#GET_/users/{userId}).
- Data collection with the ChilloutVR API is not implemented yet. 
- Write the address book data into `%APPDATA%/XYVR/individuals.json`.
- Write request and response data into `%APPDATA%/XYVR/response-collection.jsonl`.
- Write a world cache in `%APPDATA%/XYVR/.cache_world-names.json` so that we don't make repetitive requests to the VRChat API when the app restarts.

## Live updates

Live updates with the Resonite API are done using the url `https://api.resonite.com/hub` using the SignalR protocol (https://wiki.resonite.com/API#SignalR).
- Live updates may result in additional Get userId calls (https://wiki.resonite.com/API#GET_/users/{userId}).
- Live updates may result in additional Get sessionId calls (https://wiki.resonite.com/API#GET_/sessions/{sessionId}).

Live updates with the VRChat API are done using the url `wss://pipeline.vrchat.cloud/` using the WebSocket protocol (https://vrchat.community/websocket).
- Live updates will result in additional Get online friends (https://vrchat.community/openapi/get-friends) to find contacts.
- Live updates may result in additional Get your user calls (https://vrchat.community/openapi/get-current-user).
- Live updates may result in additional Get user calls (https://vrchat.community/openapi/get-user).
- Live updates may result in Get world (https://vrchat.community/openapi/get-world) to find the world name.

Live updates with the ChilloutVR API are not implemented yet.

## UI interaction

When you click on a link:
- The application will open the link in your default browser, only if the link starts with `https://` or `http://`.
- Any link that does not start with `https://` or `http://` is rejected from being opened.
