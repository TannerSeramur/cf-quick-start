#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer  = require('./lib/inquirer');
const fs = require('fs');
const fse = require('fs-extra');
const dirTree = require('directory-tree');
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
    githubb.createRepo(credentials.name, );
  }
  let manifest = {temp: dirTree(`./templates/${credentials.build.toLowerCase()}`), vars: {port: 3000}};

  createDirectory(credentials.name);
  whichBuild(credentials);
  whichLicense(credentials.license);

  // console.log(' ');
  // console.log(chalk.white(figlet.textSync('N E X T  S T E P S : ', { font: 'short' })));
  // console.log(chalk.red(`cd ${credentials.name}`));
  // console.log(chalk.yellow(`npm i`));
  // console.log(chalk.blue(`npm start`));
  
  return manifest;
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
  case 'Express-Server':
    copyFiles(`${__dirname}/templates/express-server`, `./${choice.name}`);
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
  }
}

function whichLicense(choice){
  switch(choice){
  case 'MIT': 
    // copyFiles(`${__dirname}/templates/licenses/mit`, `./${choice.name}`);
    break;
  case 'Apache License 2.0': 
    // copyFiles(`${__dirname}/templates/licenses/apach20`, `./${choice.name}`);
    break;
  case 'ISC': 
    // copyFiles(`${__dirname}/templates/licenses/isc`, `./${choice.name}`);
    break;
  }
}

function copyFiles(from, to){
  fse.copy(from, to, (err) => {
    if (err) throw err;
  });
}

