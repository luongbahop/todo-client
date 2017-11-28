class Config {
  constructor() {
    global.API = 'https://project-todo-api-2017.herokuapp.com/';
    // global.API = 'http://localhost:5051/';
    global.PLATFORM = 'web';
    global.UTILS = require('./utils');
    global.ASSETS = require('./assets');
    global.COMPONENTS = require('./components');
  }
}

new Config();