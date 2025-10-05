# XYVR

:::warning
*This page is a placeholder for a future free product called XYVR. Please check back another time.*
:::

*XYVR* is an address book application that lets you search through your VRChat, Resonite, and ChilloutVR contacts.

Once data is retrieved, it is stored offline, no Internet connection needed.
The address book remains fully functional even if access to the original account is lost for any reason.

If you have multiple accounts on different social VR platforms (or even on the same platform), you can
view your contacts as one single address book.




### Privacy and data considerations

XYVR does not operate any server. All data is stored locally on your computer.

- **This application does not store your email and password.**
- We store a cookie file and session tokens upon login, if requested.
- We store your address book in the `%APPDATA%/XYVR/` folder.
- We only perform requests to the following URLs:
    - for VRChat accounts: `https://api.vrchat.cloud/api/1` (live updates: `wss://pipeline.vrchat.cloud/`)
    - for Resonite accounts: `https://api.resonite.com/` (live updates: `https://api.resonite.com/hub`)
    - for ChilloutVR accounts: `https://api.abinteractive.net/1`
    - Information from one account is never transmitted to the service of another account (e.g., Resonite account data is never transmitted to VRChat servers, etc.)
- We fetch thumbnails:
    - for VRChat: from any thumbnail URL provided by the VRChat API.
    - for Resonite: only from URLs which hostname is `resonite.com`, or any subdomain of `resonite.com`.
- There are no requests to any other server.
- There is no telemetry, no analytics, and no cloud storage.
- This application will not modify, add, or remove any data from your VRChat, Resonite, or ChilloutVR accounts.

For more details, please refer to the following page: [Privacy and data considerations](./xyvr/privacy)
