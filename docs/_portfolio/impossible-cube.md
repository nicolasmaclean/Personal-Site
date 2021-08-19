---
permalink: /projects/impossible-cube.html
layout: post

title: The Impossible Cube
description: I breakdown the Impossible Cube effect from Antichamber.
tags: [Blender, 3D-Modeling, animation]
---

{% include video.html type="project" name="Impossible Cube.mp4" class="pc-100 no-side-margin img-center" %}

The game Antichamber (2013) had great puzzles and hypnotizing non-euclidean geometry. One effect in particular grabbed me. The "Impossible Cube" which shows a different scene inside a cube depending upon which face you look through.

{% include image.html type="project" name="antichamber-reference.jpg" class="pc-60 no-side-margin img-center" %}

Upon researching approaches to creating the effect, I found predominately methods meant for real-time games, not animations. They used stencil masks from within a shader to show the desired geometries. I took a slightly different approach, since I was creating this effect for non-real-time.

# Breakdown

I created this effect with the magic of compositing. Layers were utilzed to render multiple versions of the same scene and were mixed together using masks. In a higher-level sense, I have 2 different animations: one of the ant and one of the ring. I used 5 layers to capture both of these animations and create layer masks to composite them.

{% include image.html type="project" name="nodes.jpg" caption="The Compositing Nodes" class="pc-80 no-side-margin img-center" %}

For each frame of the animation, I have 3 versions of it: the cube has walls over both sides, the cube has one side open to view the ring, and the cube has the other side open to view the ant. The masks, which are the sides of the cube that we show/hide, are used to select the scene of the ant and ring and put them over the original image.

{% include image.html type="project" name="layers.jpg" caption="Here's A Close Up On the Layers Used (Including the Final Image)" class="pc-80 no-side-margin img-center" %}