# FAQ

:::danger
The documentation page is currently being written.
:::

### Is this compatible with models edited in Blender?

Yes, it is compatible.

It should not matter whether you are using the original model, or a model edited in Blender, or a model edited by another patch.

The asset does not store any vertex data, and it does not rely on vertex IDs. If you add vertices to your mesh (such as edge loops), the tool will continue to function normally and you will not need to rebuild the FaceTra asset (depending on how you saved the file, you may have to reconfigure the Mesh data calibration panel).

When you select vertices using the tool, there is no vertex data stored within the asset. Vertex selections are represented with one position and a radius: the entire selection is recalculated every time from the model using a flood fill algorithm.

The tool only stores positions, rotations, radius, distances, and curves.

Positions and rotations are always stored in a coordinate space where the character stands in the Y direction and is facing towards the Z direction, independently from the mesh coordinate space.

### My model already has face tracking. Can I still use this tool?

If your model already has face tracking but you want to rewrite some shapes or only use some of the tools' features, you can choose which face tracking shapes to rewrite [in the Output settings](https://hai-vr.notion.site/Ha-s-FaceTra-Shape-Creator-f1d95d4459e54fc3b2f166d9ebb5ebf3#26b24f2414e440898b9573e051f8ba6b).
