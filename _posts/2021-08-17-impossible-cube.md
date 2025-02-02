---
title: The Impossible Cube
description: I breakdown the Impossible Cube effect from Antichamber.
categories: [art]
tags: [Blender, 3D-Modeling, Animation]
---

{% include media.html type="post" name="Impossible Cube.mp4" %}

The game Antichamber (2013) has great puzzles and hypnotizing non-euclidean geometry. One effect in particular: the "Impossible Cube". Each face shows a different scene inside of the cube.

Upon researching approaches to creating the effect, I predominately found methods meant for real-time games, not animations. They used stencil masks from within a shader to show the desired geometries. I took a slightly different approach, since I was creating this effect for non-real-time rendering.

{% include media.html type="post" name="antichamber-reference.jpg" class="w-3/5 mx-auto" %}

# Breakdown

I created this effect with the magic of compositing. Layers were utilzed to render multiple versions of the same scene and were mixed together using masks. In a higher-level sense, I have 2 different animations: one of the ant and one of the ring. I used 5 layers to capture both of these animations and layer masks to composite them.

{% include media.html type="post" name="nodes.jpg" caption="The Compositing Nodes" class="w-4/5 mx-auto" %}

For each frame of the animation, I have 3 versions of it: the cube has walls over both sides, the cube has one side open to view the ring, and the cube has the other side open to view the ant. The masks, which are the sides of the cube that we show/hide, are used to select the scene of the ant and ring and put them over the original media.

{% include media.html type="post" name="layers.jpg" caption="Here's A Close Up On the Layers Used (Including the Final media)" class="w-4/5 mx-auto" %}
