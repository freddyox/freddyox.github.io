---
layout: post
title:  "Tree Fractal"
date:   2016-05-08
excerpt: "Generation and visualization of a Pythagoras tree"
image: ""
cimage: "/images/tree_fractal/FractalTree_45_white.png"
categories: math
---
 <figure>
  <img src="/images/tree_fractal/fractal_tree_multi.jpg" alt="" height="99%" width="99%">
  <figcaption>Fig. 1 - The fractal tree generated with branch angles of 23 (left panel)
  and 60 (right) degrees.</figcaption>
</figure>

## Generating and Animating the Fractal
<p>There are many ways to generate a simple tree fractal. A quick google search gives many variations
and patterns, symmetric and asymmetric, as even small changes to the initial length and/or
angle gives interesting results. I will only describe <i>my</i> fractal as I am not a
fractal expert; the goal for me was to generate a symmetric tree fractal,
and then to tweak parameters and make an animation.</p>

<p>The fractal starts with a tree trunk of length <i>l</i>, and think of
the top of the trunk as a node where we will connect branches. Fractals
are iterative objects, so in this case the trunk is referred to as level zero.
Each time we increment the level, 2 branches will be connected to each node
of the previous level resulting in 2<sup><i>n</i></sup> new branches where <i>n</i>
represents the level. A branch is just a line defined by two coordinates.
The first level of the fractal, then, generates two branches,
both assigned a length <i>al</i> where <i>a</i> is some fraction to be defined by the coder,
with the trunk node as the starting coordinate; the end coordinate depends on the fractal generation
angle. If I choose an angle of say 23 degrees as in Fig. 1, then the first level
branches have end points that are plus/minus 23 degrees with respect to the vertical, or
more generally the directional vector of the trunk (or branch of the previous level).
Level two branches (there are 2<sup>2</sup>=4)
use level 1 nodes as input where the length is now <i>a<sup>2</sup>l</i>, and the end points
are defined <i>relative</i> to the level 1 branch directional vectors. The process
is iterated to as many levels as one wants, but note that the length of level <i>n</i>
branches are reduced relative to the trunk by a factor of <i>a<sup>n</sup></i>. For example,
if we choose <i>a</i>=0.7, then the length of level 7 branches is 0.7<sup>7</sup>=0.08
or 8% of the trunk's length which quickly becomes difficult to visualize.
Additionally, the tree fractal naturally gives rise to a curling
or rotational effect which yields often unexpected behavior, <i>e.g.</i> the
right panel of Fig. 1.</p>

<p>
I used a value of <i>a</i>=0.65 and <i>n</i>=15, and incrementally changed the color of branches
as the algorithm progresses to higher branch levels, hence the variations of green
and the red/pink buds. Obviously a great deal of time could be invested tweaking
various parameters and checking the result; the tweaking can be intensified by
considering asymmetric parameters for left/right branch generation at any particular node.
The algorithm can easily be extended to scan over a range of branch generation angles,
say 0 to 360 degrees, and the output can be stringed together to create a .gif using
conventional linux facilities. The results of such a procedure may be seen by Fig. 2,
and if the .gif does not work then see the video on my
<a href="https://youtu.be/7bijV3FGrBk">youtube channel</a>.
Fractal analysis can be performed on the output, but I stopped here. See
<a href="https://www.youtube.com/watch?v=Ec8Q1q9cbbo">this video</a> for
a spectacular demonstration of the variety of tree fractals.
</p>

<figure>
<img src="/images/tree_fractal/fractal2.gif" alt="" title="Tree fractal animation" width="99%"/>
<figcaption>Fig. 2 - Scanning over branch generation angles of 0 to 360 degrees in 1 degree
increments, and stitching all the images together to create an animation.</figcaption>
</figure>