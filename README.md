# cf-quick-start

`cf-quick-start` is a CLI-based project creation package that will provide you with fleshed-out, functional starter code in just a few easy steps.

# Installation and Use
1. Install the package globally
```bash
npm i -g cf-quick-start
```

2. Make this call in the location you would like to create your project
```bash
cf-quick-start
```

3. Select the project you'd like to make, name it, choose a license, and decide if you'd like to create a GitHub repo.

4. Navigate to your new files and `npm i`

5. Get coding!

## About the Package
- This package currently provides options to create the following projects:
  - An **API-Server** with a [cf401-api-server](https://www.npmjs.com/package/cf401-api-server) package dependency that provides full API-Server functionality, without cluttering up your codebase. You can even create your own models and routes in the provided folders, and they'll sync right up with the package (please note: this functionality uses symlinks, which may not work correctly on WindowsOS running WSL).
  - An **API-Server** with full starter code provided in your project
  - An **express server** with full starter code provided in your project
  - A suite of **config files** to get you ready to start on a backend JS project of your choosing
  - A **react-app** that provides starter code to create a React-based project

## Running your project
**API-Server**
- Run `npm start` to launch the server
- Open a browser and go to `localhost:3000/api/v1/example`. You should see the results for all the items in that database collection (it may be 0 when you get started)
- A suite of tests is included in the project. To check them, run `npm test`
- To add new models, add a new folder to the models folder and name it after your route. Then, create two files in that folder. One called `<modelname>-model.js` and one called `<modelname>-schema.js`
- Routes can be added and updated in the `v1.js` file.
- To add entries to your collections, we recommend using HTTPie, which you can install globally.
  - For example, to add something to your examples model, open a new tab or window in your terminal, you would enter the following command:
  `echo '{"name":"Test Name","description":"Test description"}' | http POST :3000/api/v1/example` 


**API-Server Package**
- Before you start coding, run `npm run link` in your terminal. This command sets up a symlink between the package and your codebase that allows you to add routes and models. This command will also bring in the models and routes from the package, so you can take a closer look at the proper formatting for your files names and file contents
  - Note: this functionality may not work correctly on WindowsOS running WSL
- To run the server, enter `npm start`
- Open a browser and go to `localhost:3000/api/v1/teams`. You should see the results for all the items in that database collection (it may be 0 when you get started)
- To add new models, add a new folder to the models folder and name it after your desired route name. Then, create two files in that folder. One called `<modelname>-model.js` and one called `<modelname>-schema.js`
- To add new routes, add a new file to the routes folder. You can create new routes within that file, just be sure to follow a format similar to the provided example
- - To add entries to your collections, we recommend using HTTPie, which you can install globally.
  - For example, to add something to your examples model, open a new tab or window in your terminal, you would enter the following command:
  `echo '{"name":"Test Name"}' | http POST :3000/api/v1/teams` 

**Config files**
- This project is just config files, plain and simple! Feel free to update the files as you see fit.

**Express Server**
- Run `npm start` to launch the server
- Open a browser and go to `localhost:3000/`. You should see some text rendered from the foo.html file.
- You'll also recieve an error message if you try to access a route that doesn't exist
- This server can be used as a base for any app that requires and express server

**React-App**
- Run `npm start` to launch the app
- This will launch `localhost:3000/` in your browser
- From there, you can edit your app and save, and the browser will auto-reload

## About the creators
This package was created by Ryan Gallaway, Becca Lee, Jared Pattison, and Tanner Seramur as a midterm project for Code Fellows JavaScript 401d28. Some of the template code was provided by their instructor, John Cokos.

## Want to contribute?
Feel free to submit a PR for review on [github](https://github.com/TannerSeramur/cf-quick-start)
