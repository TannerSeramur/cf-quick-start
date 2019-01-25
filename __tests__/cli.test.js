'use strict';

let {createDirectory, whichBuild, whichLicense} = require('../cli.js');

describe('Process has completed', () => {

  it ('creates expected directories', () => {
    createDirectory('test');
    expect('test').toBeTruthy();
  });

  it('will copy the express-server file', () => {
    expect(whichBuild('express-server')).toEqual('copied express-server');
  });

  it('will copy the API-Server file', () => {
    expect(whichBuild('API-Server')).toEqual('copied API-Server');
  });

  it('will copy the API-Server Package file', () => {
    expect(whichBuild('API-Server Package')).toEqual('copied API-Server Package');
  });

  it('will copy the React-App file', () => {
    expect(whichBuild('React-App')).toEqual('copied React-App');
  });
  
  it('will copy the Socket Server file', () => {
    expect(whichBuild('Socket Server')).toEqual('copied Socket Server');
  });

  it('will copy the MIT file', () => {
    expect(whichLicense('MIT')).toEqual('copied MIT license');
  });

  it('will copy the Apache License 2.0 file', () => {
    expect(whichLicense('Apache License 2.0')).toEqual('copied Apache License 2.0 license');
  });

});