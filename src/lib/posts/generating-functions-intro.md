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

<Quote>
    A generating function is a clothesline on which we hang up a sequence of numbers for display. 
    What that means is this: suppose we have a problem whose answer is a sequence of numbers... 
    We want to 'know' what the sequence is. What kind of answer might we expect?
</Quote>

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

If we remember, when we have an infinite geometric series with an initial term $$a$$ and a common ratio $$r$$, then the sum is
$$
\sum_{n=0}^{\infty}{ar^n} = S = \frac{a}{1 - r}
$$

In our case, $$n$$ starts at zero, so the initial term is just 1. $$r$$ in this case is also just $$x$$. So, the generating function for this sequence is

$$
F(x) = \frac{1}{1 - x}
$$

<Quote type="note">

    Wait, why are we able to convert that series into that neat sum with the geometric series formula again? I thought it only converged when $$|r| < 1$$
    We are able to do this because this is a *formal power series*. $$x$$ isn't really a concrete number (kinda), so we can kinda do anything to it, including 
    what we just did.
</Quote>

### Why generating functions?

Hopefully you can kind of see the power series-like nature. However, this just looks pointless. Why did we do all of this? The reason why we did this is because for larger, more complicated problems, generating functions 
are easy to manipulate and can even yield you recurrance formulas, explicit formulas, and other cool things. However, when they don't, they're usually the next best thing, 
letting you extract terms with methods like the Taylor expansion we learned in calculus.

### More examples

What is the generating function for $$\{1, -1, 1, -1, 1, ...\}$$? Well, this looks like a geometric sequence but every term is 
the previous term times -1. So, while our initial term is still 1, the common ratio is now $$-x$$ instead of $$x$$. Plugging into the formula yields
$$
F(x) = \frac{1}{1 + x}
$$

### Generating function operations


A reason why generating functions are so powerful is that they are really easy to manipulate. Say we're given a sequence $$a_n$$ whose 
generating function is $$F(x)$$. How do we represent $$a_{n+1}$$ in terms of $$F$$? As an example, if we're given $$\{0, 1, 2, 3, ...\}$$, 
how do we represent $$\{1, 2, 3, 4, ...\}$$?

&nbsp;

We know that $$a_n$$'s opsgf is
$$
\begin{aligned}
F(x) &= \sum_{n \ge 0}{a_nx^n} \\
&= a_0x^0 + a_1x^1 + a_2x^2 + a_3x^3 + ...
\end{aligned}
$$

We want
$$
\begin{aligned}
?(x) &= \sum_{n \ge 0}{a_{n+1}x^n} \\
&= a_1x^0 + a_2x^1 + a_3x^2 + a_4x^3 + ...
\end{aligned}
$$

How do we manipulate $$F(x)$$ into $$?(x)$$?

We can first note that dividing $$F(x)$$ by $$x$$ gets us really close. We have $$\frac{F(x)}{x} = a_0x^{-1} + a_1x^0 + a_2x^1 + a_3x^2 + ...$$

The only thing we're missing is to backtrack and first eliminate that $$a_0$$ term so that there's no pesky $$a_0x^{-1}$$ laying around.
We can do this with $$F(x) - a_0$$ to get a final result: 
$$
?(x) = \sum_{n \ge 0 }{a_{n+1}x^n} = \frac{F(x) - a_0}{x}
$$

<!-- <video width="320" height="240"> -->
<!--     <source src="../static/videos/blog/Anplus1OPSGF.mp4" type="video/mp4"> -->
<!-- </video> -->

<img src="/videos/blog/Anplus1OPSGF.gif" alt="An animation showing how to derive a_n+1" width="500">

That's great! But if I want to represent $$a_{n+2}$$ in terms of $$F(x)$$? Now that we see the general pattern, we should first eliminate 
$$a_0$$ and $$a_1x$$ first, then divide by $$x^2$$ to "shift" the series over to what we want. We end up getting 
$$
\begin{aligned}
\sum_{n \ge 0}{a_{n+2}x^n} &= a_2x^0 + a_3x^1 + a_4x^2 + a_5x^3 + ... \\
&= \frac{a_2x^2 + a_3x^3 + a_4x^4 + a_5x^5 + ...}{x^2} \\
&= \frac{F(x) - a_0 - a_1x}{x^2}
\end{aligned}
$$

<Definition>

    In general, for a sequence $$a_n$$ whose opsgf is $$F(x)$$, the generating function for $$a_{n+k}$$ for any $$k \ge 0$$ is

    $$
    \frac{F(x) - a_0 - a_1x - a_2x^2 - ... - a_{k-1}x^{k-1}}{x^k}
    $$

</Definition>

## GenFuncs and Recursion
