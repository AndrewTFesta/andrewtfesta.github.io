---
layout: default
---

A place all for me to just ramble and rant. And you've come across this place. How unfortunate of you.

- [Latest Projects](#latest-projects)
- [Project Ideas](#project-and-paper-ideas)
  - [Honeynet Projects](#honeynet-projects)
  - [General Projects](#general-projects)
  - [General Papers](#general-papers)
  - [Fun and/or Useful](#fun-andor-useful)

# Latest Projects

## [AutoDrone](https://github.com/Adrang/AutoDrone)

The newest changes to my autonomous drone project is an replacing the flight controller stack with an RL-based, on-board flight controller. A pretrained agent is trained in AirSim to get a basic handle on controlling the motors. The agent is then transported to the RPi and continues training in the real-world.

## [SystemControl](https://github.com/Adrang/SystemControl)

A release has been created for the code related to my thesis. This release is linked to at the top of the readme. Work moving forward for this project is currently exploring the options outlined in the `Future Works` section towards the end of the thesis. 

## [Andrutil](https://github.com/Adrang/Andrutil)

The listener capabilities have been moved into a single module. Callback functions can now define an abstract signature taking a single argument that contains a dictionary of values. This allows for easier implementation of callbacks since all callback signatures are standardized.

# Project and Paper Ideas

## HoneyNet Projects

#### Transformers on Flows
#### Best Defense is a Good Offense

## General Projects

#### Intuitive Control Interface

- speech commands
- thought processes
- play game and learning to react
- what is intuitive? natural reactions to external stimuli

#### Gesture Controlled Humanoid Robot
#### Imitation Exoskeleton
#### Low-Noise Flight Controller

Most low-cost solutions for autonomous drones rely on a set family of flight controllers - ardupilot, mavlink, simpleflight. These all control the motors directly, using a system of sensors and speed controllers to monitor and adjust the speed of each motor (pids, control theory). An issue with this is transferring flight controllers onto a new system. PIDs can help alleviate the transfer, but they still assume a relatively small amount of correction is needed. Instead, an agent can be trained to learn to control each motor independent of any additional control systems, leading to unique systems and capabilities in flight. The system is also more responsive as it was trained on a particular configuration and inherently takes into account slight defects that may occur during manufacturing (frame, motor, weight/balance).

#### Hostile Environment Operation
#### Raspberry Pi Cluster

## General Papers

#### Expert Evaluation using EEG
#### Authentication Through EEG
#### Towards XAI of an Arbitrary Feedforward Neural Network through Input Modulation

# Fun and/or Useful

#### Thin-film Cutting Board Scale
#### Staircase Elevator Platform
#### Staircase Foldout Ramp
