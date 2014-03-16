'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var DzAngularGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic DzAngular generator.'));

    var prompts = [{
      name: 'appName',
      message: 'What do you want to call your app?'
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/partials');
    this.mkdir('app/js');
    this.mkdir('app/img');
    this.mkdir('app/css');
    this.mkdir('app/fonts');

    this.template('Gruntfile.js', 'Gruntfile.js');
    this.template('index.html', 'app/index.html');
    this.template('app.css', 'app/css/app.css');
    this.template('app.js', 'app/js/app.js');
    this.template('controllers.js', 'app/js/controllers.js');
    this.template('services.js', 'app/js/services.js');
    this.template('home.html', 'app/partials/home.html');

    this.template('_bower.json', 'bower.json');
    this.template('_config.json', 'config.json');
    this.template('_package.json', 'package.json');
    this.copy('wordmap.json', 'wordmap.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = DzAngularGenerator;