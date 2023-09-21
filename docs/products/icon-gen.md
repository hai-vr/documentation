---
title: 🔒 IconGen
---

# IconGen

*IconGen* is an Unity Editor tool that lets you capture icons and generate icons.

:::tip
This does not require VRChat to run. It has been tested to work on Unity 2019, and should work on newer versions.
:::

## Download ⭐

IconGen is not currently available for download, please check again later!

However, *IconGen Thumbnail* is free for download.

- Booth.pm ([IconGen Thumbnail (Play mode) - hai-vr - BOOTH](https://hai-vr.booth.pm/items/5092126))

## How to use

### Capture thumbnails for VRChat in Play Mode

<video controls width="816">
    <source src={require('./img/icon-gen/2023-09-13_17-27-18_ShareX.mp4').default}/>
</video>

To capture thumbnails for VRChat in Play Mode, go to *Window > Haï > IconGen Thumbnail*.

![icon-gen-menu.png](./img/icon-gen/icon-gen-menu.png)

In the window, click *Start capturing*.

Move your scene camera to an angle that you like.

Click *Save as PNG...* to save the thumbnail.

The *Save again* button will save the picture at the previously saved location.

![Unity_xuolgaXxqS.png](./img/icon-gen/Unity_xuolgaXxqS.png)

:::caution
Click *Stop capturing* when you're done, as the tool will consume resources during use.
:::

#### Options

The thumbnail size will be 1200x900, the size of a VRChat thumbnail.

For other sizes, use *[IconGen Capture](#capture-icons-for-the-expressions-menu)* instead.

- **Use scene camera FOV:** Use the FOV of the scene camera.
- **Field Of View:** Set Field Of View of the capture camera.
- **Far Clip Plane:** Hide objects beyond this distance by setting the far clip plane of the capture camera.
- **(extended):** Same as Far Clip Plane, but the slider goes to an extended range.
- **Camera Roll:** Tilts the capture camera.
- **Transparent:** Take a transparent screenshot if you want to edit it in an external program.
- **Background:** Change the background color of the capture camera.
- **Capture Sky:** Make the sky visible in the capture camera.
- **Avoid Emulator Conflict:** Hides the Player and MirrorReflection layers from the capture camera, which avoids a conflict with Av3 Emulator in Play mode.
- **Use Post Processing:** Make post processing volumes affect the capture camera.

### Capture icons for the Expressions Menu

:::danger
This feature is not available yet, please check back later!
:::

<video controls width="816">
    <source src={require('./img/icon-gen/2023-09-21_08-34-13_ShareX.mp4').default}/>
</video>

To capture new icons from the scene, open *Window > Hai > IconGen Capture*.

In the window, click *Start capturing*.

Move your scene camera to an angle that you like.

Click *Save as PNG...* to save the icon.

The *Save again* button will save the picture at the previously saved location.

:::caution
Click *Stop capturing* when you're done, as the tool will consume resources during use.
:::

![](./img/icon-gen/Unity_N4SK4Zqao0.png)

- **Icon Size:** Change the size of the icon/picture.
- *Capture settings*
  - **Use scene camera FOV:** Use the FOV of the scene camera.
  - **Field Of View:** Set Field Of View of the capture camera.
  - **Far Clip Plane:** Hide objects beyond this distance by setting the far clip plane of the capture camera.
  - **(extended):** Same as Far Clip Plane, but the slider goes to an extended range.
  - **Camera Roll:** Tilts the capture camera.
  - **Transparent:** Take a transparent screenshot if you want to edit it in an external program.
    - *Transparent* will make the background transparent.
    - *Opaque* will force the image to be opaque.
    - *Transparent with Background* is an advanced mode that puts a transparent background of a specific color. Shaders can cause areas to be transparent, even when the background color is itself opaque.
  - **Background:** Change the background color of the capture camera.
  - **Capture Sky:** Make the sky visible in the capture camera.
  - **Avoid Emulator Conflict:** Hides the Player and MirrorReflection layers from the capture camera, which avoids a conflict with Av3 Emulator in Play mode.
  - **Use Post Processing:** Make post processing volumes affect the capture camera.
- *Preview*
  - **Show Grid:** Show a grid on the picture to assist in alignment.<br/>![](./img/icon-gen/Unity_0TIJndaE7c.png)
  - **Preview Generator:** Select an existing IconGen assets to test how layers would be applied to this picture.
  - **Preview Icon:** Preview the picture with the IconGen asset applied.<br/>![](./img/icon-gen/Unity_FRkH0ykKvM.png)

### Decorate and crop icons using layers

:::danger
This feature is not available yet, please check back later!
:::

After capturing your icons, you can process all of them in bulk by applying layers to them.

#### Create an IconGen asset

Create a new asset by right-clicking into the Project tab and selecting *Create > Haï > IconGen*.

![](./img/icon-gen/Unity_gCIY4BKhBo.png)

#### Add multiple icons at once

Drag and drop a group of icons by selecting the IconGen asset, then locking the Inspector tab, and then drag-and-drop the group of icons into the *Source icons* field.

<video controls width="816">
    <source src={require('./img/icon-gen/2023-09-21_07-32-58_ShareX.mp4').default}/>
</video>

#### Add icons one by one

To add icons one by one, you can do the same as *Add multiple icons at once*, or you can alternatively add it in the *+* field and press the *+ Add* button.

![](./img/icon-gen/2023-09-21_07-38-29_ShareX.png)

#### Rename your icons

By default, the name of your icons will be suffixed so that you can search for them in other interfaces.

You can change the *Name Prefix* and *Name Suffix*.

#### Use a template for layers

*IconGen* comes shipped with pre-built templates which serve as examples on how to build layers.

You can reuse an existing template by selecting one in the *Template* field.

#### Build layers yourself

You are encouraged to browse the existing templates shipped with IconGen to serve as inspiration on how to use the layers.

Layers are processed in the order from bottom to top, like Photoshop layers.

On each layer, you can choose how that element is applied to the picture.

In this example, there are 3 layers:

- The bottom layer is a white circle using Mask mode. This cuts the picture into the shape of that white circle.
- The middle layer is a white ring using Overlay mode, colored blue. This draws a blue ring on top of the picture.
- The topmost layer is a red strike using Overlay mode. This draws a red strike on top of the blue ring.

![](./img/icon-gen/2023-09-21_07-48-40_ShareX.png)

#### Mode

Layers can be set into different modes which determines how that layer will affect the existing picture.

![](./img/icon-gen/Unity_wnr2Xh3hUm.png)

- **Overlay**: The element is drawn on top.<br/>![](./img/icon-gen/2023-09-21_08-01-03_ShareX.png)
- **Mask**: The picture is cut into the shape of the element.<br/>![](./img/icon-gen/2023-09-21_08-00-08_ShareX.png)
- **Draw Under**: The element is drawn below.<br/>![](./img/icon-gen/2023-09-21_08-02-25_ShareX.png)
- **Gray Out**: The picture is grayed out. If there is an element, then only the similar pixels will be grayed out.<br/>![](./img/icon-gen/2023-09-21_07-59-22_ShareX.png)
- **Bottom Left**: The element is drawn at the bottom left.<br/>![](./img/icon-gen/2023-09-21_08-04-10_ShareX.png)
- **Bottom Right**: The element is drawn at the bottom right.
- **Top Left**: The element is drawn at the top left.
- **Top Right**: The element is drawn at the top right.
- **Inverse Mask**: The picture is cut away from the shape of the element.
- **Custom Material**: The layer uses a custom material of your choice.

## Changelog

### IconGen Thumbnail

- 1.0.1: Temporarily fix a memory leak by destroying the texture resource
- 1.0.0: First release