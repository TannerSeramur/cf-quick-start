#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer  = require('./lib/inquirer');
const fs = require('fs');
const fse = require('fs-extra');
const githubb = require('./lib/github');

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
  
  if(credentials.github === 'YES'){
    githubb.createRepo(credentials.name, credentials.build);
  }
  createDirectory(credentials.name);
  whichBuild(credentials, credentials.name);
  whichLicense(credentials.license, credentials.name);
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
  case 'express-server':
    copyFiles(`${__dirname}/templates/express-server`, `./${choice.name}`, choice.name);
    break;
  case 'API-Server':
    copyFiles(`${__dirname}/templates/api-server`, `./${choice.name}`);
    break;
  case 'API-Server Package':
    copyFiles(`${__dirname}/templates/api-server-with-package`, `./${choice.name}`);
    break;
  case 'React-App':
    copyFiles(`${__dirname}/templates/react-app`, `./${choice.name}`);
    break; 
  case 'Socket Server': 
    copyFiles(`${__dirname}/templates/socket-server`, `./${choice.name}`);
    break;
  case 'Just the Config Files, Please':
    copyFiles(`${__dirname}/templates/config-files`, `./${choice.name}`);
    break;
  }
  
  return `copied ${choice}`;
}

function whichLicense(choice, name){
  switch(choice){
  case 'MIT': 
    copyFiles(`${__dirname}/templates/licenses/mit`, `./${name}/${choice}`);
    break;
  case 'Apache License 2.0': 
    copyFiles(`${__dirname}/templates/licenses/apach20`, `./${name}/${choice}`);
    break;
  }
  
  return `copied ${choice} license`;
}

function copyFiles(from, to, name){
  fse.copy(from, to)
    .then(() => {
      console.log(name);
      process.chdir(`./${name}`);
      console.log('hit 🔥');
    })
    .catch(err => console.error(err));
}

// fse.copy(from, to, name)
//   .then(name => {
//     process.chdir(name);
//     console.log('hit 🔥');
//   }).catch(err => console.log(err));


module.exports = {createDirectory, whichBuild, whichLicense};
