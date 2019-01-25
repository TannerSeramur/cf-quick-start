const inquirer   = require('inquirer');

module.exports = {

  cfQuickStartQuestions: () => {
    const questions = [
      {
        type: 'list',
        name: 'build',
        message: 'What Would You Like To Build?',
        choices: ['express-server', 'API-Server', 'API-Server Package', 'React-App', 'Just the Config Files, Please'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Name Your Project',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please Enter A Name For Your Project';
          }
        },
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which License Would You Like To Use?',
        choices: ['MIT', 'Apache License 2.0'],
      },
      {
        type: 'list',
        name: 'github',
        message: 'Would you like to create a github repo?',
        choices: ['YES', 'NO'],
      },
    ];
    
    return inquirer.prompt(questions);
  },
};
