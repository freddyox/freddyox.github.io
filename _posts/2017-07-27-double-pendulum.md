---
layout: post
title:  "Double Pendulum"
date:   2017-07-27
excerpt: "Simulating the double pendulum using RK4"
comments: true
image:  ""
cimage: "/images/double_pend/double_pend_thumbnail_v2.png"
categories: [simulation,SFML]
---

<span class="image left">
<img src="/images/double_pend/double_pend_long.png" alt="" width="99%" height="99%"/>
</span>

<p>
The double pendulum is a canonical classical mechanics problem to introduce
the concept of chaos; the description will therefore be brief.
First, find the equations of motion (EOM) using forces or
the Lagrangian method; this describes the angles and angular velocities of the two masses.
The derivation will not be done here as it is beyond the scope of this website, but
it is a must-do mechanics problem to solve for undergraduates.
The masses and pendula arm-lengths can be different which gives rise to interesting behavior, and
the initial angles are chosen with a flat random number generator.
The equations of motion need to be approximated, and in this case I used the Runge-Kutta method
otherwise known as RK4. In order to proceed with the simulation, a time variable is
needed to keep track of the evolution of the angles/angular velocities given some random initial
condition. A simple tracer routine has been added to follow the position of the masses,
and the alpha component decays as a function of position within the tracer C++ vector (I limit
the number of traces to roughly 200-300 to avoid messy patterns).
A small video displaying the simulation output may be seen 
<a href="https://youtu.be/CuhPbDQs3eY">here</a>. Note that with very little
effort, the double pendulum simulation may be used as a spirograph generator. In this
case, the RK4 method (and equations of motion) is discarded and one simply chooses angular velocities
and arm-lengths.
</p>

<figure>
<img src="/images/double_pend/double_pend_rainbow.png" alt="" width="99%" height="99%"/>
<figcaption>
Fig. 1 - The double pendulum simulation with rainbow (fading alpha) tracers on the second (first) mass.
</figcaption>
</figure>