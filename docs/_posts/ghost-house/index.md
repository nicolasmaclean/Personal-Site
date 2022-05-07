---
permalink: /_posts/ghost-house/

title: Ghost House | Game Lab Spring 2022
description: I worked in a team of ~40 people over the course of semester to create a narrative driven, 3rd person game in Unity.
tags: [Unity, C#]
---

{% include video.html type="post" name="trailer.mp4" class="pc-100 no-side-margin img-center" %}

Ghost House is a 3rd person, narrative driven game created in Unity 2019. The player explores the narrative and environment by performing 100+ interactions with the scene that trigger dialog between characters, move or manipulate items in the house, and even talk to a bird.

A direct download can be made [here](https://github.com/metalac190/GhostHouse/releases/download/Release/GhostHouse_Release.zip) from the GitHub release and you can find our GitHub rpository [here](https://github.com/metalac190/GhostHouse)!

## What is Game Lab

Game Lab is a course at UTD led by professors Tim Lewis and Adam Chandler. They assembled a team of ~40 people composed of artists, designers, programmers, and SFX artists. They provided a design document to serve as a starting point for the semester, then turned over the game to the students.

The professors do a great job balancing creative freedom for the students and setting defined boundaries for the project. There was extremely little that they said we _must_ do or _can't_ do, but rather they explained why a different approach might be better or pointed issues with our ideas. They did, however, setup a system to mimic a production setting. We had milestones (alpha, beta, content lock, etc.) to track project progress, clearly defined teams (and to a smaller extent, heirarchy), and lectures oriented to teaching GitHub and other necessary skills for large projects.

## What I Did

My main role on the team was the implementing and teaching of the dialog system and acting as a general game programmer where necessary. More specifically, I integrated [Yarn Spinner](https://docs.yarnspinner.dev/) and extended custom DialogViews to fit the needs of our game.

{% include image.html type="post" name="dialog.png" class="pc-80 no-side-margin img-center"%}

I chose to leverage Yarn Spinner as a part of our dialog system for 2 reasons: the twine-like syntax makes it easy for narrative designers to pick up and quite honestly I saw this as an oportunity to learn more about Yarn Spinner. Its an open source project that is still growing quite fast and I saw them as the best option over other Unity oriented packages short of creating my own system.

While learning how DialogViews, I spent a large portion of time looking through Yarn Spinner's Unity integration and their .net implementation. I found it extremely useful for learning more about C# and .net ways of designing code and what I found extremely interesting: meta-programming.

C# Attributes and Unity's PropertyAttributes are powerful. My current favorite use case comes as editor scripting. Drawers for PropertyAttributes can enable expose the functionality of Editor scripting without forcing the burden of updating a components editor script for _every_ change in a component script. Although I didn't have the chance to realize this curiousity in this project to a great extent, I have in my personal Unity package, [Gummi](https://github.com/nicolasmaclean/Gummi-Unity).

## Conclusion

The 2 main realities I had to face as a member of a production: work gets cut and you don't always get your way.

I spent a non-trival effort setting up systems with Yarn Spinner that allowed narrative designers to script events in within the narrative script like trigger animations, timelines, etc., but it didn't quite fit our production context. Our programming team discussed it and Tim Lewis gave us some input. The general consensus was in a long-term project, this is exactly what we would want to do, but the semester length of game lab doesn't quite call for such a comprehensive solution like that. I more or less agree with the decision, but it still felt quite disappointing at the time. I had to push myself past that and continue working.

When you work on a team, comprises have to be made sometimes. There were times that I was asked to do something (or the programming team) that I thought was simply a bad idea, but at the end of the day my job was implement systems and teach them to whoever needed it. We had a team of artists and designers to make decisions and I needed to trust them to do their job as they mine. Of course, I would respectfully attempt to discuss what I didn't like about the idea with them or alternatives that I might have come up with.

Having taught myself a large portion of what I know about programming, I have not had many opportunities to work on teams (and certainly little with such talented artists, designers, and programmers). However, I'm excited that is changing. My skills have finally risen to the point that opportunties like this class and game jams are being quite more common for me. It's been an absolute pleasure having other fill in roles that I could not as well as them (if at all) and I can work with them. I learned a lot about how to work with designers and artists, and I learned a lot programing from the rest of our programming team.
