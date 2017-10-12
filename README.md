# Decent

[![npm version](https://badge.fury.io/js/decent-scss.svg)](https://badge.fury.io/js/decent-scss)
[![CircleCI Status](https://circleci.com/gh/decent-css/decent.png?circle-token=0dcc6cc41b64bbf3be8abff6ae9d00823dcf2955&style=shield)](https://circleci.com/gh/decent-css)

Decent is a flexible, functional CSS library for building _literally_ anything. Designed to be flexible and configurable, it can be used for building anything from simple prototypes to production applications and websites.

* [Modules](#modules)
* [Setup](#setup)
* [Configuration](#design)
  * [Base](#base)
  * [Responsive Breakpoints](#responsive-breakpoints)
  * [Typography](#typography)
  * [Grid](#grid)
  * [Spacing, Length, and Position](#spacing-length-and-position)
  * [Style](#style)
  * [Overlay](#overlay)
* [Principles](#principles)

---

## Modules

* [Color](/modules/color/README.md)
  * [Text Color](/modules/color/README.md#text-color)
  * [Background Color](/modules/color/README.md#background-color)
* [Display](/modules/display/README.md)
  * [Overflow](/modules/display/README.md#overflow)
  * [Floats](/modules/display/README.md#overflow)
* [Flex](/modules/flex/README.md)
* [Grid](/modules/grid/README.md)
* [Interaction](/modules/interaction/README.md)
* [Length](/modules/length/README.md)
* [Overlay](/modules/overlay/README.md)
* [Position](/modules/position/README.md)
* [Ratio](/modules/ratio/README.md)
* [Reset](/modules/reset/README.md)
* [Spacing](/modules/spacing/README.md)
* [Style](/modules/style/README.md)
* [Table](/modules/table/README.md)
* [Typography](/typography/flex/README.md)


---

## Setup
### Install Decent
```
$ npm install --save-dev decent-scss
```

### Import Decent
```
@import 'decent-scss/modules/all';
```

## Design

Decent is meant to work for _your_ design, so take a few minutes to configure the framework. Create a `.scss` file to define your settings — something like `settings.scss`. And import that file _above_ your Decent import.

```
@import 'path/to/settings';
```

### Base
It is recommended that you use `rem`'s for scaling type and elements, and so, the first step to configuring decent is choosing what your base `rem` value will be (the default is `16px`).

```
$rem-base: 16px;
```


```
$border-box: true;
```
```
$reset-inputs: true;
```

### Responsive Breakpoints
You can change or extend the breakpoints available with the `$breakpoints` map.

```
$breakpoints: (
  sm: 600px,
  md: 768px,
  lg: 1280px,
  xl: 1440px
);
```

### Typography
[Change to font-sizes map]

```
$ratio: 1.5;
```

The `default` typeset will be set on the `body` selector.

```
$typesets: (
  default: (
    font-family: (-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;),
    font-weight: 400,
    line-height-body: 1.6,
    line-height-heading: 1.2,
    text-transform: none,
    letter-spacing: 0
  ),
    monospace: (
    font-family: (Courier, monospace),
    font-weight: 400,
    line-height: 1.2,
    text-transform: none,
    letter-spacing: 0
  ),
  display: (
    font-family: ('Cormorant Garamond', Georgia, serif),
    font-weight: 400,
    line-height: 1.2,
    text-transform: uppercase,
    letter-spacing: 0.1em
  )
);
```

```
$font-weights: (
  'regular': 400,
  'semibold': 500,
  'bold': 700
) !default;
```

### Grid

```
$container-width: 80rem;
```
```
$columns: 12;
```


### Spacing, Length, and Position

```
$modular-scale: (
  '0':  0,
  '1':  0.5rem,
  '2':  1rem,
  '3':  1.75rem,
  '4':  3rem,
  '5':  5rem,
  '6':  9rem,
  '7':  16rem,
  '8':  28rem,
  '9':  48rem,
  '10': 72rem
);
```

### Style

```
$border-radii: (
  'default': 2px
);
```
```
$shadows: (
  'default': 0 1px 8px rgba(0, 0, 0, 0.1)
);
```

### Overlay
```
$overlays: (
  'default': rgba(#000, 0.8)
);
```


## Principles

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


