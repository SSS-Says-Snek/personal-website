---
title: Generating Functions~ An Intro to a Really Cool Piece of Math
coverImage: /images/blog/thumbnails/generating-functions-intro.png
date: March 6, 2025
excerpt: I have loved and been interested in math for a very long time by now. However, even though it may be just be my inexperience with other fields, I have found generating functions ...
minRead: 10
---

<script>
  import Quote from "$lib/Quote.svelte";
  import Definition from "$lib/Definition.svelte";
</script>

I have loved and been interested in math for a very long time by now. However, even though it may be just be my inexperience with other fields, I have found generating functions
to be one of the most fascinating and thought-provoking topics I have yet learned. So what are these curious mathematical objects, and how can we solve problems with them?

## Basic Definition

The most intuitive definition of generating functions I've heard is from Herbert Wilf's [*generatingfunctionology*](https://www2.math.upenn.edu/~wilf/gfology2.pdf)

<Quote text="A generating function is a clothesline on which we hang up a sequence of numbers for display. 
    What that means is this: suppose we have a problem whose answer is a sequence of numbers... 
    We want to 'know' what the sequence is. What kind of answer might we expect?" />

... Hence the thumbnail of this blogpost.

If you've studied a bit of calculus and learned about **power series**, generating functions go hand in hand with that concept! What I mean is that 
we have a sequence $$a_n$$. It can be any sequence of numbers. Then, the **ordinary power series generating function** (the opsgf) of the sequence is as follows:

<Definition>

A function $$F(x)$$ is defined to be the *generating function* of $${a_n}$$ if
$$
F(x) = \sum_n{a_nx^n}
$$

</Definition>

### Examples

If I have the sequence $$\{0, 1, 2, 3, 4, 5\}$$, then the generating function for that sequence would be

$$F(x) = 0x^0 + 1x^1 + 2x^2 + 3x^3 + 4x^4 + 5x^5$$

You can see why Wilf alikened generating functions to clotheslines. These $$x$$s are (almost) purely formal, and their only purpose is to sit there
and help locate the term in the sequence.

&nbsp;

For a more advanced example, consider the sequence $$\{1, 1, 1, 1, 1, ... \}$$. This means that $$a_n = 1$$ for every single $$n$$.
So, the generating function would be $$F(x) = \sum_n{1 \cdot x^n} = \sum_n{x^n}$$. But, if we recall from Algebra 2, this looks like a geometric series!
