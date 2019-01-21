'use strict';

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer  = require('./lib/inquirer');

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
}

run();
