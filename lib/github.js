const Octokit = require('@octokit/rest')
// const octokit = new Octokit ()

// new Octokit({
//   auth: {
//     type: 'basic',
//     username: 'TannerSeramur',
//     password: 'RacerChaser09%',
//   }
// }).then(result => {
//   console.log(result);
// });

var request = require('request'),
    username = "TannerSeramur",
    password = "",
    url = "https://api.github.com/user",
    auth = 'Basic '+ new Buffer.from(username + ":" + password).toString("base64");

let login = request(
    {
        url : url,
        headers : {
            "Authorization" : auth
        }
    },
    function (error, response, body) {
        // Do more stuff with 'body' here
    }
)

// .post('https://api.github.com/user/repos').form({
//   "name": "test-repo",
//   "description": "testing for npm package",
//   "homepage": "https://github.com",
//   "private": false,
//   "has_issues": true,
//   "has_projects": true,
//   "has_wiki": true
// }).catch(err => console.log(err));

new Octokit({
  auth () {
    return login.headers.Authorization;
  }
}).request('POST /user/repos',{
  "name": "test-repo",
  "description": "testing for npm package",
  "homepage": "https://github.com",
  "private": false,
  "has_issues": true,
  "has_projects": true,
  "has_wiki": true
}).catch(err => console.log(err));


// console.log(login.headers.Authorization);
