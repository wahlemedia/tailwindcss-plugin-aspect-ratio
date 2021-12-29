# DEPRECATED

This project has been deprecated since Tailwind now support first party [aspect ratio](https://tailwindcss.com/docs/aspect-ratio).  please consider using it instead.

## Tailwindcss Plugin: aspect ratio

[![Actions Status](https://github.com/wahlemedia/tailwindcss-plugin-aspect-ratio/workflows/CI/badge.svg)](https://github.com/wahlemedia/tailwindcss-plugin-aspect-ratio/actions) [![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

This plugin add helper classes to keep the aspect ratio of an image.

Inspired by Adams Wathan's [Fixed Aspect Ratio](https://tailwindcss.com/course/locking-images-to-a-fixed-aspect-ratio) 
TailwindCSS tutorial


## Installation 
Add this plugin to your project

```
  npm install tailwindcss-plugin-aspect-ratio --save-dev
```

## Usage

Here is an exampl one how to add this plugin to your project

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

You can pass additional options to this  plugin

|  Name  |  default | Description | 
| ---- | ----| --- |
| `full` | `false` |  Generates a helper component. (see the section below) |
| `className` | ratio |  The default name of the generated classes |
| `ratioValues` | `{...}` | It generates all percent base padding bottoms. See all the values and examples at the [Tailwindcss documentation for width](https://tailwindcss.com/docs/width)  | 


## Classic approach

The classic css approach is as follow

```html
<div class="relative" style="padding-bottom: 66.66%">
    <img class="absolute h-full w-full object-cover" src="#" alt="#" />
</div>
```

## Plugin Example

The default configuration genearats the `apsect-*` helper classes

```html
<div class="relative aspect-2/3">
    <img class="absolute h-full w-full object-cover" src="#" alt="#" />
</div>
```


## add additional css helper component
If you set the `full` property of the configuration to `true`, it gives 
your an extra `aspect` property that you can apply to your html tag.

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


