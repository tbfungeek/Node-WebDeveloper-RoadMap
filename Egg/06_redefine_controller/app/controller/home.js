'use strict';

const Controller = require('../core/CustomController');

class HomeController extends Controller {
  async successAction() {
    this.success({ foo: 'bar' });
  }

  async failAction() {
    this.fail('something wrong');
  }
}

module.exports = HomeController;
