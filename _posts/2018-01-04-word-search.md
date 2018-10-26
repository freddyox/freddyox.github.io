---
layout: post
title:  "Word Search"
date:   2018-01-04
excerpt: "An interactive word search generator and game"
comments: true
image:  ""
cimage: "/images/word_search/word_search_thumbnail.png"
categories: [games,SFML]
---

## Overview
<a href="https://youtu.be/YexCgQyk7TE">The game may be seen here</a>.

I am not particularly interested in word searches, but for some reason
I found myself making a generator. The word search game is complete and user-interactive,
and the entire project has been coded using the bare-bones tools of SFML which
requires significant <i>behind-the-scenes</i> routines.
The code is mostly book-keeping tasks, but a decent strategy needs to be developed when it
comes to placing many strings of varying size in a grid.
First, I need a dictionary, or a text file
with hundreds of thousands of words; I chose
<a href="http://www.math.sjsu.edu/~foster/dictionary.txt">this one</a> which explains
why some of the words to find are not commonly accepted words in my opinion (but who cares this
is trivial to change). The code imports
300 randomly selected words from the dictionary, which are organized based on the string length 
allowing for a method to choose between easy, medium, and hard words (typically
smaller words are harder to find). The lattice is generated using SFML
vertex arrays, and the word placement algorithm is designed as follows:
<ol>
<li>Start with the strings with the largest length as the geometric constraints are stricter.</li>
<li>Randomly select a starting position in the grid and generate a list of possible directions
based on geometric considerations; there are 8 possibilities (vertical, horizontal,
and the diagonals). Randomly select a possible direction, and place the first word.</li>
<li>Continue the procedure for all words to find, typically 15 words (5 from each hardness category).</li>
<li>When a new word is randomly positioned, an overlap check is performed. If an overlap exists,
check to see if the character is the same. If it is then keep it, otherwise discard the word
and move on to another. There are many smarter approaches, I imagine, but this is what I how
I positioned many words in a grid.</li>
<li>Fill the in the empty spaces with randomly generated letters.</li>
</ol>
A cheat button is achieved
by simply toggling between two sprites (a checked/unchecked box). Mouse events are handled
using
<pre><code>sf::Mouse::isButtonPressed(sf::Mouse::Left)
sf::Event::MouseButtonPressed	
sf::Event::MouseMoved
sf::Event::MouseButtonReleased
</code></pre>
logic methods. For example, when the mouse button is clicked <i>once</i> the cell must turn red;
when the mouse moves, the cells turn red in vertical/horizontal/diagonal preferences
which is achieved using simple vectors and angular cuts. When the mouse button is released,
a method must be invoked to check if the highlighted region is in fact a word on the list. If
it is, turn the blocks green, otherwise reset the blocks and cue the audio for failure.
The words to find list are sorted by string length, and a strike-out effect is achieved
by using vertex arrays. The audio clips are handled by SFML's audio module which is
simple to use for this task.
<p></p>
<figure>
<img src="/images/word_search/word_search_thumbnail.png" alt="" width="99%" height="99%"/>
</figure>