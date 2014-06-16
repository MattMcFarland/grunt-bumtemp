# grunt-bumtemp

> Backbone, Underscore, and Marionette template engine.  Combines a bunch of html files, then creates one html file with each wrapped in <script type="text-template" id=FILENAME(without ext)></script>

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-bumtemp --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bumtemp');
```

## The "bumtemp" task

### Overview
In your project's Gruntfile, add a section named `bumtemp` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  bumtemp: {
    src: {
     // Source files to template
    },
    dest: {
    // Result file
    },
  },
})
```

### Usage Example

In this example, we create a master template file from 3 files (header.html, footer.html, and content.html)

```js
grunt.initConfig({
  bumtemp: {
    src: {['content.html,footer.html,header.html']}
    dest: '/dist/template.html',
  },
})
```

#### Result:
```HTML
  <!-- grunt-bumtemp generated file -->

  <!-- @grunt-bumtemp: Template from content -->
  <script type="text/template" id="content">

  <h2>Hello, World!</h2>

  </script>
  <!-- /#content  :@grunt-bumtemp -->

  <!-- @grunt-bumtemp: Template from footer -->
  <script type="text/template" id="footer">

  <footer id = '#someFooter'>
    <p>Good Bye</p>
  </footer>

  </script>
  <!-- /#footer  :@grunt-bumtemp -->

  <!-- @grunt-bumtemp: Template from header -->
  <script type="text/template" id="header">

  <header>
    <h1>Some Header, eh?</h1>
  </header>

  </script>
  <!-- /#header  :@grunt-bumtemp -->
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.0.1 : First Release

## License
Copyright (c) 2014 Matt McFarland. Licensed under the MIT license.
