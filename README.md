material-ui-sass
================

This is the [Sass](http://www.sass-lang.com) counterpart of the [material-ui](https://github.com/callemall/material-ui) React/CSS framework, which originally uses  [Less](https://github.com/callemall/material-ui) for the styles.

Working with material-ui **v0.7.5**.

[![Join the chat at https://gitter.im/gpbl/material-ui-sass](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/gpbl/material-ui-sass?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm version](https://badge.fury.io/js/material-ui-sass.svg)](http://badge.fury.io/js/material-ui-sass)

## Installation and first setup

### Using npm

```
npm install material-ui-sass
```

In your SCSS file you need to import directly from `node_modules`:

```sass
// when style.scss is in your project's root
@import "./node_modules/material-ui-sass/material-ui";

/* Your style here */
h1 { text-decoration: blink; }

```

### Manual download

If you don't want to dig into `node_modules` in your .scss files, you can download the sources:

* [Download 0.7.5 version](https://github.com/gpbl/material-ui-sass/archive/v0.7.5.zip) - working with material-ui v0.7.2
* Unzip and copy the **material-ui** directory into your project, usually where you put your styles.
* Import `material-ui/main` into your main `.scss` file:

```scss
@import "material-ui/main";

/* Your style here */
h1 { text-decoration: blink; }

```

## Usage

The Sass files work with the original [material-ui](https://github.com/callemall/material-ui) React components.

You can customize the default values overriding those in [_custom-variables.scss](material-ui/variables/_custom-variables.scss). Include them before importing material-ui:

```scss

@import "my-custom-variables";
@import "material-ui/main";

/* Your style here */
```

### Compiling

You **must** use [autoprefixer](https://github.com/postcss/autoprefixer) when compiling your own CSS. The [gulp sass task](gulp/tasks/sass.js) is an example on how to do it.

### Extending typography classes

Material-ui includes [a set of typography classes](material-ui/core/_typography.scss) that you can use with SASS `@extend` in your own CSS:

```sass
.my-custom-headline {
  @extend %mui-font-style-headline;
}
```

## Differences from the original version

### The framework does not change HTML tags

The original version included a set of HTML tags: `h1`, `h2`... `h6`, `p` and `hr`. Those definitions are moved in [_html.scss](material-ui/_html.scss), which is not imported by default. You need to import that file manually if you still need them.

## Contribute

I will try to keep the two frameworks in sync, but you can also help :-)
If you find bugs or idea for improvements, feel free to [add a new issue](https://github.com/gpbl/material-ui-sass/issues/new).

If you'd like to send pull requests, please try to adopt the current styles and conventions. For now, they need to be close to the [original less code](https://github.com/callemall/material-ui/blob/master/src/less).

### Development

When converting to Sass, I've found the material-ui [docs site](https://github.com/callemall/material-ui/tree/master/docs) useful to preview my changes. After starting the doc site server, a watching gulp task overwrites the site's `main.css` with the Sass-compiled version. (This means you may need to sassify also the documentation site)

#### Clone with submodules

```
git clone --recursive https://github.com/gpbl/material-ui-sass.git
cd material-ui-sass
```

#### Start the dev environment

```bash
npm install    # will install material-ui-sass dep
npm run setup  # will install material-ui docs and deps
npm run dev    # run the dev environment
```

`npm run dev` should open automatically the documentation site. While editing the `.scss` files, you will see a live preview of the changes.

PS. You need to make a change in a `.scss` file to overwrite the original css.

#### Start migrating the .less files

I start from the [github's compare view](https://github.com/callemall/material-ui/compare) showing the diff from the previous version (e.g. the v0.4.0 tag) to the current release (e.g. the v0.5.0 tag – not master!). This view shows which `.less` files have been changed.

Then I keep opened 2 browser's windows: one displaying the the Sass version I'm working on (that running with `npm run dev`) and the other one showing http://www.material-ui.com, to help spotting the differences between the two versions.
