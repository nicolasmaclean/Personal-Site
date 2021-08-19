---
permalink: /projects/MIPS/
layout: post

title: MIPS Disassembler (Hex to Assembly)
description: I consider the different steps of creating a scene.
tags: [MIPS, programming]
---

{% include video.html type="project" name="MIPS.mp4" caption="Here's a Demonstration" class="pc-100 no-side-margin img-center" %}

I created this project with Nick Weldum for the Computer Architecture class. The objective was to write a program in MIPS assembly language that would read lines of hexadecimal from a file and output a corresponding MIPS assembly file. I had a lot of fun with this project. It was a great way to demonstrate our understanding of how MIPS works under the hood, file I/O, and other technical skills.

## The Process

Each line of hexadecimal needed to be converted from a string to an integer and separated into its pertinent parts using bit manipulation.

{% include image.html type="project" name="instruction-diagram.jpg" caption="the 3 instruction formats of MIPS" class="pc-40 no-side-margin img-center" %}

The real crux of the program is how the developer matches the code to its corresponding string for output. I'm sure a large portion of the class hard-coded if statements to match them, but I borrowed an idea from MIPS. I produced a table very similar to a MIPS processor's error jump table that instead of matching error codes to memory addresses, I matched opcode/funct codes to their corresponding strings.

This allowed me to very easily and rapidly add more than the required 18 instructions. My program was able to disassemble 43 different instructions.