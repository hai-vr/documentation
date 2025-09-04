---
title: Privacy
sidebar_position: 100
---

# Privacy and Data considerations

In a nutshell:
- **We do not store your email and password.**
- If you check the "Stay logged in" checkbox, we store your session cookies and tokens in an encrypted file in `%APPDATA%/XYVR/.DO_NOT_SHARE__session-cookies.encrypted`
- We store your user ID and real username in `%APPDATA%/XYVR/connectors.json`
- We store your address book in `%APPDATA%/XYVR/individuals.json`
- We store non-login API requests and responses in `%APPDATA%/XYVR/response-collection.jsonl`

HTTP requests:
- Requests to the VRChat API are done using the url `https://api.vrchat.cloud/api/1` at the rate of one request per second on average.
- Requests to the Resonite API are done using the url `https://api.resonite.com/` (**requests are currently unmetered, this needs to be fixed**).
- **There are no requests to any other external services.**
  - There is no telemetry, analytics, or tracking of any kind.

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
- Perform various requests to the Resonite API (**requests are currently unmetered, this needs to be fixed**).
  - Requests to the Resonite API are done using the url `https://api.resonite.com/`
  - Get contacts (https://wiki.resonite.com/API#GET_/users/{userId}/contacts) to find contacts.
  - Get user by user-id (https://wiki.resonite.com/API#GET_/users/{userId}).
- Write the address book data into `%APPDATA%/XYVR/individuals.json`.
- Write request and response data into `%APPDATA%/XYVR/response-collection.jsonl`.

## UI interaction

When you click on a link:
- The application will open the link in your default browser, only if the link starts with `https://` or `http://`.
- Any link that does not start with `https://` or `http://` is rejected from being opened.
