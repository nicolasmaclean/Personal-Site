---
title: Bad Timing | Technical Director
description: As Technical Director of the UT Dallas Animation Lab, I supported our Maya tools/pipeline.
categories: [programming, tool]
tags: [Maya, Python, PyQt5, PySide2]
---

{% include video.html type="post" name="BadTiming_Logo.mp4" class="pc-80 no-side-margin img-center" %}

# What is Animation Lab

Animation Lab is a course that aims to simulate a film studio environment. We had ~50 people over the course of 2 semesters (+1 more for a small pre-production team), during which we create a short, animated film. For Bad Timing (Spring and Fall 2022), we used Maya for everything from modeling to lighting with Substance Painter, Nuke, etc.

Our pipeline includes a source control system tailored to version files at each stage of the pipeline and publishing system that extracts specific data from each stage to support areas down the pipe. We also include other tools for encouraging modeling best practices, creating Maya assemblies, texel desnity checker, etc.

## Bad Timing

I joined in the latter half of the film. Our pipeline was started a couple of years ago, so joining late didn't matter too much. I still had to overcome joining a project with a large, pre-existing codebase. My professor, Casey Johnson, didn't just throw all of that code at us. He gave us access to a handful of the modules. My fellow TD and I spent time looking around and experimenting to learn more about the pipe. As I settled in, I shifted to bug fixes and adding small features.

### Network

The biggest struggle we faced during Bad Timing was our network drive. A 3rd party provides the school with this drive for free and unforuntately the quality of their service has decreased over the years. It has gotten to the point that working with files on the network is so slow, we've been updating our code to minimize requests to the network or circumvent it altogether.

In practice, we leave our compiled code, project-wide data, and source files up there. But we download a copy of working files, work locally, and send versions/publishes back to the network. For the most part this is easy. Specific types of work like surfacing, hair grooms, assemblies, are little less simple. We have to carefully analyze those files before opening them for dependencies and make sure to download those too. It's a teidous process of modifying each stage of the pipe to do this, because we need to be extremely careful to not lose work.

I spent time upgrading our surfacing and xgen grooms to work locally. Unfortunately we had to ditch xgen for the final film, but it'll be there for the future.

---

## Reflection

Although I have loved this opportunity, there have been some tough portions. Somedays I just want to sit and code. Most of those times I can't. There are bugs, artists, or other issues that demand my attention, but that's just not how working is. No job is all sunshine. 

The aspect I had loved the most, was the chance to work so many talented artists and my fellow TD. I've been collaborating directly with users of my work. They give me feedback, I watch how they use my tools and tweak accordingly, and they request cool things from me.

The unique position to work with such a diverse group of people is one of my favorite parts about tech art. Programmers in other fields, to some degree, are stuck in their own little bubble with other programmers. But I'm working with all of these amazing artists!