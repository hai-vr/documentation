---
unlisted: true
---
# XYVR

*This page is a placeholder for a future free product called XYVR. Please check back another time.*

## Search and show old names

When a user changes their username, it can be confusing to find them.

You can search for previously known usernames using `alias:` (example: `alias:aoi` can find users who used to have `aoi` in their name).

Having `alias:` in the search field will show all past known usernames in the search results.

## Show bios

By default, bios are not shown. Type `bio:` in the search field to show bios.

You can also search in bios using `bio:` (example: `bio:creator` finds bios that contain the word `creator`).

## Search in links

You can also search in links using `links:` (example: `link:bsky` finds bios that contain the word `bsky`).

## Grouping accounts of other users

**XYVR** fully embraces the use of multiple accounts, especially across different social VR platforms.

You should group the accounts belonging to the same user.

### Multiple accounts

If one of your contacts has multiple accounts across different social VR apps, you can group them.

Users with multiple accounts can be searched using `accounts:>1`

![ui-webview_LB6aEvaaTL.png](img/ui-webview_LB6aEvaaTL.png)

### Alt accounts

If a user has an alt account on the same social VR app, you can associate it with that user.

Users with alt accounts can be searched using `has:alt`

![ui-webview_uza2wcbvUU.png](img/ui-webview_uza2wcbvUU.png)

### Bot accounts

If a user has a bot account (such as a party invitation bot), you can mark it as a bot account and associate it with the actual user.

Bot accounts are not considered to be alt accounts; they will not show up when searching for `has:alt`

![ui-webview_0MrURp16gN.png](img/ui-webview_0MrURp16gN.png)


## Connecting from multiple accounts

Connect to multiple of your accounts at the same time in the **Connections** view.

![ui-webview_WNIsM0gXhO.png](img/ui-webview_WNIsM0gXhO.png)

You can add your accounts from different social VR apps, but you can also add multiple of your accounts from the same
social VR app if you have alt accounts or bot accounts.

If your accounts have different notes attached to someone else's account, we will show all of them.

![ui-webview_rbJ79Dtlnl.png](img/ui-webview_rbJ79Dtlnl.png)

## Why is the number of contacts different from what I was expecting?

The number of contacts can be different for the following reasons:

- Your own account is included in that contact list.
- If you have merged alt accounts and bot accounts: All of those accounts count as one user.
- You had connected multiple accounts that share some contacts with each other.
- One or more of your connected accounts is set to offline mode in the **Connections** view and is not getting updates.
