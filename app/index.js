'use strict';

var join = require('path').join;
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var wiredep = require('wiredep');
var mkdirp = require('mkdirp');
var _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({

  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    this.pkg = require('../package.json');
    this.appname = this.appname.replace(/\s+/g, '');

    this.option('skip-welcome-message', {
      desc: 'Skips the welcome message',
      type: Boolean
    });

    this.option('skip-install-message', {
      desc: 'Skips the message after the installation of dependencies',
      type: Boolean
    });
  },

  askFor: function () {
    var done = this.async();

    // welcome message
    if (!this.options['skip-welcome-message']) {
      this.log(require('yosay')());
      this.log(chalk.magenta(
        'Out of the box I include HTML5 Boilerplate, jQuery, and a ' +
        'Gruntfile.js to build your app.'
      ));
    }

    var prompts = [{
      type: 'checkbox',
      name: 'features',
      message: 'What more would you like?',
      choices: [{
        name: 'Bootstrap',
        value: 'includeBootstrap',
        checked: true
      },{
        name: 'Sass',
        value: 'includeSass',
        checked: false
      }]
    }];

    this.prompt(prompts, function (answers) {
      var features = answers.features;

      function hasFeature(feat) {
        return features && features.indexOf(feat) !== -1;
      }

      this.includeSass = hasFeature('includeSass');
      this.includeBootstrap = hasFeature('includeBootstrap');

      done();
    }.bind(this));
  },

  gruntfile: function () {
    this.template('Gruntfile.js');
  },

  packageJSON: function () {
    this.template('_package.json', 'package.json');
  },

  git: function () {
    this.template('gitignore', '.gitignore');
    this.copy('gitattributes', '.gitattributes');
  },

  jscsrc: function () {
    this.copy('jscsrc', '.jscsrc');
  },

  yorc: function () {
    this.copy('yo-rc.json', '.yo-rc.json');
  },

  eslint: function () {
    this.copy('eslintrc', '.eslintrc');
  },

  editorConfig: function () {
    this.copy('editorconfig', '.editorconfig');
  },

  mainStylesheet: function () {
    var css = 'main.' + (this.includeSass ? 's' : '') + 'css';
    this.template(css, 'app/styles/' + css);
  },

  writeIndex: function () {
    var bsPath;

    // path prefix for Bootstrap JS files
    if (this.includeBootstrap) {
      if (this.includeSass) {
        bsPath = '/bower_components/bootstrap-sass/assets/javascripts/bootstrap/';
      } else {
        bsPath = '/bower_components/bootstrap/js/';
      }
    }

    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('app/index.html'),
      {
        appname: this.appname,
        includeSass: this.includeSass,
        includeBootstrap: this.includeBootstrap,
        bsPath: bsPath,
        bsPlugins: [
          'affix',
          'alert',
          'dropdown',
          'tooltip',
          'modal',
          'transition',
          'button',
          'popover',
          'carousel',
          'scrollspy',
          'collapse',
          'tab'
        ]
      }
    );
  },

  app: function () {

    this.directory('app');
    mkdirp('app/scripts');
    mkdirp('app/styles');
    mkdirp('app/images');

    //this.write('app/index.html', this.indexFile);

    this.copy('main.ts',   'app/scripts/main.ts');
    this.copy('config.ts', 'app/scripts/config.ts');
    this.copy('config.html', 'app/scripts/config.html');
  },
  ts: function () {
    this.copy('tsconfig.json', 'tsconfig.json');
  },
  config: function () {
    this.directory('config');

    if (this.includeSass) {
      this.copy('options/sass.js', 'config/sass.js');
    }
  },
  e2e: function () {
    this.directory('e2e');
  },
  server: function () {
    this.directory('server');
  },
  test: function () {
    this.directory('test');
  },
  install: function () {
    this.npmInstall();
  },
  end: function () {
    var howToInstall =
      '\nAfter running ' +
      chalk.yellow.bold('npm install') +
      ', inject your' +
      '\nfront end dependencies by running ' +
      chalk.yellow.bold('grunt wiredep') +
      '.';

    if (this.options['skip-install']) {
      this.log(howToInstall);
      return;
    }
  }
});
