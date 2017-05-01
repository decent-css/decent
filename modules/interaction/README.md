# Interaction

## Configuration

```
$interactions: (

  scaleUp: (
    settings: (
    ),
    start: (
      transform: translate3d(0,0,0) scale(1)
    ),
    end: (
      transform: translate3d(0,0,0) scale(1.025)
    )
  ),

  fadeIn: (
    start: (
      opacity: 0
    ),
    end: (
      opacity: 1
    )
  )

);
```

## Classes

### Target Classes

| Identifiers | Keys (Defaults) |
|-------------|-----------------|
| `hover`     | `scaleUp`, `fadeIn`, `...` |
| `focus`     | `scaleUp`, `fadeIn`, `...` |
| `active`    | `scaleUp`, `fadeIn`, `...` |

### Actor Classes

Because there can be a difference between target element and the actual element that is animated, you have to specific the `-actor` element. If the parent element is also the one you'd like animated, you can append `-actor` to the animation class:

```
hover-scaleUp-actor
```

If the element that you'd like to animate is a child of the target element, you can specify an actor for each animation class:

```
`scaleUp-actor`
```

This allows for multiple animations per target.

```
<div class="hover-fadeIn active-scaleUp">
  <div class="fadeIn-actor">
    <button class="scaleUp-actor">Scale Up on :active</button>
    <p>This button does a thing.</p>
  </div>
</div>
```
