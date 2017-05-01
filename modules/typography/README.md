# Typography

## Configuration

### Type Scale

```
$rem-base:  16px;
$ratio:     1.5;
```

### Typesets

```
$typesets: (
  default: (
    font-family: ('Simplon Norm', Arial, sans-serif),
    font-weight: 400,
    line-height-body: 1.6,
    line-height-heading: 1.2,
    text-transform: none,
    letter-spacing: 0
  ),
  display: (
    font-family: ('Cormorant Garamond', Georgia, serif),
    font-weight: 400,
    line-height: 1.2,
    text-transform: uppercase,
    letter-spacing: 0.1em
  ),
  monospace: (
    font-family: (Courier, monospace),
    font-weight: 400,
    line-height: 1.2,
    text-transform: none,
    letter-spacing: 0
  )
);
```

### Weights

```
$font-weights: (
  'regular': 400,
  'semibold': 500,
  'bold': 700
);
```


## Classes

### Typesets

The `'default'` typeset is applied to the `body` by _default_. The `'monospace'` typeset is applied to `pre` and `code` by default, and is also accessible through the `.monospace` class.

A class is created for each additional map in the `typesets` map:

| Keys (Defaults) |
|-----------------|
| `display`       |


### Size, Weight, and Alignment

| Identifiers | Keys (Defaults) |
|-------------|-----------------|
| `t`         | `1` - `10`      |
| `tw`        | `regular`, `semibold`, `bold` |
| `ta`        | `left`, `center`, `right` |
| `va`        | `baseline`, `sub`, `super`, `text-top`, `text-bottom`, `top`, `bottom`, `middle` |


### Type Styles/Behavior

| Keys |
|------|
| `line-through` |
| `underline` |
| `italic` |
| `capitalize` |
| `lowercase` |
| `nowrap` |


### Aliasing

| Keys |
|------|
| `antialiased` |
