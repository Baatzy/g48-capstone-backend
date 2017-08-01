# Basement Windows

Basement Windows was built using a clean MVC structure and ES7 syntax.

### This is the back end API for the app Boardroom
This repository contains no views. The primary Boardroom project README can be found here: https://github.com/Baatzy/g48-capstone-frontend

### Installation
The repository can be downloaded and run as a web application for development/testing:

1. Fork and clone this repository.
2. `yarn install` or `npm install` to download dependencies.
3. Utilize/install a `pg` database to test locally, and configure the database URL in `./knexfile.js` for development.
3. `yarn knex migrate:latest` and `yarn knex seed:run` to create tables and dummy data, or use `npm run knex migrate:latest` and `npm run knex seed:run` for the same.
4. `yarn dev` or `npm run dev` runs the app in development mode with nodemon, `yarn start` or `npm run start` for production mode.

### Technologies:
* Express
* Node.js
* PostgresQL
* Knex
* ES7

### Project front-end
Front-end repository can be found at:
https://github.com/Baatzy/g48-capstone-frontend

##### Built August 2017 for the Galvanize g48 capstone
Stefan Baatz - https://github.com/Baatzy
