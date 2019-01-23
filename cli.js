#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer  = require('./lib/inquirer');
const fs = require('fs');
const fse = require('fs-extra');

clear();
console.log(chalk.white('-'));
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

const run = async () => {
  const credentials = await inquirer.cfQuickStartQuestions();
  console.log(credentials);
  createDirectory(credentials.name);
  whichBuild(credentials);
  whichLicense(credentials.license);

};

run();

// Helper Functions
function createDirectory(dir){
  if (!fs.existsSync(dir)){
    fs.mkdirSync(`./${dir}`);
  }
}

function whichBuild(choice){
  switch(choice.build){
  case 'Express Server':
    copyFiles(`${__dirname}/templates/express-server`, `./${choice.name}`);
    break;
  case 'API-Server':
    copyFiles(`${__dirname}/templates/api-server`, `./${choice.name}`);
    break;
  case 'React-App':
    copyFiles(`${__dirname}/templates/react-app`, `./${choice.name}`);
    break; 
  case 'Socket Server': 
    copyFiles(`${__dirname}/templates/socket-server`, `./${choice.name}`);
    break;
  case 'Just the Config Files, Please':
    copyFiles(`${__dirname}/templates/config-files`, `./${choice.name}`);
  }
}

function whichLicense(choice){
  switch(choice){
  case 'MIT':
    console.log('using MIT License');
    break;
  }
}

function copyFiles(from, to){
  fse.copy(from, to, (err) => {
    if (err) throw err;
  });
}

module.exports = {createDirectory, whichBuild};