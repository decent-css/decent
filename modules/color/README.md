# Color

## Settings

### Colorsets
```
$colorsets: (
  'primary': (
    'default':  hsl(240, 90, 50),
    'alt':      hsl(240, 90, 40),
    'alt-2':    hsl(240, 90, 30)
  ),
  'secondary': (
    'default':  hsl(27, 100, 53),
    'alt':      hsl(27, 100, 43)
  ),
  'success': (
    'default':  hsl(122, 90, 50),
    'alt':      hsl(122, 90, 40),
    'alt-2':    hsl(122, 90, 30)
  ),
  'error': (
    'default':  hsl(0, 90, 50),
    'alt':      hsl(0, 90, 40),
    'alt-2':    hsl(0, 90, 30)
  )
) ;
```

### Greyscale
```
$greyscale: (
  'black': hsl(240, 1, 1),
  '1':     hsl(240, 4, 10),
  '2':     hsl(240, 3, 24),
  '3':     hsl(240, 3, 30),
  '4':     hsl(240, 2, 40),
  '5':     hsl(240, 2, 50),
  '6':     hsl(240, 2, 84),
  '7':     hsl(240, 1, 92),
  '8':     hsl(240, 1, 96),
  'white': hsl(240, 0, 99)
);
```

## Classes

| Property | Prefix    | Key | Modifier (Optional) |
|-|--------|-|-|
| Text Color        | `c` | `primary`, `secondary`, `success`, `error` | `alt`, `alt-2` |
| Background Color | `cbg` | `primary`, `secondary`, `success`, `error` | `alt`, `alt-2` |
| Text Color (Gray) | `cg` | `black`, `1`-`8`, `white` | - |
| Background Color (Gray) | `cbgg` | `black`, `1`-`8`, `white` | - |
