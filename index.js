'use strict';

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer  = require('./lib/inquirer');
var fs = require('fs');

clear();
console.log(
  chalk.red(
    figlet.textSync('Code Fellows')
  )
);
console.log(
  chalk.white(
    figlet.textSync('Quick Start', { horizontalLayout: 'full' })
  )
);
console.log(
  chalk.yellow(
    figlet.textSync('')
  )
);


const run = async () => {
  const credentials = await inquirer.cfQuickStartQuestions();
  console.log(credentials);
  createDirectory(credentials.name);
  whichBuild(credentials.build);
  whichLicense(credentials.license);
  

};

run();

function createDirectory(dir){
  if (!fs.existsSync(dir)){
    fs.mkdirSync(`./${dir}`);
  }
}

function whichBuild(choice){
  switch(choice){
  case 'Express Server':
    // do this 
    console.log('building express server');
    break;
  case 'API-Server':
    // do this
    console.log('building api server');
    break; 
  }
}

function whichLicense(choice){
  switch(choice){
  case 'MIT':
    // do this
    console.log('using MIT License');
    break;
  }
}
