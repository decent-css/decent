# Decent

[![npm version](https://badge.fury.io/js/decent-scss.svg)](https://badge.fury.io/js/decent-scss)
[![CircleCI Status](https://circleci.com/gh/decent-css/decent.png?circle-token=0dcc6cc41b64bbf3be8abff6ae9d00823dcf2955&style=shield)](https://circleci.com/gh/decent-css)

Decent is a flexible, functional CSS library for building _literally_ anything. Designed to be flexible and configurable, it can be used for building anything from simple prototypes to production applications and websites.

* [Modules](#modules)
* [Setup](#setup)
* [Configuration](#configuration)
  * [Base](#base)
  * [Responsive Breakpoints](#responsive-breakpoints)
  * [Typography](#typography)
  * [Grid](#grid)
  * [Spacing, Length, and Position](#spacing-length-and-position)
  * [Style](#style)
  * [Overlay](#overlay)
* [Principles](#principles)
  * [Naming & Configuration](#naming--configuration)
  * [Bass CSS & Tachyons](#bass-css--tachyons)
---

## Modules

* [Color](/modules/color/README.md)
  * [Text Color](/modules/color/README.md#text-color)
  * [Background Color](/modules/color/README.md#background-color)
* [Display](/modules/display/README.md)
  * [Overflow](/modules/display/README.md#overflow)
  * [Floats](/modules/display/README.md#overflow)
* [Flex](/modules/flex/README.md)
  * [Flex Direction](#overflow)
  * [Flex Wrap](#overflow)
  * [Flex Grow](#flex-grow)
  * [Flex Shrink](#flex-shrink)
  * [Align Items](#align-items)
  * [Justify Content](#justify-content)
  * [Align Self](#align-self)
  * [Align Content](#align-content)
  * [Order](#order)
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

## Configuration

Decent is meant to work for _your_ design, so take a few minutes to configure the framework. Create a `.scss` file to define your settings — something like `settings.scss`. And import that file _above_ your Decent import.

```
@import 'path/to/settings';
```

### Base

#### `rem`
If you use `rem`'s for measurements and font sizes, you can update the base `rem` value with the `$rem-base` variable — this will be applied to the `body` selector. Default is `16px`.

```
$rem-base: 16px;
```

#### Box Sizing
Setting `$border-box` to `true` will apply `box-sizing: border-box` to the `*` selector. Default is `false`.

```
$border-box: true;
```

#### Inputs
Browser default styling of inputs aren't reset by the [Reset](/modules/reset) module, but they can be reset with Decent by setting `$reset-inputs` to `true`. Default is `false`.
```
$reset-inputs: true;
```

### Responsive Breakpoints
You can change or extend the breakpoints available with the `$breakpoints` map.

```
$breakpoints: (
  sm: 480px,
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

#### Typesets

Typsets define the available types of your design, with two map keys being _reserved_ for semantic tags:
* The `default` typeset will be set on the `body` selector.
* The `monospace` typeset will be set on the `pre, code` selectors. But this typeset will also be available with the `.monospace` class.

Additional maps will be availabe through classes that are defined by their keys. For example, the `display` map in the following configuration will generate a `.display` class that can be used to display a serif typeset.

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

#### Weights
Depending on how fonts are loaded and which weights are available, the `$font-weights` map can be used to rename the `font-weight` classes. The default map is:

```
$font-weights: (
  'regular': 400,
  'semibold': 500,
  'bold': 700
);
```

But, a more explicit map could be:

```
$font-weights: (
  '400': 400,
  '500': 500,
  '700': 700
);
```

This would generate `.tw-400`, `.tw-500`, `.tw-700`.


### Grid
The `$container-width` variable updates the `max-width` of the `.container` class.
```
$container-width: 80rem;
```

Decent's grid system is based off of 12 columns by default, but can be updated to support any number of columns with the `$columns` variable.
```
$columns: 12;
```


### Spacing, Length, and Position
The default `$measurements` are based off of a [modular scale](http://modularscale.com), but these can be any logical series of keys and values.

```
$measurements: (
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

#### Border Radius
```
$border-radii: (
  'default': 2px,
  '2': 4px
);
```

#### Box Shadow
```
$shadows: (
  'default': 0 1px 8px rgba(0, 0, 0, 0.1),
  '2': 0 4px 16px rgba(0, 0, 0, 0.1)
);
```

### Overlay
```
$overlays: (
  'default': rgba(#000, 0.8),
  'light': rgba(#fff, 0.8)
);
```


## Principles

### Naming & Configuration
Decent is designed to be incredibly flexible while balancing the right amount of assumption to be consistent and easy-to-use. Most of the Decent class names can be broken down into 5 categories (with some exceptions depending on the property):


[`breakpoint-`][`property`][`modifiers`][`-key`][`-value`]


#### Example — Color
```
$colorsets: (
  'primary': (
    'alt': #
  )
);
```

![.cbg-primary-alt](/assets/images/naming-diagram--color@2x.png)


#### Example — Margin

```
$modular-scale: (
 '1': 0.5rem
);
```

![.md-pt-1](/assets/images/naming-diagram--margin@2x.png)

---

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


