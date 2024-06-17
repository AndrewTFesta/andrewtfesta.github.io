---
title: Research
layout: default
---

# Areas of Interest

## Artificial Intelligence and Machine Learning

Today, AI/ML seems to be the hot new thing, but it has long been featured in the realm of science fiction. Jarvis in <em>Iron Man</em>, HAL in <em>2001: A Space Odyssey</em>, and WOPR in <em>WarGames</em>, to name a few. My interest seems to stem from creating a system whose intelligence surpasses our own, that can ultimately reason about itself and its existence, and grow in a measurable way. Software engineers already have a reputation for developing God Complexes, and I think AI/ML researchers and engineers take this one step further.

For a concrete example, my earliest foray into the practical side of implementing AI was in 11th grade when some friends (Kelly, Vinh-Kha, and Tommy) and I competed in the GE programming competition. The challenge that year was to create an AI that could play Tetris. Quick disclaimer: I am terrible at the game. Our approach was to use a genetic algorithm that used state features as its genome. It was all coded (terribly) in Java and let run for several days on various laptops and school computers. The best part was watching it run and improve over time. It was our little baby that we were watching grow, both visually and numerically.

In hindsight, we really had no idea what we were doing. Most of it was a lot of Googling and trial-and-error. It's kind of surprising that we got a functional system out of it. Ultimately, we got crushed. But it was a fun and tremendous learning experience.

## Multi-Agent Systems

In nature, groups of animals often work in tandem towards a single goal. By working together, they can accomplish much more than they could on their own, giving rise to the concept of <a href="https://www.thwink.org/sustain/glossary/EmergentBehavior.htm">emergent behavior.</a> Packs of wolves, hives of ants, and flocks of birds are all examples of individuals coming together to be more than the sum of their parts.

Bees are one of the best understood and most widely known examples of a super-organism. They use a little dance routine to convey to other members of a hive how suitable a location the individual found is for food sources.

> The waggle dance increases a colony’s ability to collect food not only because it helps a colony’s foragers exploit food sources that are hard to find, but also because it helps them focus their efforts on the food sources that are best to exploit. In other words, the ability of a colony’s foragers to share information about food source location and quality endows the colony with a collective decision-making ability, or “swarm intelligence”, regarding where its foragers should work. (Seeley 2012)

Starlings exhibit this behavior in the form of murmuring. When flying as a group, an individual starling will take on the flight characteristics of the 6 nearest starlings, leading to some <a href="https://www.youtube.com/watch?v=V4f_1_r80RY">eerie, but beautiful flight patterns.</a>

As a side note, murmuration refers to a flock of starlings. Plus, it's just a fun word to say. Murmuration.

Locusts take on a rather interesting, fascist-esque type approach. As a collective, they encourage absolute conformity by physically punishing any locust that gets out of line, through biting or even cannibalism. In this context, "out-of-line" refers to an individual action that differs from the other or nearby locusts.

## HCI

As far as HCI, my interests lie primarily in understanding and developing intuitive interfaces through non-invasive sensing methods (e.g. EEG, EMG). But why limit ourselves to humans? We live in a world filled with amazing and interesting creatures.

### Intuitive Control Interfaces

Natural language is often seen as one of the most intuitive forms of communication. As humans, we (generally) start speaking from a young age and are used to talking to others when expressing ideas or giving commands. However, this ability to clearly articulate desired commands falls apart under many scenarios when an intuitive control interface would be most useful. Namely, in situations of panic or uncertainty.

During pilot training, my CFI hammered home the importance of remaining calm when things start to go wrong. Otherwise, you become overwhelmed and inevitably make poor decisions. But this is a skill and is hard to master. When presented with a problem, the natural reaction of most people is to panic, and in times like these, people often have trouble articulating the correct course of action, particularly verbally to others.

However, intuitively, we often <em>know</em> what we want to happen; we just have trouble communicating. But consider the example of a drone flaying at a wall. Naturally, we will tilt our body as if the drone will respond to our actions. The same when playing Mario Kart. Humans tend to project their actions and beliefs onto others (alive or otherwise), so why not leverage that to design more intuitive control interfaces?

In some ways, this is analogous to making an existing ICI work outside the lab. The real-world is messy and hostile. To make these interface systems work well in the wild, we have to make sure we account for this unpredictability.

### Animal Control Interfaces

Our pets are an important part of many of our lives, and so, the animal portion of it all comes from two aspects. First, who wouldn't want to talk to their cat? In this same vein, while I was working on my thesis, one of my test subjects asked about making a headset for her bearded dragon.

The second is with regard to my sister's work with primates and on conservations. One thing she stresses is the importance of establishing trust, especially in situations of duress. She has been bitten and scratched (from Sweetey and her coworkers) on numerous occasions when something happens to fall nearby.

In addition, I am interested in automated search and rescue (from my time in civil air patrol), animal-computer interaction (who doesn't want to talk with their cat?), and multi-agent systems (swarm systems, emergent behavior, and coordinated cooperation).

## Master's Thesis<a href="https://github.com/Adrang/SystemControl"><img class="codelink" src="assets/images/link.png" alt="Link to code"></a>

My master's thesis started as an effort to explore the feasibility of a brain-controlled interface (BCI) for real-time intuitive control of a simulated character. This project fell into the common trap of being too ambitious, comprised of numerous components of the project would have been worthy of a research or development project unto themselves. Some of these components are included towards the end of the thesis in the `Future Works` section.

Ultimately, the research for my thesis delved into how the way the data was represented affected a model's ability to classify the event-related potentials recorded during an EEG session. Paying homage to the original intent of the research, the model was evaluated not only based on accuracy, but also on time to react.

The results showed that, using current recording methods and understanding of the brain, a BCI system for real-time control is infeasible. However, it is important to note that the model was able to perform well, given the task. It was able to achieve over 85% accuracy, with some tuning, and could likely have performed even better if a model was designed specifically for the task. The limiting factor was the amount of time it took to record the samples. This effectively was the "real-time" component of the system. In order to achieve adequate performance, over 0.2 seconds of samples had to be recorded, and literature suggests that the minimum amount of time should be upwards of o.25 to 0.35 seconds, which was supported by the initial findings of the model. Gamers will complain about input delays of 50 ms, so a delays of >200 ms can be taken as unacceptable for an input control system.

### Improvements to the system can come in a broad veins:

- The ML approach
- The data that is recorded (i.e. the theoretical neuroscience)
- The hardware used to record the data (i.e. the EEG headset).

### Machine Learning

When constructing the images, the time-series nature of the problem was handled by concatenating multiple samples together in order to form a 2D image of a signal over time. A better approach may be to use an architecture that is particularly suited for time-series based classification, such as a recurrent neural network. While it may not prove more effective to use this other type of architecture for classification of these signals due to the increased difficulties in training such a network, it would provide additional insight into the strengths and weaknesses of the data representation, particularly with respect to the effect of the interpolation function and its ability to recreate the electromagnetic fields at play.

### Data

A point that cannot be emphasized enough is there is no substitute for clean data. The age-old adage is once again proven correct: garbage in means garbage out. This holds particularly true in domains where the data is inherently dirty and difficult to work with. While ideally this data would be collected as cleanly as possible, post-processing is possible which is able to isolate the signal from the noise after it has been recorded. The work of this research took several steps to perform this data cleaning, including filtering out specific frequency ranges; However, the issue of identifying artifacts in the data was not addressed.

### Data Cleaning and Noise Isolation

Normally, this task would be undertaken by a subject-matter expert who would mark bad regions of the data stream for removal. Another approach is to consider that most EEG signals are non-Gaussian in nature, meaning that principal component analysis will likely not be an effective tool to separate the signals. Instead, it is possible to use independent component analysis <a href="https://papers.nips.cc/paper/1091-independent-component-analysis-of-electroencephalographic-data.pdf">to separate overlapping events, to remove line noise from the data,</a> and <a href="https://behavioralandbrainfunctions.biomedcentral.com/articles/10.1186/1744-9081-7-30">to automatically detect artifacts that may be present due to muscle movement.</a>

### Field Reconstruction

Taking a step back from the end result of a signal image, one of the strengths of the data representation is its ability to interpolate between discrete points in order to partially recreate the electromagnetic field produced by the brain. In the research conducted, only the $C3$, $CZ$, and $C4$ electrode positions were used. This allowed for the interpolation function to operate on the points as if they were on the same x-y coordinate plane due to the fact that these locations are next to each other laterally on the head. However, increasing the spatial resolution of the system breaks this lateral assumption. Remedying the situation only requires having the interpolation function operate on the points in 3D space rather than 2D space. The signal image then becomes more akin to a classic montage or band-plot representation employed by neuroscience domain experts. Feeding it to a classifier then either requires use of a recurrent convolutional neural network or altering the convolutional filter from a 2D filter to a 3D filter, both of which are readily supported by Tensorflow.

### Hardware

The hardware boards for performing EEG collection have come a long way in the past decade. However, cost is often directly tied to spatial resolution. For the task of motor-imagery, high spatial resolution is not as important a factor, but it is still a desired characteristic of any BCI or EEG system.

### Custom EEG Board

Creating a custom board for data acquisition is meant to serve two purposes. The first is an attempt to reduce the cost and improve upon the spatial resolution. The second attempts to increase the control offered by creating the system from scratch. While not a trivial task, it is made somewhat easier by the increase of open-source projects in the space. The <a href="https://github.com/OpenBCI/Ganglion_Hardware_Design_Files/blob/master/Ganglion_SCH.pdf">circuit schematic</a> for the Ganglion is open-sourced by OpenBCI and has an active community aiding in its development. This is possible as the main business model of OpenBCI seems to not be focused with the intellectual property of the boards, but rather the convenience of having them build and provide the board with minimal oversight required of the hobbyist. Unfortunately, active work on the hardware of the board seems to have stalled.

### Active Electrodes

Beyond creating a board that offers at least comparable initial performance to the Ganglion or the Cyton, the electrodes used for data acquisition could theoretically be greatly improved by using active electrodes versus the passive electrodes provided when purchasing a board or headset from OpenBCI. Where passive electrodes essentially act as simple probes measuring the electrical potential and sending this signal to the board for amplification, active electrodes perform a level of amplification at the point of collection. This effectively increases the signal-to-noise ratio of the data as the effect of ambient and environmental noise is less pronounced with respect to the signal after having traveled along the wire of the electrode to the board.
