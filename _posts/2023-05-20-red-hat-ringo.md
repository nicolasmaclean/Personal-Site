---
title: Red Hat Ringo | Technical Director
description: As Technical Director of the UT Dallas Animation Lab, I supported our Maya pipeline and extended it to Unreal Engine 5.1
categories: [programming, tool]
tags: [Unreal, Maya, Python, PyQt5, PySide2]
---

Without giving too much away, Red Hat Ringo is a stylized short film about the infamous outlaw *Red Hat Ringo*. An eyecatching combination of 2D and 3D animation is used to tell the outlaw's backstory and how the outlaw stops a group of bandits from robbing a bank.

This film was created by the UT Dallas [Animation Lab](https://www.atec-animgames.com/anim-lab) during the spring and fall of 2023.

<details>
    <summary> What is Animation Lab? </summary>

    Animation Lab is a lab class at UT Dallas that attempts to simulate a 3D film studio. A team of ~40 students lead by professors (directors) create a short film across 2 semesters (roughly 1 year).
</details>

---

## Engineering Overview

For this film, we made the switch from Arnold to *Unreal 5.1* for rendering the film. We chose to use Unreal for 2 reasons: faster render times and growing industry usage. For Bad Timing, we saw rendering take as long as 30 minutes a frame, but Unreal will take at most a couple of minutes.

As of May (half way through production), I have ported our file launcher, setup a simplified artist facing render system with the Movie Render Queue, and the surfacing area of our source control.

### File Launcher

{% include image.html type="post" name="FileLauncher.png" class="w-4/5 mx-auto" caption="Our Unreal Project Launcher" %}

Our file launcher uses data about our project gathered with ShotGun's API to allow artists to open assets or shots at specific stages of the pipeline. This will also automatically handle creating default files (if this asset/shot hasn't been created yet) and run version control logic related to local/network versions.

This is a poin that almost every artist on the project will use regularly, so I think further investment into UX will have a relatively high return value. Optimizing data queries with ShotGun could reduce load times. I also believe a more advanced UI layout that provides a table of information about assets/shots could reduce time artists spend looking for files. As of now, this remains a stretch goal or possibility. We are continuing onwards to flesh out our pipeline for animation and lighting next!

### Rendering

Although the *MovieRenderPipeline* plugin is an approachable tool out of the box, I was tasked with automating the render process to ensure consistent results across the project. This has the added bonus for removing one more thing lighting artists have to learn as they transition to Unreal.

{% include image.html type="post" name="Rendering.png" class="w-2/5 mx-auto" %}

How the render process works:

1. Load a render preset object from an XML file stored on our network drive
2. Use my custom *Renderer* class' static function to render the main level with the loaded preset.
   1. Create an empty queue
   2. Add a job to the queue (with the preset and level)
   3. Run the queue


This works by loading a rendering preset from an XML file stored on our network in the project-specific configs. I then have a set of convience methods and class to sit on top of Unreal's Python API that simplify the process of loading the queue and rendering it. The loaded preset can be sent there and the render begins.

### Surfacing and Source Control

The surfacing stage of our pipeline (for Unreal) imports a uv'd model (from the Maya portion of the pipe) and exports textures, materials, and material assignments. This allows any stage beyond surfacing to read published surfacing data and apply that to assets.

Behind the scenes, I have larger serialization system that is used to store materials, textures, material instances, material assignments, etc. into a JSON file (or as supporting files) or read/apply that data to a scene from a JSON file. I will not do a deep dive here, but in the future I may or I'll post the code to my [GitHub](/github).

---

## Conclusion

I've enjoyed my time in Unreal 5.1 with Python. The documentation can be scarce or the API a little odd but the ability to use such a friendly scripting language to power Unreal projects is amazing. This makes it so simple to extend existing Python pipelines from other DCCs to Unreal.
