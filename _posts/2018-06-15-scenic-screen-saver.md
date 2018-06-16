---
layout: post
title:  "Scenic screen saver"
date:   2018-06-15
excerpt: "Includes simulated ropes, randomly generated fractal trees, a simulated sunset/sunrise,
          and Perlin coherent noise"
comments: true
image: ""
cimage: "/images/scenery/scenery_thumb.png"
categories: [SFML,simulation]
---

 <figure>
  <img src="/images/scenery/scenery.png" alt="" height="99%" width="99%">
</figure>

<p></p>
## Overview
<a href="https://www.youtube.com/watch?v=lxAgjiuRBeQ">A video may be seen here</a>.
<p></p>

The original goal was to simulate a rope; however, once the rope/swing was made
then the project unintentionally grew to something much larger.
Since I had just created a random tree generator, I thought it would be
fun to anchor the simulated rope on the branches. Even cooler, let's move
the rope according to some fictitious wind force which introduced the
need for the Perlin noise generator. The project grew to include a simulated sunset/sunrise (which I have
been wanting to do for quite some time now), lightening bugs, an owl, blades of grass,
stars, and a moon to make the scenery more interesting.

Ropes may be simulated by connecting masses to springs, and then one or both ends of the rope-object may be
anchored. When both sides are anchored and all masses are in the presence of gravity,
the proper catenary curve is reproduced which is a
canonical calculus of variations result (hyperbolic cosine). Implementing a rope simulation in C++ is
well described by <a href="http://nehe.gamedev.net/tutorial/rope_physics/17006/">this site</a>,
and will not be described in detail here. In short, though, the idea is to build a Mass class
where the position may be updated as
<pre><code>void Mass::simulate(float dt){
  fVel.x += (fForce.x / fMass) * dt;
  fVel.y += (fForce.y / fMass) * dt;
  fPos.x += fVel.x * dt;
  fPos.y += fVel.y * dt;
}

void Mass::applyForce(sf::Vector2f force){
  fForce.x += force.x;
  fForce.y += force.y;
}</code></pre>
where dt is the intrinsic delta time in between frames (SFML provides sf::Clock
and sf::Time classes for this purpose). Then, a Spring class is made where one
spring is connected to two Mass-objects, and a spring force <i>-k(x-x')</i>
is used to constrain/connect the two masses; in this case, <i>k</i> is an
adjustable parameter, <i>x</i> is the distance between the two masses, and <i>x'</i>
is the length of the spring in absence of forces. This is where the Mass::applyForce(sf::Vector2f)
comes in handy, which may also be used for gravity, air friction, or anything else that comes to mind
to alter the behavior. A Rope-object is then built
out of many Spring classes to realistically simulate the movement of a rope. 
The rope is continuously perturbed by a
<a href="http://libnoise.sourceforge.net/">Perlin coherent noise generator</a>
to simulate the effects of wind. Note that the anchor points need to be
updated according to the perturbations of the fractal tree.

The generation of the sunset was computationally expensive, and I learned
how to do it <a href="http://www.scratchapixel.com/lessons/procedural-generation-virtual-worlds/simulating-sky/simulating-colors-of-the-sky">here</a>, which includes Mie and Rayleigh scattering
models. The calculation needs to be performed for many angles (depending on the
location of the sun relative to a viewer on Earth) in order to simulate
a sunset/sunrise. I generated roughly 360 images, and the screen saver cycles through each
image approximately every 0.5 seconds.

The remainder of the scenery, excluding the tire and
<a href="http://rosprites.blogspot.com/2012/05/classes-other.html">owl sprites</a>,
were made completely with SFML vertex arrays. The random tree fractal generator is
described in a previous post; the blades of grass use the
same fundamental construction
(built using a class that accepts 2 points for the bottom/top center points of a box,
a width parameter, and a parameter to change the width ratio of the top relative to the bottom)
in order to create the gradient effect. The alpha component of a blade is adjusted once the
scenery is determined to be dark. The moon is actually 100 sf::CircleShapes
where the alpha component is adjusted to give the glow effect. The bugs are
black circles which randomly glow (the glow lasts for a time that is randomly determined
by a Gaussian distribution); the glow becomes more frequent during the night time.
The cricket noise was downloaded from
<a href="http://soundbible.com/tags-crickets.html">here</a>, and the volume increases
at night. Just about the entire scenery (excluding the sprites and the sunset) are
randomly generated and positioned, either using a flat or normal distribution using C++11's
random-class, which yields variations of the same screen-saver idea.