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

4. Get coding!

## About the Package
- This package currently provides options to create the following projects:
  - An **API-Server** with a [cf401-api-server](https://www.npmjs.com/package/cf401-api-server) package dependency that provides full API-Server functionality, without cluttering up your codebase. You can even create your own models and routes in the provided folders, and they'll sync right up with the package.
  - An **API-Server** with full starter code provided in your project
  - An **express server** with full starter code provided in your project
  - A suite of **config files** to get you ready to start on a backend JS project of your choosing
  - A **react-app** that provides starter code to create a React-based project
  - A **socket-server** with full starter code

## About the creators
This package was created by Ryan Gallaway, Becca Lee, Jared Pattison, and Tanner Seramur as a midterm project for Code Fellows JavaScript 401d28. Some of the template code was provided by their instructor, John Cokos.

## Want to contribute?
Feel free to submit a PR for review on [github](https://github.com/TannerSeramur/cf-quick-start)