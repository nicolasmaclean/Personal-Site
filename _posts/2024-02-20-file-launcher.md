---
title: Qt and C++ File Launcher
description: I recreated a PySide2 file launcher from another project in Qt with C++ and leveraged ShotGun's REST API.
categories: [programming, tool]
tags: [Maya, C++, ShotGun, REST API]
---

For a different [project](/posts/2023/05/red-hat-ringo/)), I inherited a "File Launcher" that removes manual file management from artists, similar to ShotGun Toolkit's File Manager. It shows assets and shots from a ShotGrid project and provides options to open an asset or shot for a specific discipline. This project is an iteration on the our File Launcher to decrease our artists' start up time and as a chance for me to become more comfortable with Qt and C++. The choice to use C++ also forced me to leverage ShotGun's REST API, as opposed to the Python API.
