---
permalink: /projects/cellular-automata.html
layout: post

title: My Cellular Automata Framework
description: I explore my experience creating Cellular-Automata-JS
tags: [JavaScript, React]
---

{% include video.html type="project" name="Cellular Automata.mp4" class="pc-100 no-side-margin img-center" %}

I, as well as many others, have been drawn to Cellular Automata and the many endless rulesets we can create. At its core, cellular automata is a discrete simulation, usually in 2D or 3D space. We define a ruleset to specify how cells may change (or remain) states and provide an intial seed, or configuration of cells. In discrete steps of time, the simulation uses the ruleset to update cells as necessary.

I attempted to create a JavaScript framework for building custom simulations. I separated the logic of the simulation, from the rendering, and interactivity, to allow the developer to replace and customize anything they needed.

The current state of simulation, its ruleset, rendering functions, and other goodies may be saved into a JSON file, so the user could load it up later. The save file could also be edited as plain text, so the user could also adjust it as they like or could even create their own custom save files. Some examples of modifications: states of cells may be changed, custom rules can be written as JavaScript, and the rendering functions can be adjusted to utilize any JavaScript methods to draw on the canvas

[Link to the README for this project](https://github.com/nicolasmaclean/Cellular-Automata-JS#readme)

## What I Would Do Differently

This project comes to about 4 or 5k lines of code, so there's definitely lots of things that could be refactored or done better. But there's really one thing that sticks out. The save/load system. I love the ability to mod the save/load files to such a great extent through JavaScript, but for my site to load (and run!) JavaScript from the user is certainly less than ideal. I don't think there's any security concern for it at the moment, but there are definitely better ways to do what I did.

## Specific Challenges

As I was creating this project, I wanted to solve the problems myself, so I avoided looking at how others have created similar projects. I had a lot of fun thinking of and trying new features. My favorites were the save/load system and the infinite 2D space the simulation takes place.

I've come back to this project a couple times since finshing it to try writing some custom rules. I've been amazed at how easy it is to create completely new simluations by writing 2 or 3 lines of code in a save file. I was able to quickly simulate gravity by having a "sand" cell check if there is a sand cell underneath, and it would move down in sense if not.

{% include image.html type="project" name="gravity.gif" class="pc-80 no-side-margin img-center" %}

I'm also quite proud that I was able to figure out how to deal with an infinite 2D space. This bit I did do a little bit of research. I found the concept of a sparse matrix on Wikipedia and ran with it. All of the cells in the simulation with the default state aren't stored and assumed to have that state, so the only data that is stored are the states of cells that are not the default.