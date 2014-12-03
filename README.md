material-ui-sass
================

This project aims to create the [Sass](http://www.sass-lang.com) counterpart of the [material-ui](https://github.com/callemall/material-ui) CSS framework, which is written using [Less](https://github.com/callemall/material-ui). (see [this issue](https://github.com/callemall/material-ui/issues/44))

The project is at an early stage: check the [status](#status) below. [Pull requests welcome](http://www.urbandictionary.com/define.php?term=patches%20are%20welcome&defid=7833039) :-)

## Development

To help the conversion from Less to Sass, we could run locally the material-ui documentation site and preview our changes from there. After starting the documention server, a gulp watch task overwrites the site's `main.css` with our Sass-compiled version.

This obviously means we need to sassify also the documentation site, but that's not the hard part :)

### IRC channel

If you'd like to join the development, you could enter #material-ui-sass channel on Freenode.

### Start the documentation site

After running `npm install`, start the documentation site from the `node_modules` directory:

```bash
cd node_modules/material-ui/docs
npm install
gulp
```

PS. Make sure you have [Ruby](https://www.ruby-lang.org/en/downloads/) and [Sass](http://sass-lang.com/install) installed.

### Start the watch task

Open another tab/windows of the terminal, and run

```
gulp
```

to watch the `./scss/main.scss` file and overwrite the `main.css` file used by the documentation site.
While editing our Sass files, we will see a live preview of our changes.

## Status

Here a list of the files that need to be done yet. 

```
[X] = "done"
[-] = "partially done"
[ ] = "to do!"
```

Main sources:

```
scss
├── components
│   ├── [X] app-bar.scss
│   ├── [X] card.scss
│   ├── [ ] checkbox.scss
│   ├── [-] components.scss
│   ├── [X] dialog.scss
│   ├── [X] drop-down-icon.scss
│   ├── [X] drop-down-menu.scss
│   ├── [X] enhanced-button.scss
│   ├── [X] flat-button.scss
│   ├── [ ] floating-action-button.scss
│   ├── [X] icon-button.scss
│   ├── [X] icon.scss
│   ├── [ ] input.scss
│   ├── [ ] left-nav.scss
│   ├── [X] menu.scss
│   ├── [X] paper-button.scss
│   ├── [X] paper.scss
│   ├── [ ] radio-button.scss
│   ├── [X] raised-button.scss
│   ├── [X] ripple.scss
│   ├── [X] subheader.scss
│   ├── [X] table.scss
│   ├── [X] toast.scss
│   ├── [ ] toggle.scss
│   └── [X] toolbar.scss
├── [-] components.scss
├── core
│   ├── [X] base.scss
│   ├── [X] core.scss
│   ├── [X] keylines.scss
│   ├── [X] layouts.scss
│   └── [X] typography.scss
├── mixins
│   ├── [X] clearfix.scss
│   ├── [X] mixins.scss
│   ├── [X] no-wrap.scss
│   ├── [X] ripple.scss
│   └── [X] transitions.scss
├── resets
│   └── [X] typography-resets.scss
├── [X] scaffolding.scss
└── variables
    ├── [X] colors.scss
    ├── [X] custom-variables.scss
    ├── [X] media-queries.scss
    └── [X] spacing.scss
```

Documentation site:

```
├── [X] color-palette.less
├── [X] component-info.less
├── [X] footer.less
├── layout
│   └── [X] full-width-section.less
├── [X] main.less
└── pages
    ├── components
    │   ├── [X] buttons.less
    │   ├── [X] icon.less
    │   └── [X] paper.less
    ├── [X] get-started-page.less
    ├── [X] home-contribute.less
    ├── [-] home-features.less
    ├── [-] home-page-hero.less
    ├── [X] home-purpose.less
    └── [X] page-with-nav.less
```