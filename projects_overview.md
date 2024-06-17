---
title: Projects
layout: default
---

# Projects

<hr>

<table style="width: 100%">
  <tr>
    <th style="width:30%; text-align: center"><a href="https://github.com/AndrewTFesta/island_influence">Distributed Asymmetric Optimization</a></th>
    <th style="width:30%; text-align: center"><a href="https://github.com/AndrewTFesta/SystemControl">SystemControl</a></th>
    <th style="width:30%; text-align: center"><a href="https://github.com/AndrewTFesta/AutoDrone">AutoDrone</a></th>
    <th style="width:30%; text-align: center"><a href="https://github.com/AndrewTFesta/AndrUtil">AndrUtil</a></th>
  </tr>
</table>

## Distributed Asymmetric Optimization <a href="https://github.com/AndrewTFesta/island_influence"><img class="codelink" src="assets/images/link.png" alt="Link to code"></a>

This code was developed in support of research done on multiagent learning in cooperative asymmetric context.

- <a href="docs/pubs/raim___gecco.pdf">Reinforcing Inter-Class Dependencies in the Asymmetric Island Model</a>
- <a href="docs/pubs/influence_focused_learning___aamas.pdf">Influence-focused Asymmetric Island Model</a>

Multiagent learning allows agents to learn cooperative behaviors necessary to accomplish team objectives. However, coordination requires agents to learn diverse behaviors that work well as part of a team, a task made more difficult by all agents simultaneously learning their own individual behaviors. This is made more challenging when there are multiple classes of asymmetric agents in the system with differing capabilities that work together as a team.

The Asymmetric Island Model alleviates these difficulties by simultaneously optimizing for class-specific and team-wide behaviors as independent processes that enable agents to discover and refine optimal joint-behaviors. However, agents learn to optimize agent-specific behaviors in isolation from other agent classes, leading them to learn egocentric behaviors that are potentially suboptimal when paired with other agent classes.

This work introduces Reinforced Asymmetric Island Model (RAIM), a framework for explicitly reinforcing closely dependent inter-class agent behaviors. When optimizing the class-specific behaviors, agents learn alongside stationary representations of other classes, allowing them to efficiently optimize class-specific behaviors that are conditioned on the expectation of the behaviors of the complementary agent classes. Experiments in an asymmetric harvest environment highlight the effectiveness of our method in learning robust inter-agent behaviors that can adapt to diverse environment dynamics.

## SystemControl <a href="https://github.com/AndrewTFesta/SystemControl"><img class="codelink" src="assets/images/link.png" alt="Link to code"></a>

A release has been created for the code related to my thesis at RIT, <a href="docs/pubs/Data_Representation_for_Motor_Imagery_Classification.pdf"><em>Data Representation for Motor Imagery Classification</em></a>. The release in support of this publication is linked at the top of the README in the link repo.

The original intent had been to create and explore a system that allowed a person to use their mind to control a character in a simple 3d environment. I had played WoW with some regularity through middle school and parts of high school, and the company my mom worked for (eXp) had all their offices in a virtual, online environment. An effective brain-controlled interface seemed to be the best option for an intuitive control interface. Current methods tend to be anything but intuitive, however. Turn left by focusing more and turn right by calming your mind? You may be able to train your mind to perform those tasks on demand, but that is anything but intuitive.

### Intuitive Control Interface

- speech commands
- thought processes
- play game and learning to react
- what is intuitive? natural reactions to external stimuli

### Other Uses for EEG

Some quick and rough ideas regarding potential effective and appropriate uses for EEG data, gleaned from this work..

#### Expert Evaluation using EEG

<!--
A point that cannot be emphasized enough is there is no substitute for clean data. The age-old adage is once again proven correct: garbage in means garbage out. This holds particularly true in domains where the data is inherently dirty and difficult to work with. While ideally this data would be collected as cleanly as possible, post-processing is possible which is able to isolate the signal from the noise after it has been recorded. The work of this research took several steps to perform this data cleaning, including filtering out specific frequency ranges; However, the issue of identifying artifacts in the data was not addressed.

Normally, this task would be undertaken by a subject-matter expert who would mark bad regions of the data stream for removal. Another approach is to consider that most EEG signals are non-Gaussian in nature, meaning that principal component analysis will likely not be an effective tool to separate the signals. Instead, it is possible to use independent component analysis to separate overlapping events, to remove line noise from the data [32], and to automatically detect artifacts that may be present due to muscle movement [12].
-->

A prevalent issue with just about all machine learning projects is the access to data. And not just any data, but *good* data. After all: *Garbage in, garbage out.* However, it's common, especially when working a new, unconventional project, to not have access to a lot of high quality data we can use to train out systems. And even if you do have data, it's dirty and unlabeled. 

One way to address this is to use labeling services, like [Amazon's Mechanical Turk](https://www.mturk.com/). Maybe you want to tag all images of planes for image detection and classification. Or maybe you want to tag the general sentiment of a piece of writing for sentiment analysis. Mechanical Turk can help with that by letting you hire people to label it for these desired characteristics. However, there's still no guarantee these human labelers will get it right. Partly because they are, after all, just human. And partially because they may just not have the necessary expertise to recognize some of the nuances of the task.

Other options include:

- Generating training data as a starting point
- Augmenting a smaller dataset with transformations of existing data
- Manually labeling complex data yourself

But still there remains the issue of large amounts of high quality data. There may not be a holy grail, but we can still create new and better ways to address the task.

For this, we can look at using EEG, or other forms of biofeedback, to capture expert reactions to certain types of data. Similar to using EEG data for speech reconstruction, we first build a ground truth library for what a *reaction* looks like for the desired categories. For instance, if we want to classify between vehicles in images, we look at the EEG wave for when this expert recognizes an image matching this description. We then do this again for each type of vehicle. And finally, for images with no vehicles.

We could also do this as a pre-processing step. Cleaning is extremely challenging and time-consuming. Looking at brainwave patterns could lead towards an effective way of filtering good or bad data that is recognizable at a glance.  

Doing this, we can build up a well-labeled dataset for a lot of different forms of data. There likely will be issues that still require manual intervention, and there still exists the potential issues of either system or user failure. But it could be a quick and easy way to at least get started with some high-quality training data. With the additional benefit of then you can start to work on the model alongside collecting and labeling more data.

1. Irene Dowding, Stefan Haufe, and Michael Tangermann. Automatic classification of artifactual ica-components for artifact removal in eeg signals. Behavioral and brain functions : BBF, 7:30, 08 2011.
1. Ary Goldberger, Lus Amaral, Leon Glass, Jeffrey Hausdorff, Plamen Ivanov, Roger Mark, Joseph Mietus, George Moody, Chung-Kang Peng, and H. Stanley. Physiobank, physiotoolkit, and physionet: Components of a new research resource for complex physiologic signals. Circulation, 101:E215–20, 07 2000.
1. Iaki Iturrate, Luis Montesano, and Javier Minguez. Robot reinforcement learning using eeg-based reward signals. In IEEE International Conference on Robotics and Automation (ICRA), pages 4822–4829, 05 2010.
1. Scott Makeig, Anthony Bell, Tzyy-Ping Jung, and Terrence Sejnowski. Independent component analysis of electroencephalographic data. 8, 08 1996.
1. Dennis J. McFarland and Jonathan R. Wolpaw. Braincomputer interface use is a skill that user and system acquire together. PLOS Biology, 16(7):1–4, 07 2018
1. N. Al-Ghamdi, G. Al-Hudhud, M. Alzamel, and A. Al-Wabil. Trials and tribulations of bci control applications. In 2013 Science and Information Conference, pages 212–217, 2013.
1. Haider Hussein Alwasiti, Ishak Aris, and Adznan Bin Jantan. Brain computer interface design and applications: Challenges and future. In World Applied Science Journal, 2010.

<!--
#### Authentication Through EEG

### Time series classification
#### Recurrent Neural Networks
#### Transformers
-->

<!--
## SmartWoW <a href="https://github.com/AndrewTFesta/SmartWoW"><img class="codelink" src="assets/images/link.png" alt="Link to code"></a>
-->

## AutoDrone <a href="https://github.com/AndrewTFesta/AutoDrone"><img class="codelink" src="assets/images/link.png" alt="Link to code" ></a>

The newest changes to my autonomous drone project is an replacing the flight controller stack with an RL-based, on-board flight controller. A pretrained agent is trained in AirSim to get a basic handle on controlling the motors. The agent is then transported to the RPi and continues training in the real-world.

## AndrUtil <a href="https://github.com/AndrewTFesta/AndrUtil"><img class="codelink" src="assets/images/link.png" alt="Link to code"></a>

The listener capabilities have been moved into a single module. Callback functions can now define an abstract signature taking a single argument that contains a dictionary of values. This allows for easier implementation of callbacks since all callback signatures are standardized.

## Project Ideas

### Gesture Controlled Humanoid Robot
#### Imitation Exoskeleton
### Low-Noise Flight Controller

Most low-cost solutions for autonomous drones rely on a set family of flight controllers - ardupilot, mavlink, simpleflight. These all control the motors directly, using a system of sensors and speed controllers to monitor and adjust the speed of each motor (pids, control theory). An issue with this is transferring flight controllers onto a new system. PIDs can help alleviate the transfer, but they still assume a relatively small amount of correction is needed. Instead, an agent can be trained to learn to control each motor independent of any additional control systems, leading to unique systems and capabilities in flight. The system is also more responsive as it was trained on a particular configuration and inherently takes into account slight defects that may occur during manufacturing (frame, motor, weight/balance).

### Raspberry Pi Cluster

- Horizontal training
- Beowulf cluster
