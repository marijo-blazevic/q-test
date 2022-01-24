# Getting Started

This project:

- was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- uses primarly Typescipt.
- uses Craco as configuration layer for create-react-app.

See package.json for external dependencies.

## Project structure

```sh
src
|
+-- assets # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components # shared components used across the entire application
|
+-- config # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- features # feature based modules
|
+-- hooks # shared hooks used across the entire application
|
+-- lib # re-exporting different libraries preconfigured for the application
|
+-- providers # all of the application providers
|
+-- routes # routes configuration
|
+-- stores # global state stores
|
+-- test # test utilities and mock server
|
+-- types # base types used accross the application
|
+-- utils # shared utility functions
```

Based on the project features and tasks project structure may not look like shown

## Setup

Prerequisites:

- Node 14+

To run this project locally run:

- `git clone https://github.com/marijo-blazevic/q-test.git`
- `npm i`
- `npm start`
