# Angular Template #

This project is a personal seed project for creating angular applications in a very specific format.

### Dependencies ###

* node.js (https://nodejs.org/)
* firefox
    * Required for running tests
* npm (comes with node.js if installing normally)

### Set up ###

* First step is to clone the repository into a directory (doesn't matter where)
* Run npm install in the new directory
    * this will install the dev dependencies (grunt plus plugins) and the runtime dependencies (bootstrap, angular, etc)

### Running the application locally ###

* You'll need two command prompts open
* In command prompt 1 run grunt watch from the root of the application
    * This will compile the js/less files and put the code into /build
* Run npm start
    * This will run a server locally which hosts the whole application
* You can now visit the site at http://localhost:8000/build

### Compiling for release ###

* Run grunt (no parameters) locally
* Find the results in /bin
    * These are all the static files that are required to host the website.