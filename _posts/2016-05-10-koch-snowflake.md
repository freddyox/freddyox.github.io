---
layout: post
title:  "Koch Snowflake"
date:   2017-05-10
excerpt: "A variation of the Koch snowflake."
image: ""
cimage: "/images/koch_snowflake/flake_thumbnail.png"
---

<figure>
<img src="/images/koch_snowflake/flake_thumbnail.png" alt="" title="Koch" width="99%"/>
</figure>

<span class="image left"><img src="{{ "/images/koch_snowflake/idea.png" | absolute_url }}" alt="" /></span>
<p>
I worked on this project immediately after the tree fractal. Admittedly, the geometry is more
difficult but the fractal generation concept is the same; find a base operation, and apply
it iteratively. The fractal begins by defining an
equilateral triangle, and let's refer to this as iteration 0. Iteration 1 is
formed by taking each line segment making up the base triangle, splitting it into thirds,
removing the center segment, and then building a smaller equilateral (with one side missing)
with two additional line segments. The result is a star.
Therefore, the base operation of the fractal consists of accepting one line segment
and returning four in the proper orientation. Repeat the iteration process until satisfied, but
practically only the first 6 iterations or so make noticeable changes without magnification.
An animation of my Koch snowflake may be seen by Fig. 2. The area of the fractal
quickly converges, but the perimeter tends towards infinity; see Fig. 3 for my results.
Note that the number of line segments to consider grows rapidly: <i>3*4<sup>n</sup></i>
where <i>n</i> is the iteration number. Therefore, the animation displays the first
10 iterations resulting in a fractal with <i>3.14*10<sup>6</sup></i> line segments.
</p>

<p></p>

<figure>
<img src="/images/koch_snowflake/asymm.gif" alt="" title="Koch snowflake animation" width="80%"/>
<figcaption>Fig. 2 - The first 10 iterations of a variation of the Koch snowflake. While
the area of the fractal converges rapidly, the perimeter tends towards infinity, see
Fig. 3.</figcaption>
</figure>

<p></p>

<figure>
<img src="/images/koch_snowflake/results.png" alt="" title="Koch snowflake animation" width="99%"/>
<figcaption>Fig. 3 - The area and perimeter of a true Koch snowflake (not the the one seen in the
animation). The area converges quickly while the perimeter diverges towards infinity.
The convergence of the fractal area is suppose to be 8/5 times the original
area of the base triangle, which is observed in the plot.</figcaption>
</figure>