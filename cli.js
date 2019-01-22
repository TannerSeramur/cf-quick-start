#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer  = require('./lib/inquirer');
const fs = require('fs');
// const path = require('path');ls

const fse = require('fs-extra');

clear();
console.log(chalk.white('----------------'));
console.log('⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ');
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
console.log('⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ');

const run = async () => {
  const credentials = await inquirer.cfQuickStartQuestions();
  console.log(credentials);
  createDirectory(credentials.name);
  whichBuild(credentials);
  whichLicense(credentials.license);
  // copyTemplate('./templates/app.js', './credentials.name');

};

run();

function createDirectory(dir){
  if (!fs.existsSync(dir)){
    fs.mkdirSync(`./${dir}`);
  }
}

function whichBuild(choice){
  switch(choice.build){
  case 'Express Server':
    // do this 
    copyFiles(`./templates/express-server`, `./${choice.name}`);
    break;
  case 'API-Server':
    // do this
    copyFiles(`./templates/api-server`, `./${choice.name}`);
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

function copyFiles(from, to){
  fse.copy(from, to, (err) => {
    if (err) throw err;
  });
}

