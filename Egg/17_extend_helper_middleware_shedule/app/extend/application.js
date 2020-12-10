'use strict';

const path = require('path');

module.exports = {

  package(key) {
    const pack = getPack();
    console.log(pack);
    return key ? pack[key] : pack;
  },

  get allPackage() {
    return getPack();
  },
};

function getPack() {
  const filePath = path.join(process.cwd(), 'package.json');
  return require(filePath);
}
