# Loving Apes App 🙉

Do you love our apes' cousins as much as I do? What's your favorite ape ? Mine are bonobos !
This is a basic app to register your favorites apes and monkeys' images, along with their names and, in the future, some information about them.

# Setting up the environment

The app has been designed as a monorepo, so the following commands can be run from the root directory.

## Installing dependencies

* `npm install` in order to install all the production and development dependecies, as defined in the `package.json` file.

## Setting up the database config

You will want to create a `.env` file in the `api` root directory where you can define the following variables:

```javascript
HOST = 127.0.0.1
DATABASE = [YOUR_DATABASE]
USER = [YOUR_MYSQL_USER_NAME]
PASSWORD = [YOUR_PASSWORD]
```

Also, when creating your data table, it should be called `apes` and have the following entries: `id`, `name`, and `url`, in order to be adapted to the config defined in the Servie Layer (`api/services/imageService.js`). Otherwise, you can edit this information in the mentioned file.

# Development environment

## Bootstraping the project

As mentioned before, being this a monorepo, you can run the building commands from the root directory. You would like to open two different terminals, one for the api and the other one for the app.

In order to build both projects:

* `npm run build:api` 
* `nom run build:app`

And to bootstrap the app and watch it working on your web:

* `npm run start:api`
* `npm run start:app`

## Testing the app

Currently, only the API is tested. In order to run the tests, you should be placed in the `api` package and execute:

`npm run test`

❗️In order to test the `updateImage` function, you should have previously pushed the object you want to modify.

# About the chosen architecture

# 🚀 Things to improve
