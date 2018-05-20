---
layout: post
title:  "Tree Fractal Round II"
date:   2018-05-20
excerpt: "A significant upgrade to the previous tree fractal post"
comments: true
image: ""
cimage: "/images/tree_fractal/tree_road_trip.png"
categories: [math,ROOT]
---

 <figure>
  <img src="/images/tree_fractal/tree_road_trip.png" alt="" height="99%" width="99%">
  <figcaption>Fig. 1 - A fractal tree using my "random tree generator"
  with the black/white option turned ON. The tree has been placed on top of a photograph
  of the Badlands that I took during a roadtrip (summer of 2012).</figcaption>
</figure>

## Overview of the Improvements
I realized that I wanted to play with the fractal tree a bit more... My first
post may be seen [here]({{ site.baseurl }}{% link _posts/2016-05-08-tree-fractal.md %})
which includes an overview of the algorithm. The code has been significantly extended
to handle a variety of options in additin to a GUI interface; this is how the tree
gets interesting which I ignored the first time!
While I have written sliders, buttons, and number entries from scratch, I used the C++
<a href="https://root.cern.ch/root/htmldoc/guides/users-guide/WritingGUI.html">ROOT GUI widgets</a>
for this project which has been an absolute pleasure, making life much easier.
Furthermore, instead of simply representing a branch as a line, I included an option to
toggle between lines or user-adjustable trapezoids to give the effect that the diameter
or a branch/trunk decreases with height. Parameters that are now adjustable
using GUI widgets:
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
  to generate at a new node is 3, 5, 8, and 9. All fractals have a fundamental angle of 360 degrees
  and the trunk length and branch ratio relative to the trunk have been adjusted to get a
  pretty picture (hence why GUI widgets are wonderful for this project).</figcaption>
</figure>
<p></p>

The ability to increase the number of branches to generate significantly changes the
structure of the fractal, <i>e.g.</i> see Fig. 2 which displays the unexpected
generation of a <a href="https://en.wikipedia.org/wiki/Sierpinski_triangle">Sierpinski triangle</a>
among others.


The random tree generator is particularly interesting