# Decent.scss

![CircleCI Status](https://circleci.com/gh/decent-css/decent.png?circle-token=0dcc6cc41b64bbf3be8abff6ae9d00823dcf2955&style=shield)

Decent is a flexible, functional CSS library for building _literally_ anything. Designed to be as flexible and configurable as possible, it can be used for building anything from prototypes to production applications and websites.


<br>

## Rationale

You might see this and think to yourself, why would anyone want to write CSS this way? So did we. But after some research and using [Basscss](http://www.basscss.com/) for a bit we were hooked.

Here's what convinced us:

### No Side Effects
Although the cascade can be a useful thing, more often than not it becomes a hinderance in long term projects or with projects that have multiple developers working in the code base.

### Composable
Think composition over inheritance. With Decent.scss you compose your ui out of already existing blocks (think legos) of css.

### Consistent
Functional CSS helps to facility consistency in your end products. With Decent.scss, all of the values for whitespace, font sizes, etc are all calculated from the same settings. This means that there are no more magic numbers hiding out in your stylesheets and that consistency is as easy as using the generated classes.

### Clear & Easy to follow
There's a lot of contention around this point, but we maintain that it's easier to reason about complexity in your markup as opposed to CSS. With CSS you have to worry about inheritance as well as the cascade, two things that can work against as soon as your website or app starts to grow. By taking a few minutes to familiarize yourself with the [Class Reference](https://github.com/octopuscreative/decent-scss/wiki) for Decent.scss, you'll be able to look at any markup and have a good idea of how it looks and functions.

### Customizable
Decent utilizes maps to make the framework as flexible as possible. Modular scale (padding, margin, heights, and widths), font scale, typesetting, and colors are all configurable.

#### Useful Reads

* [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
* [How not to scale css](https://gist.github.com/mrmrs/5d6c3bf60a9ff410fcec)
* [Expressive CSS](http://johnpolacek.github.io/expressive-css/)
* [CSS Purge](http://csspurge.com/)
* [Semantic CSS](http://snook.ca/archives/html_and_css/semantic-css)
* [Functional Programming, CSS, and your sanity](http://www.jon.gold/2015/07/functional-css/)


## Setup

Install the dependency.
```
npm install decent-scss
```

Then, include the path to the index file in your build – Webpack, Grunt, Gulp, Brunch, etc.
```
@import 'decent-scss/modules/all'
```
