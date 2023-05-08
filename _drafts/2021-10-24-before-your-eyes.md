---
title: Before Your Eyes *** WIP ***
description: I helped program and lead a narrative based game for the sgda 2021 fall game jam.
categories: [programming, game-dev, game-jam, tool]
tags: [Unity, Game-Jam, Programming]
---

{% include image.html type="post" name="layout.jpg" class="pc-100 no-side-margin img-center" %}

This is a current work in progress with the help of Ariana Mendez, Kathryn Perrine, Basil El-Hindi, and myself. Ariana is our environment artist, Kathryn our sprite artist and narrative designer, and Basil along with myself are our programmers. This project began for the SGDA 2021 fall game jam, but we decided to continue working on it to add more polish and bring it closer to our original vision.

After taking a short break, Basil and I have been refactoring our code and researching easier ways to accomplish what we need. For example, I tried to implement a dialog system during the game jam, but the complexity grew much more quickly than I had initially realized. Importing our narrative script into Unity was a teidous and manual process that took more time than it should have. After performing some research, we have been learning and integrating Yarn Spinner into our game to allow a seemless interface from our script to gameplay.

## Asset Processing

{% include video.html type="post" name="material-workflow.mp4" class="pc-100 no-side-margin img-center" caption="Material names are used to map textures" %}

I have been exploring asset post-processing to streamline model, texture, and sprite importing. For models, the material name (from the .fbx file) is parsed to find its corresponding texture. For example, a model with a material `MD_bench` will search the `Textures` folder for a texture `TX_bench`. Further, textures with the `TX_` prefix are given a new set of default import settings that are appropriate for pixel art.

My next point of automation comes to the sprites. Spritesheets can be automatically sliced on import, instead of having an artist open the sprite editor in Unity. Specifically, my script takes images with the `SS_` prefix, a number, and a name (`SS_##_name` or `SS_##_##_name`). The image is sliced into the number of sprites specified and names them according to their row and column.

Finally, we have animations. These can be extremely time-consuming to import manually. Assembling animation clips from sprites out of spritesheets, then placing clips into however many animators you need is horrible. We had 4 characters, each with their own animation clips (that changed between levels), so this just killed us. It took way too long to assemble the animations.

{% include video.html type="post" name="animation-workflow.mp4" class="pc-100 no-side-margin img-center" caption="This is an example of a character animation import, in less than a minute!" %}

Now, spritesheets for animations are denoted with the `AS_` prefix along with their frame count and name (`AS_##_level-name`). The spritesheet is sliced in the pre-processing, similar to the `SS_` spritesheet. After all assets have gone through post-processing, spritesheets with the `AS_` prefix are processed once more. The sprites that have been cutout are then assembled into an animation clip with the specified framerate and saved as an asset in the project.

Finally, each character can utilize an animator from a pool of templates, instead of each character needing their own, unique animator. Animation clips are assigned to its controller, at runtime.

## Reflection

The short time constraints (and mid-term madness) made the game jam a very difficult week. We had to hack our way through some bits of the process, but I've learned more about how far corners can be cut, if necessary, and what corners can never be cut.

Larger design decisions and pipeline integration between artist/designers and programmers is extremely important. The techinal bunch on a project should not be responsible to manually import assets. It's a repeative process that can easily be automated with scripts and a simple naming convention.