---
layout: post
title:  "Double Pendulum"
date:   2015-07-27
excerpt: "Simulating the double pendulum using RK4."
image:  ""
cimage: "/images/double_pend/double_pend_thumbnail.png"
---


<p><span class="image left"><img src="{{ "/images/double_pend/double_pend.png" | absolute_url }}" alt="" /></span>
The double pendulum is a canonical classical mechanics problem, and a simulation does not
require much explanation. First, find the equations of motion using forces or
the Lagrangian method; this describes the angles and angular velocities of the two masses.
The masses and pendula arm-lengths can be different which gives rise to interesting behavior.
The equations of motion need to be approximated, and in this case I used the Runge-Kutta method
otherwise known as RK4. The last piece of the project is the visualization, so we need
a method to update the angles and angular velocities using a time variable. I added a simple
tracer routine to follow the position of the second mass. A small video displaying
the simulation output may be seen on my
<a href="https://www.youtube.com/watch?v=N2kSgbwq8nc">youtube channel</a>.
</p>
