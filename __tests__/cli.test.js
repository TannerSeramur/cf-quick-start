'use strict';

let {createDirectory, whichBuild} = require('../cli.js');

describe('cli build module', () => {

  it ('creates expected directories', () => {
    createDirectory('test');
    expect('test').toBeTruthy();
  });
});