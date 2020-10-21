---
layout: default
---

- [Areas of Interest](#areas-of-interest)
- [Master's Thesis](#masters-thesishttpsgithubcomadrangsystemcontrol)
- [Work Projects](#work-projects)
- [Personal Projects](#personal-projects)
  - [AutoDrone](#autodronehttpsgithubcomadrangautodrone)
  - [Andrutil](#andrutilhttpsgithubcomadrangandrutil)

# Areas of Interest

## AI/ML
## Multi-agent systems
## HCI/ACI

# [Master's Thesis](https://github.com/Adrang/SystemControl)

My master's thesis started as an effort to explore the feasibility of a brain-controlled interface (BCI) for real-time intuitive control of a simulated character. This project fell into the common trap of being too ambitious; numerous components of the project would have been worthy of a research or development project, unto themselves. Some of these components are included towards the end of the thesis in the `Future Works` section.

ultimately, the research for my thesis delved into how the way the data was represented affected a model's ability to classify the event-related potentials recorded during an EEG session. Paying homage to the original intent of the research, the model was evaluated not only based on accuracy, but also on time to react.

The results showed that, using current recording methods and understanding of the brain, a BCI system for real-time control is infeasible. However, it is important to note that the model was able to perform well, given the task. It was able to achieve over 85% accuracy, with some tuning, and could likely have performed even better if a model was designed specifically for the task. The limiting factor was the amount of time it took to record the samples. This effectively was the "real-time" component of the system. In order to achieve adequate performance, over 0.2 seconds of samples had to be recorded, and literature suggests that the minimum amount of time should be upwards of o.25 to 0.35 seconds, which was supported by the initial findings of the model. Gamers will complain about input delays of 50 ms, so a delays of >200 ms can be taken as unacceptable for an input control system.

Improvements to the system can come in a few veins.
 
- The ML approach
- The data that is recorded (ie. the theoretical neuroscience)
- The hardware used to record the data (ie. the EEG headset).

# Work Projects

Each project below either has a paper covering it, or it has been approved for dissemination.

# Personal Projects

## [AutoDrone](https://github.com/Adrang/AutoDrone)

This project was originally undertaken to fulfill the requirements for a graduate level independent study towards the completion of the Master's of Computer Science at Rochester Institute of Technology.

The ultimate goal pursued during this project was two-fold: to explore machine learning and control systems on a resource-constrained system and to offer practical experience into the design decisions required for building such a system. An additional benefit is the end-creation of a computer controlled drone which can be readily extended for control by other control mechanisms, such as BCIs or VR headsets.

## [Andrutil](https://github.com/Adrang/Andrutil)

This is a general-use library of functions I commonly find useful when developing my projects. The flavor of each type of function is broken into one of several categories.

- ML
  - reading
  - preprocessing
  - training
  - evaluation
- Multiprocessing
- Design patterns
  - Watchdog
  - Observer/Observable
- Miscellaneous functionality