## Tailwindcss Plugin: aspect ratio

This plugin add add helper to keep an aspect ratio of an image

Inspired by Adams Wathan's [Fixed Aspect Ratio](https://tailwindcss.com/course/locking-images-to-a-fixed-aspect-ratio) 
TailwindCSS tutorial


## Installation 
Add this plugin to your project
```
  npm install tailwindcss-plugin-aspect-ratio --save-dev
```

## Usage

Here is an example how to add this plugin to your project

```
// tailwind.config.js
const aspectRatioPlugin = require('tailwindcss-plugin-aspect-ratio');

module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    aspectRatioPlugin()
  ]
};
```

## Options

You can pass the following options into this plugin

|  Name  |  default | Description | 
| ---- | ----| --- |
| `full` | `false` |  Generates a helper component see the section below |
| `className` | ratio |  The default name of all classes |
| `ratioValues` | `{...}` | It generates all percent base padding bottoms. See Tailwind dokumentation  | 


## Classic approach

The classic css trickery is as follow

```html
<div class="relative" style="padding-bottom: 66.66%">
    <img class="absolute h-full w-full object-cover" src="#" alt="#" />
</div>
```

## Plugin Example

```html
<div class="relative aspect-2/3">
    <img class="absolute h-full w-full object-cover" src="#" alt="#" />
</div>
```


## add Helping component
If you set in the config file the `full` to `true`, it gives 
your an extra `aspect` property to shorten the configuration.

```scss
.aspect {
    position: relative;
    
    .img {
        position: absolute;
        height: 100%;
        width: 100%
    }
}
```

```html
<div class="aspect aspect-2/3">
    <img class="object-cover" src="#" alt="#" />
</div>
```


## Testing
To run the tests
```
npm run test
```

## Licence
[MIT](./LICENCE.md)


