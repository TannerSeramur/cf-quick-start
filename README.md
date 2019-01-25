# cf-quick-start

![Build Status](https://travis-ci.com/TannerSeramur/cf-quick-start.svg?branch=master)

`cf-quick-start` is a CLI-based project creation package that will provide you with flushed-out, functional starter code in just a few easy steps.

# Installation and Use
1. Install the package globally
```bash
npm i -g cf-quick-start
```

2. Make this call in the location you would like to create your project
```bash
cf-quick-start
```

3. Select the project you'd like to make, name it, choose a license, and decide if you'd like to create a repo.

4. Navigate to your new files and `npm i`

5. Get coding!

## About the Package
- This package currently provides options to create the following projects:
  - An **API-Server** with a [cf401-api-server](https://www.npmjs.com/package/cf401-api-server) package dependency that provides full API-Server functionality, without cluttering up your codebase. You can even create your own models and routes in the provided folders, and they'll sync right up with the package.
  - An **API-Server** with full starter code provided in your project
  - An **express server** with full starter code provided in your project
  - A suite of **config files** to get you ready to start on a backend JS project of your choosing
  - A **react-app** that provides starter code to create a React-based project

## Running your project
**API-Server**
- Run `npm start` to launch the server
- Open a browser and go to `localhost:3000/api/v1/example`. You should see the results for all the items in that database collection (it may be 0 when you get started)
- A suite of tests is included in the project. To check them, run `npm test`
- To add new models, add a new folder to models folder and name it after your route

## About the creators
This package was created by Ryan Gallaway, Becca Lee, Jared Pattison, and Tanner Seramur as a midterm project for Code Fellows JavaScript 401d28. Some of the template code was provided by their instructor, John Cokos.

## Want to contribute?
Feel free to submit a PR for review on [github](https://github.com/TannerSeramur/cf-quick-start)