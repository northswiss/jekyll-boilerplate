# Northswiss Jekyll Boilerplate

## Getting started
From the terminal run ```sudo npm install```

Then run ```gulp```

### Pages
Put all pages into the "pages" directory. Keeps the root nice and clean :)

You can add the front matter *ID* to append a unique class to the body.

### Navigation
For pages to appear in the main nav, you need to add the following YAML front matter:
```
nav_header: true
```
### Naming conventions
Below is a brief outline of how naming has been used in this project.

### Javascript
Use underscores "_" for naming IDs and any JavaScript related files

Gulp will concatenate and minify the JS files when you run Gulp prod. By default main.js will load, but any additional files will need to be compiled by running `gulp prod`

### CSS & SASS
Use dashes "-" for naming classes and any style related files

### SVGs
Place all SVG assets into _svg directory.

Run `gulp svg` to generate inline SVG symbols, and use them within the site using:

```html
<svg><use xlink:href="#svg-file-name"/></svg>
```

### Ready for production?

Run `gulp prod` to run all the minification and optimisation tasks