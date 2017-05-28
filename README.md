![LIME GRID](https://raw.githubusercontent.com/tsuyoshiwada/lime-grid.css/images/repo-banner.png)

[![Build Status](http://img.shields.io/travis/tsuyoshiwada/lime-grid.css.svg?style=flat-square)](https://travis-ci.org/tsuyoshiwada/lime-grid.css)
[![npm version](https://img.shields.io/npm/v/lime-grid.css.svg?style=flat-square)](https://www.npmjs.com/package/lime-grid.css)

> Powerful Flexbox based Grid System for modern browsers.

https://tsuyoshiwada.github.io/lime-grid.css/



## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Customize](#customize)
- [Changelog](#changelog)
- [Contribute](#contribute)
- [License](#license)



## Install

To install the stable version.

```bash
$ npm install lime-grid.css --save
# or
$ yarn add lime-grid.css
```

Or download [lime-grid.min.css](https://raw.githubusercontent.com/tsuyoshiwada/lime-grid.css/master/lime-grid.min.css).



## Usage

### via npm

```css
@import 'lime-grid.css';
```

### via Download file

```html
<link rel="stylesheet" href="/path/to/lime-grid.min.css">
```

Once you can include the file, let's build the HTML with reference to the document.

```html
<div class="container">
  <div class="row row-xs-center">
    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-4 col-xl-4"></div>
    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-4 col-xl-4"></div>
  </div>
</div>
```

See [Documentation](https://tsuyoshiwada.github.io/lime-grid.css/).



## Customize

You can do custom build using <a href="https://github.com/postcss/postcss">PostCSS</a>.

### Setup

#### Required

The following plugins is necessary for the build.

* [postcss-import](https://github.com/postcss/postcss-import)
* [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)
* [postcss-calc](https://github.com/postcss/postcss-calc)
* [postcss-custom-media](https://github.com/postcss/postcss-custom-media)

#### Optional (recommend)

Although not required, we recommend using the following plugin.

* [postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes)
* [autoprefixer](https://github.com/postcss/autoprefixer)


### Set your options

1. Include CSS Variables and Custom media.
2. Override variables.
3. Include Grid System.

Example:

```css
@import 'lime-grid.css/src/variables.css';

/* Change options */
:root {
  --container-width-xs: auto;
  --container-width-sm: 540px;
  --container-width-md: 720px;
  --container-width-lg: 960px;
  --container-width-xl: 1150px;
}

@import 'lime-grid.css/src/grid-system.css';

/* ...Your stylesheet */
```

For details of CSS variables, see [src/variables.css](https://github.com/tsuyoshiwada/lime-grid.css/blob/master/src/variables.css).



## Changelog

See [CHANGELOG.md](./CHANGELOG.md)



## Contribute

1. Fork it!
1. Create your feature branch: git checkout -b my-new-feature
1. Commit your changes: git commit -am 'Add some feature'
1. Run `$ npm test`
1. Push to the branch: git push origin my-new-feature
1. Submit a pull request :D

Bugs, feature requests and comments are more than welcome in the [issues](https://github.com/tsuyoshiwada/lime-grid.css/issues).



## License

[MIT © tsuyoshiwada](./LICENSE)

