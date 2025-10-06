import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import HaiSupport from "/docs/_support.mdx";
import {HaiVideo} from "/src/components/HaiVideo";

# Animation Viewer

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

*Animation Viewer* lets you preview animations in the Project view browser, and [the CTRL-K Search window](#ctrl-k-search-window).

:::tip[Compatibility notes]
- It has been tested to work on Unity 2019, Unity 2021, and Unity 2022, and should work on newer versions.
- This does not require VRChat to run.
:::

<HaiVideo src="./animation-viewer-img/sx_2022-02-02_03-27-39_uYmmptha2T.mp4"></HaiVideo>

## Download

The tool is free to download. It can also be downloaded using ALCOM.

### Direct download

- GitHub ([hai-vr/animation-viewer-vcc](https://github.com/hai-vr/animation-viewer-vcc))

### ALCOM

- Use this link to **[install our listing to ALCOM](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**.
- Add *Haï ~ Animation Viewer* to your project using ALCOM.

## How to use

- Select your Animator. In the inspector, click the three dots, and select “Haï AnimationViewer”.

![Untitled](animation-viewer-img/Untitled.png)

- Move the camera in the scene, and hover your cursor over the Project view to refresh the pictures.
- When the Animation Viewer is activated, the performance of the editor will be impacted. Click “Activate Viewer” to toggle it on/off. The button is red when it is active.

<HaiSupport/>

## Options

- **Animator**: The animator to use as a preview base.

![Untitled](animation-viewer-img/Untitled%201.png)

- **Auto Update On Focus**: If you change the scene camera position, hovering your cursor over the Project view window will refresh the pictures.
- **Continuous Updates**: If you change the scene camera position, it will immediately refresh the pictures. This will lead to a dramatic slow down of the editor.
- **Update Speed**: Specifies the number of animations files to update per batch.
A lower value such as 5 causes the Project view to update 5 thumbnails per update tick, which will result in slower load times but less hitches in folders that contain a lot of animation files.
A higher value like 20 causes the Project view to update 20 thumbnails per update tick, which will result in faster load times but more hitches in folders that contain a lot of animation files.
- **Thumbnail Size**: Change the thumbnail size of the Project view. This can be larger than the Project view allows (Unity’s maximum value is normally 96).

![Untitled](animation-viewer-img/Untitled%202.png)

![Untitled](animation-viewer-img/Untitled%203.png)

- **Activate Viewer button**: Click to enable the previews.
When the Animation Viewer is activated, the performance of the editor will be impacted. Click “Activate Viewer” to toggle it on/off. The button is red when it is active.

![Untitled](animation-viewer-img/Untitled%204.png)

- **Update button**: Click to refresh the pictures.
- **Force button**: Click to refresh the pictures, additionally clearing the thumbnail cache.
- **Advanced/Focused Bone**: When animations are playing, the animator’s muscles will move.
This option specifies on which bone to attach the camera. By default, it is focusing on the Head bone.
- **Advanced/Normalized Time**: The normalized time at which the animation will be sampled. By default, the first frame of the animation will be sampled.
- **Advanced/Base Pose**: Animator pose to use before the animation is applied.
This lets you preview the avatar in a different pose than the bicycle pose (see Additional notes below).
- **Advanced/Update On Activate**: When this is turned off, the thumbnails will not refresh when pressing Activate Viewer. This can let you toggle the thumbnail on and off and keep the same thumbnails after having moved the Scene view around.

## Additional notes

- You can change the field of view of the scene camera.

![Untitled](animation-viewer-img/Untitled%206.png)

- Use **Advanced/Base Pose** to specify an animation that applies before the animation is previewed.
This can be used to choose a pose to preview clothing toggle animations.
This can also be used to hide hats and other objects, letting you generate more relevant previews.
    
<HaiVideo src="./animation-viewer-img/sx_2022-02-02_03-05-20_QdOYmOWyly.mp4"></HaiVideo>

## CTRL-K Search window

:::note
This feature has been added in V2.1.0.

It will only be available on projects that use Unity 2021 and newer.
:::

If you press CTRL-K, you will open the [Unity Search](https://docs.unity3d.com/Manual/search-overview.html) window.

After opening this window, click on the three dots at the top right, and make sure *Animation Viewer (anim:)* is checked.

You can use the prefix `anim:<your search query>` to only show *Animation Viewer* results.

![Untitled](animation-viewer-img/ctrl-k.png)
