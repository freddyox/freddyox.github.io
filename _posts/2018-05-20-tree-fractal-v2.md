---
layout: post
title:  "Tree Fractal II"
date:   2018-05-20
excerpt: "A significant upgrade to the previous tree fractal post and includes a
          random tree generator"
comments: true
image: ""
cimage: "/images/tree_fractal/tree_road_trip.png"
categories: [math,ROOT]
---

 <figure>
  <img src="/images/tree_fractal/tree_road_trip.png" alt="" height="99%" width="99%">
  <figcaption>Fig. 1 - A fractal tree using my "random tree generator"
  with the black/white option turned ON. The tree has been placed on top of a photograph
  of the Badlands that I took during a road trip (summer of 2012).</figcaption>
</figure>

## Overview of the Improvements
The tree fractal program may be seen by this video (not yet made, soon though).

<p></p>
I realized that I wanted to play with the fractal tree a bit more... My first
post may be seen [here]({{ site.baseurl }}{% link _posts/2016-05-08-tree-fractal.md %})
which includes an overview of the algorithm. The code has been extended/reformulated
to handle a variety of options in addition to a GUI interface; this is how the tree
gets interesting which I ignored the first time!
While I have written sliders, buttons, and number entries from scratch, I used the C++
<a href="https://root.cern.ch/root/htmldoc/guides/users-guide/WritingGUI.html">ROOT GUI widgets</a>
for this project which has been an absolute pleasure, making life much easier.
Furthermore, instead of simply representing a branch as a line, I included an option to
toggle between lines or user-adjustable trapezoids to give the effect that the diameter
of a branch/trunk decreases with height. The parameters that are now adjustable
using GUI widgets are the following:
<ol>
<li> the number of iterations to display </li>
<li> the number of branches to generate at a particular node (previously I only did 2, but
     this may now run up to 17 which gets computationally slow <i>very</i> fast)</li>
<li> the generation angle which controls the angle of branches in the <i>n+1</i> iteration
     relative to the <i>n<sup>th</sup></i> iteration </li>
<li> the length and width of the trunk </li>
<li> the trapezoidal gradient of a trunk </li>
<li> the branch width and length relative to the trunk </li>
<li> an asymmetry angle offset which yields asymmetric or biased towards one direction trees</li>
<li> an offset for the starting point of a branch </li>
<li> an option to turn the background back/white which automatically renders the
     tree white/black, respectively </li>
<li> an option to draw the branches in order/reverse (sometimes branches cover previous
     iterations, therefore this option is for convenience) </li>
<li> the option to change the tree color palette (15 options) which automatically applies
     a pretty gradient ranging from the trunk to the smallest branch. </li>
<li> the ability to randomly generate a tree in which the above parameters are tweaked
     according to various probability distributions. </li>
</ol>

<p></p>
 <figure>
  <img src="/images/tree_fractal/assortment_nsplits_small.png" alt="" height="100%" width="100%">
  <figcaption>Fig. 2 - Going clockwise and starting at the top left, the number of branches
  to generate at a new node is 3, 5, 8, and 9. The trunk length and branch ratio relative
  to the trunk have been adjusted to get a
  pretty picture (hence why GUI widgets are wonderful for this project).</figcaption>
</figure>
<p></p>

The ability to increase the number of branches at a node significantly changes the
structure of the fractal, <i>e.g.</i> see Fig. 2 which displays the unexpected
generation of a <a href="https://en.wikipedia.org/wiki/Sierpinski_triangle">Sierpinski triangle</a>
among others; this behavior was a huge surprise for me. See Fig. 3 for an example
of a tree with 4 branches generated a every node; it resembles the previous post but
much fuller. Note that the number of branch iterations needs to be monitored when tweaking
the number of branches to generated, otherwise too many lines are drawn and the program
inevitably crashes.
<p></p>
 <figure>
  <img src="/images/tree_fractal/nsplit_4_thickness.png" alt="" height="100%" width="100%">
  <figcaption>Fig. 3 - The number of branches generated at each node is 4, and the fractal
  has been generated with a modest angle of approximately 100 degrees.</figcaption>
</figure>
<p></p>

## Random Tree Generator
The random tree generator is useful for creating trees that visually look "natural" in
structure, see Fig. 1. There are a great deal of parameters to randomize; however, this
is what I did:
<ol>
<li> Change the number of branches to be generated at a particular node 10%
     of the time using a flat random generator - I do not want the change to be large, and
     I adjusted this number by +/- 1 </li>
<li> 10% of the time, change the length of the branch using a Gaussian distribution
     where the standard deviation is small, specifically 10% of the length of the branches
     that would normally be generated </li>
<li> Change the generation angle with a Gaussian distribution (std dev = 10 degrees)
     33.3% of the time </li>
<li> Change the branch starting position with a Gaussian distribution (std dev = 10% of
     the normal branch length, and we must take an absolute value to avoid strange behavior)
     40% of the time </li>
</ol>
These parameters can all be changed, obviously, but too many changes yields wild results; therefore,
it is best to control how often a Gaussian (or flat) wiggle occurs. See Fig. 4
for another example of the random generator with a color gradient.
<p></p>
 <figure>
  <img src="/images/tree_fractal/random_v2.png" alt="" height="100%" width="100%">
  <figcaption>Fig. 4 - An example of the random tree generator; note that Fig. 1 also
  is randomly generated, but in black and white (and placed on another image using
  <a href="https://www.gimp.org/">GIMP</a>).
  </figcaption>
</figure>
<p></p>