// const octokit = require('@octokit/rest')();
const Configstore = require('configstore');
const pkg = require('../package.json');
const _   = require('lodash');
const CLI = require('clui');
// const chalk = require('chalk');
const Spinner = CLI.Spinner;
// const Octokit = require('@octokit/rest');
// const octokit = new Octokit();
const github = require('github')();
const simpleGit = require('simple-git')();

// const inquirer = require('./inquirer');
const githubQ = require('./githubQ');

const conf = new Configstore(pkg.name);


module.exports = {

























  // getInstance: () => {
  //   return octokit;
  // },

  // getStoredGithubToken : () => {
  //   console.log('get stored github token');
  //   return conf.get('github.token');
  // },

  // setGithubCredentials : async () => {
  //   const credentials = await githubQ.githubQuestions();
    
  //   new Octokit({
  //     auth: {
  //       type: 'basic',
  //       username: credentials.username,
  //       password: credentials.password,
  //     },
  //   });

  //   // octokit.oauthAuthorizations(
  //   //   _.extend(
  //   //     {
  //   //       type: 'basic',
  //   //     },
  //   //     credentials
        
  //   //   )
  //   // );
  //   // console.log('github Login: ',credentials);
  //   // return credentials;
  // },

  // registerNewToken : async () => {
  //   console.log('registering new token');
  //   const status = new Spinner('Authenticating you, please wait...');
  //   status.start();

  //   try {
  //     console.log('in try ✅');
  //     const response = await octokit.oauthAuthorizations.createAuthorization({
  //       scopes: ['user', 'public_repo', 'repo', 'repo:status'],
  //       note: 'cf-quick-start, the command-line tool for initalizing Git repos',
  //       client_id: '7e77eb5dddc4d75ea38c',
  //       client_secret: '6227eb76e8299c42078b517bfe0223a4558040ec',

  //     });
  //     // .then(result => {
  //     //   console.log('hits here ✅ ', result);
  //     // }).catch(err => console.log(err));
      

      
  //     const token = response.data.token;
  //     console.log(token, 'Token Here ✅');
      
  //     if(token) {
  //       console.log('hits if ✅');
  //       conf.set('github.token', token);
  //       return token;
  //     } else {
  //       console.log('skips if :((((');
  //       throw new Error('Missing Token','GitHub token was not found in the response');
  //     }
  //   } catch (err) {
  //     console.log('hits Catch throwing error');
  //     throw err;
  //   } finally {
  //     console.log('hits finally');
  //     status.stop();
  //   }
  // },

};