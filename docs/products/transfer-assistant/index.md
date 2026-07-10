---
unlisted: true
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import HaiSupport from "/docs/_support.mdx";
import {HaiVideo} from "/src/components/HaiVideo";

# Transfer Assistant

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

This Unity tool will assist you when you want to use the *Export .unitypackage* function to **transfer assets from one project
to another project**, while stripping assets that you deem unnecessary.

:::note
このドキュメントは[**日本語**版もあります](transfer-assistant/ja)。
:::

<p style={{color:"#FF0000"}}>**TODO: MAIN ILLUSTRATION**</p>

Rather than including all referenced assets, it will deliberately ignore some of them:

- Instead of exporting every asset referenced by prefabs, it only exports assets that exist on the main avatar.
  If a prefab uses an asset that the main avatar does not, it is not included (this is the default behavior, but it can be changed).
- You may choose to ignore assets by type, along with any asset referenced by those assets. Ignoring materials will also ignore textures used by those materials.
- You may choose to ignore assets referenced by specific component types. Ignoring the *Modular Avatar Menu Item* component will also ignore the icon textures referenced by those components.
- You may choose to ignore assets referenced by objects marked as EditorOnly.

If a suspicious asset is being included in the export, and you are not sure why that's the case, the *Transfer Assistant* user interface can help you locate which object or component depends on it.

<p style={{color:"#FF0000"}}>**TODO: DEPENDENCY REASON ILLUSTRATION**</p>

*Transfer Assistant* will never modify the contents of Scenes or Prefabs.

The intended use case for this tool is to **export an avatar project file between different games**, e.g. from a Unity 2022 BIRP project to a standalone Unity 6.4 URP project.
In such a project, assets are scattered across multiple folders, and within those folders, there are assets that you want to exclude because they serve no purpose in the destination project,
such as animator controllers or animation files.

### What this tool is NOT designed for

This tool is **not** designed for exporting .unitypackage files meant to be published and distributed as part of a release, as such assets typically need more rigorous discipline in the folder structure.
Some functionality of this tool may be used for introspection purposes, but it is **not recommended** to use this tool for the management of product releases.

## Download

This tool can be downloaded on Booth.pm:

<p style={{color:"#FF0000"}}>**TODO: LINK TO BOOTH PAGE**</p>

It can also be installed through ALCOM.

## Reference manual

:::note
このドキュメントは[**日本語**版もあります](transfer-assistant/ja)。
:::

These are the basic steps in how to use the tool:

- [Choose which assets to analyze.](#choose-which-assets-to-analyze)
- [Narrow down which asset references you want to keep.](#narrow-down-which-asset-references-you-want-to-keep)
- [Explore which assets require other assets.](#explore-which-assets-require-other-assets)
- [Prepare export to preview which asset files will be exported.](#prepare-export-to-preview-which-asset-files-will-be-exported)
- [Find out why unexpected asset files are required.](#find-out-why-unexpected-asset-files-are-required)
- [Export the selected assets.](#export-the-selected-assets)

### Choose which assets to analyze

In the *Project* tab, right-click a prefab or scene and choose *Transfer Assistant...*

If you're working on an avatar, you should select the prefab that contains your avatar, not the files of your avatar.

Alternatively, you can go to *Window > Haï~ > Transfer Assistant*, then choose a prefab, and click the *Perform analysis* button.

#### Selecting multiple targets

The dropdown on the top right lets you switch between different object selection modes.

- **Single Target**: Only one root object is analyzed.
- **Multiple Targets**: Multiple root objects are analyzed.
- **Current Scenes**: Add root objects of all opened scenes are analyzed, and the Scene itself is added for export.
    - For now, this does **not** include render settings from the scenes. Skybox, lighting data, and other scene references won't be included in the export.

If you decide to change the target, click the *Perform analysis* button before continuing.

### Narrow down which asset references you want to keep

Press the checkboxes in the sidebar on the left to affect which assets will get exported.

These checkboxes have a cascading effect; unchecking Materials will affect which Textures get exported.

- **Culling** checkboxes:
    - When checking an asset type, those asset types are included, and any other asset referenced by those asset types is discovered and traversed.
    - When unchecking an asset type, those asset types are not included, and assets referenced by those asset types are not discovered.
- **Component** checkboxes:
    - When checking a component, any other asset referenced by those components is discovered and traversed.
    - When unchecking a component, assets referenced by those components are not discovered.
    - *This does not remove the Components from the prefab. Transfer Assistant never modifies prefabs nor scenes.*
- **Include EditorOnly**:
    - When checked, all objects are included. **This is the default option.**
    - When unchecked, assets referenced inside `EditorOnly` objects and any of their children are not included.
        - However, prefabs are always included, even if the prefab instance is EditorOnly.
    - *This does not remove the GameObjects or Components marked as EditorOnly from the prefab. Transfer Assistant never modifies prefabs nor scenes.*
- **Include hidden in Prefabs**:
    - This option is related to how overriding a Prefab instance hides the assets inside the source Prefab.
    - When checked, assets nested inside source Prefabs are included, even if your target object does not use it in its hierarchy because it overrides it.
        - This is the recommended option for **world-like projects**.
    - When unchecked, assets nested inside source Prefabs are not included, so that the only assets that are included are those that your target object uses.
        - This is the recommended option for **avatar-like projects**, and thus is the default option.

### Explore which assets require other assets

The main panel of the *Transfer Assistant* contains a tree of objects.

If you look at an object in that tree:
- The object depends on the children of that tree.
- The object is referenced whatever is its parent. There may be multiple references to that object in the dependency tree.

**Press the magnifier icon on specific objects** to focus on those objects and understand which objects it depends on and which objects depend on it.

In the sidebar, you may sometimes see asset types, and occasionally you might not understand why they are being included.

**Press the magnifier icon to focus on those asset types**. This will display on the tree every dependency that requires those asset types.

Alternatively, you may also type text to search for asset names or drag an object directly from your project into the field at the right of the text field.

Clicking the magnifier icon again will clear the search.

### Prepare export to preview which asset files will be exported

In the sidebar, press the *Prepare Export...* button. This will open a new window which looks similar to the *Export .unitypackage* window.

In there, you can inspect which files would be exported and refine your selection.

The sidebar of that window has buttons for each asset type. These do not have a cascading effect.
- **Select**: Selects the assets of this type, which will include them in the export.
- **Deselect**: Deselects the assets of this type, which will exclude them from the export.
- **Deselect and Hide**: Deselects the assets of this type and removes them from the Export window.
    - *Note: Pressing Deselect and Hide will **not** deselect the assets that are referenced by those assets, so this is different from the Culling option from the Transfer Assets window. Read more about this in the annex section below.*

### Find out why unexpected asset files are required

In the *Prepare Export* window, you may sometimes see files without understanding why they are getting exported.

In that case, press the magnifier icon to the right. This will put that asset inside the search of the *Transfer Assistant* window.

You can use this information to figure out which object in your hierarchy requires that asset.

### Export the selected assets

Press the *Export to file...* button to export the selected assets to a file of your choice.

Alternatively, pressing the *Quick Export* button will export or overwrite the `export.unitypackage` file.

### Annex: Difference between Culling and Filtering

You will notice there are two systems that will help narrow down which assets are exported: Culling, and Filtering.

I think it's better to explain with an example.

- **Culling:** When you have Textures inside Materials, and you use **Culling** to remove all Materials from the export, then all Textures inside those Materials will be removed from the export too.
    - Culling is the method you should use when you want to **exclude an asset and everything it depends on from the export**.
    - It is the recommended method to **exclude scripts and shader files**, as scripts may contain references to icon Textures.
    - If an asset is depended on by multiple other assets, then it is only excluded when all the assets that depend on it are also excluded.
- **Filtering:** When you have Textures inside Materials, and you use **Filtering** to remove all Materials from the export, then Textures will still be included in the export.
    - Filtering is the method you should use **when you have already transferred assets to another project, and you want to perform a partial update**.
    - Consider using Filtering when there is an incompatible asset type containing references to compatible assets that you have plans to repurpose
      (e.g. *Expression Menu* that references menu icons that you will reuse in a different menu system)
