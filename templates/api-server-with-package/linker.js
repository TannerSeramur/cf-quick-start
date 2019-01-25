'use strict';

const fs = require('fs');
const path = require('path');

const routesPath = path.join(__dirname,'./node_modules/cf401-api-server/src/routes');
const modelsPath = path.join(__dirname, './node_modules/cf401-api-server/src/models');

function symLinker() {

  fs.symlink(modelsPath, './src/models', (error, data) => {
    if (error) { throw error; }
    else {
      console.log('Looks like we made a models symlink...');
    }
  });

  fs.symlink(routesPath, './src/routes', (error, data) => {
    if (error) { throw error; }
    else {
      console.log('Looks like we made a routes symlink...');
    }
  });
}

symLinker();
