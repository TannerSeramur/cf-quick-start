const githubQ = require('./githubQ');
const git = require('simple-git');

const connectRepo = () => {
  githubQ.githubQuestions()
  .then(results => {
    console.log(results, "RESULTS HERE");
    
    const USER = results.username;
    const PASS = results.password;
    const REPO = `github.com/${USER}`;
 
    const remote = `https://${USER}:${PASS}@${REPO}`;

    git().silent(true)
      .clone(remote)
      .then(() => console.log('finished'))
      .catch((err) => console.error('failed: ', err));

      })

    };

module.exports = connectRepo;