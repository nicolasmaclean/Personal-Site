---
title: Maya Procedural Building Tool
description: I developed a Maya tool using Python and PySide2 that creates randomized building by stacking pieces of a modular kit. 
categories: [tool]
tags: [Maya, Python, PySide2, PyQt5]
---

{% include media.html type="post" name="demo.mp4" %}

This tool was created throughout the Spring 2022 semester in Scripting for Animation. As we learned more about Python, Maya, and PySide2 the tool evolved.

The Stacker tool creates randomized stacks of objects from a set of pools.

## Development

Professor Casey Johnson split development into 3 phases: base stacking functionality, 1st pass gui, final gui and features.

The first phase simply stacked 3 transforms in the Maya scene on top of each other. This is done by passing the names of 3 transform nodes to `stack_objs`.

```java
stacker.stack_objs(trans_bot, trans_mid, trans_top)
```

During the second phase I built a gui using PyQt's VBox and HBox layouts to organize buttons and line edits. The selection mechanism allows the user to create pools of "parts" that are used to create stacks. When a stack is created, a part is randomly chosen from the appropriate pool and duplicated.

As seen in my demo, I quickly realized the potential applications for this tool. I used a modular set of building I found on the Synty Store to easily create randomized buildings.

{% include media.html type="post" name="gui_first.jpg" class="w-3/5 mx-auto" caption="1st Pass GUI"%}

The final iteration of the project allowed further parameterization with adjustable stack sizes and separation of the stacks. Additionally, a TreeViewWidget (on the right) displays the stacks created by the user to allow easy selection/viewing and XML "Assembly" files may be read to organize stacks' position in the scene.

{% include media.html type="post" name="gui_final.jpg" class="w-3/5 mx-auto" caption="The Final GUI"%}

## Conclusion

This project was extremely satisfying to work on. The incremental and tangible progress felt rewarding as I learned more about Python, PyQt, and Maya.

It also filled me with anticipation for the future. As a programmer, I find great pleasure in helping artist (with much greater skill than me) realize their vision. The Scripting for Animation class has led me to join Animation Lab for Fall 2022, so I'm excited to work with the talented artists at UTD.
