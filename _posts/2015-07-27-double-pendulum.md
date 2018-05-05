---
layout: post
title:  "Double Pendulum"
date:   2015-07-27
excerpt: "Simulating the double pendulum using RK4."
image:  ""
cimage: "/images/double_pend/double_pend_thumbnail_v2.png"
---

<figure>
<img src="{{ "/images/double_pend/double_pend_v3.png" | absolute_url }}" alt="" />
<figcaption>
Fig. 1 - The double pendulum simulation for two different initial conditions.
</figcaption>
</figure>

<p>
The double pendulum is a canonical classical mechanics problem to introduce
the concept of chaos; the description will therefore be brief.
First, find the equations of motion using forces or
the Lagrangian method; this describes the angles and angular velocities of the two masses.
No attempt will be made to derive the EOM as I've done it many times and do not have
an interest in latexing classical mechanics.
The masses and pendula arm-lengths can be different which gives rise to interesting behavior.
The initial angles are chosen with a flat random number generator.
The equations of motion need to be approximated, and in this case I used the Runge-Kutta method
otherwise known as RK4. The last piece of the project is the visualization, so we need
a method to update the angles and angular velocities using a time variable. I added a simple
tracer routine to follow the position of the masses, and the alpha component
decays as a function of time. Additionally, it is a simple extension to change
the tracer color as a function of time or coordinates.
A small video displaying
the simulation output may be seen on my
<a href="https://youtu.be/CuhPbDQs3eY">youtube channel</a>. Note that with very little
effort, the double pendulum simulation may be used as a spirograph generator.
</p>