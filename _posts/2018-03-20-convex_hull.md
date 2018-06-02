---
layout: post
title:  "Convex Hull"
date:   2018-03-20
excerpt: "An algorithm to find the perimeter of a data set"
comments: true
image:  ""
cimage: "/images/convex/convex_thumb.png"
categories: [ROOT,math]
---

## Overview of Algorithm
<p><span class="image left"><img src="{{ "/images/convex/convex_for_span.png" | absolute_url }}" alt="" /></span>
The idea is simple: find minimum number of data points which represent a perimeter polygon
about a data set. There are many variations of this algorithm and the applications can
be critical; for example, an introductory machine learning problem would be to construct
a boundary (a straight line with 2 weights in the simplest case) between two linearly
separable data sets, where linearly separable means that there exists some line that
perfectly differentiates the two data sets (all the data from one set fall on one side of
the line, and all the data from the other set fall on the other side).
However, how does one know if the two data sets are <i>linearly separable</i>?
One method is to apply the convex hull algorithm to both data sets individually in order
to construct two polygons, then the polygons may be tested for overlaps in order to confirm (or not)
linearly separablity. Here are the major components of my algorithm, which essentially consists
of calculating angles and finding the minimum (See Fig. 1 for an example in which
the data are labeled):
<ol>
<li> Generate a data set. I generated points based on a Gaussian distribution with a mean
     and sigma of 0.5 and 0.25, respectively, as I did not want to points to wander too far.</li>
<li> Each point needs to be indexed using some book-keeping integer for tracking purposes.</li>
<li> Find the algorithm's starting point - I chose the point with the minimum y value, and
     if there are duplicates then I choose the point with the lowest x and y values, or the
     bottom-left point. The starting point in Fig. 1 is labeled as 8.</li>
<li> Make a hull container which will be used to keep track of the points making
     up the perimeter polygon (or the hull), and insert the starting point as by definition this
     point must be apart of the hull.
     Also, it is useful to make a storage container that contains all
     the data points, which allows for element removal as we traverse the hull;
     this is the container that is used to find points to add to the hull.</li>
<li> Construct a vector using information from the hull container;
     the first iteration consists of the first hull point 8 and the origin. The
     direction is important as we want to calculate minimum angles. </li>
<li> Find the minimum angle between a test-case and the hull vector (origin and point 8);
     the test-point with the minimum angle is the next hull point, which
     is labeled by 1 and may now be removed from storage. </li>
<li> Repeat. The next hull vector is built by points 8 and 1, then the minimum angle
     between this vector and a test-vector is the next hull point;
     in this case, it is given by point 7. Note that this strategy
     allows angles to be calculated by a simple dot product.</li>
<li> Continue until we reach the starting point, hence the utility of the book-keeping device </li>     
</ol>
</p>
 <figure>
  <img src="/images/convex/example.png" alt="" height="99%" width="99%">
  <figcaption>Fig 1. - An example of the algorithm in which the starting point is labeled as 8. Note
  that the numbers are simply a book-keeping device and should not be interpretted as anything more.
  The ordering of the next points are 1, 7, 2, 0, 3, and 8 (return to the starting point),
  which collectively define the hull polygon.</figcaption>
</figure>
<p> </p>
