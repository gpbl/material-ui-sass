material-ui-sass
================

This is the [Sass](http://www.sass-lang.com) counterpart of the [material-ui](https://github.com/callemall/material-ui) React/CSS framework, which originally uses  [Less](https://github.com/callemall/material-ui) for the styles.

## Installation

* [Download last version](https://github.com/gpbl/material-ui-sass/archive/v0.3.3.zip) - v0.3.3, working with material-ui from npm
* Unzip and copy the **material-ui** directory into your project, usually where you put your styles.

> Versions tagged in this repo follow the same published on [material-ui](https://github.com/callemall/material-ui).

## Usage

The Sass files work with the original [material-ui](https://github.com/callemall/material-ui) React components.

Import `material-ui/main` into your main `.scss` file:

```scss
@import "material-ui/main";

/* Your style here */
h1 { text-decoration: blink; }

```

You can customize the default values overriding those in [_custom-variables.scss](material-ui/variables/_custom-variables.scss). Include them before importing material-ui: 

```scss

@import "my-custom-variables";
@import "material-ui/main";

/* Your style here */
```

### Compiling

To preserve my own sanity I stripped out the mixins used to add browser prefixes. This means that you **must** use [autoprefixer](https://github.com/postcss/autoprefixer) when compiling your own CSS. The [gulp sass task](gulp/tasks/sass.js) is an example on how to do it.

## Differences from the original version

### The framework does not change HTML tags

The original version included a set of HTML tags: `h1`, `h2`... `h6`, `p` and `hr`. Those definitions are moved in [_html.scss](material-ui/_html.scss), which is not imported by default. You need to import that file manually if you still need them.

### Roboto font is not imported

You need to import it by yourself using adding this line to your .scss:

```scss
@import url("//fonts.googleapis.com/css?family=Roboto:300,400,500");
```

or, even better, add the relative JavaScript to load it, as described in the [Roboto Font page](http://www.google.com/fonts#UsePlace:use/Collection:Roboto).

## Contribute

I will try to keep the two frameworks in sync, but you can also help :-)
If you find bugs or idea for improvements, feel free to [add a new issue](https://github.com/gpbl/material-ui-sass/issues/new).

If you'd like to send pull requests, please try to adopt the current styles and conventions. For now, they need to be close to the [original less code](https://github.com/callemall/material-ui/blob/master/src/less). 

### Development 

When converting to Sass, I've found the material-ui [docs site](https://github.com/callemall/material-ui/tree/master/docs) useful to preview my changes. After starting the doc site server, a watching gulp task overwrites the site's `main.css` with the Sass-compiled version. (This means you may need to sassify also the documentation site)

#### Start the dev environment

After running `npm install`, start the gulp task:

```bash
gulp
```

This should open automatically the documentation site. While editing the `.sass` files, you will see a live preview of the changes.

PS. Make sure you have [Ruby](https://www.ruby-lang.org/en/downloads/) and [Sass](http://sass-lang.com/install) installed.