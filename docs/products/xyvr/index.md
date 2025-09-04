# XYVR

:::warning
*This page is a placeholder for a future free product called XYVR. Please check back another time.*
:::

*XYVR* is an address book application that lets you search through your VRChat and Resonite contacts.

Once data is retrieved, it is stored offline, no Internet connection needed.
The address book remains fully functional even if access to the original account is lost for any reason.

If you have multiple accounts on different social VR platforms (or even on the same platform), you can
view your contacts as one single address book.




### Privacy and data considerations

- **We do not store your email and password.**
- We locally store a cookie file and session tokens upon login, if requested.
- We locally store your address book in the `%APPDATA%/XYVR/` folder.
- We only perform requests to the following URLs:
    - for VRChat accounts: `https://api.vrchat.cloud/api/1`
    - for Resonite accounts: `https://api.resonite.com/`
- There are no requests to any other server.
- There is no telemetry, no analytics, and no cloud storage.

For more details, please refer to the following page: [Privacy and data considerations](./xyvr/privacy)
