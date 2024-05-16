# e-commerce-back-end

[![License: MIT](https://shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

The e-commerce-back-end is an internet retail back-end which provides a REST API that utilises the Sequelize ORM to interact with a PostgreSQL database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

In order to run the application the user must have [node.js](https://nodejs.org/en/download/current) installed. Then the user must install dependencies (Express.js, pg, Sequelize and dotenv) by running `npm i` on the command line in the root directory of the repository.

Users must also have [PostgreSQL](https://www.postgresql.org/download/) installed and open an instance of the psql shell in the /db directory.
From there, in order to create the database run the following commands:
- `\i schema.sql`
- `\q` to exit the shell

To allow Sequelize to connect to the database, users must
- Make a copy of `.env.EXAMPLE`
- Rename it to `.env`
- Update the environment variables for `DB_USER` and `DB_PASSWORD`

In order to create tables and seed, run the `seed` script with:
- `npm run seed`


## Usage

To start the application server listening the user must run `npm start`.

The user can then start interacting with the database using their favored API tool (Insomnia, Postman, etc...).

The endpints available are:
- `/api/products`
- `/api/products/:id`
- `/api/categories`
- `/api/categories/:id`
- `/api/tags`
- `/api/tags/:id`

The route methods available are:
- GET All
- GET by ID
- POST/Create new
- PUT/Update
- DELETE


Find the video walkthrough here:
[Video Walkthrough](https://drive.google.com/file/d/1D-R6G4nsRIrIMyKX5QzQhs4zDKHhxIF6/view)

## Credits

[simonjbr](https://github.com/simonjbr)

[Node.js](https://nodejs.org/en)

[Dotenv](https://www.npmjs.com/package/dotenv)

[PostgreSQL](https://www.postgresql.org/)

[pg](https://www.npmjs.com/package/pg)

[Sequelize](https://sequelize.org/)

[edX](https://www.edx.org/)

## License

Please refer to [MIT license](./LICENSE) information in the repository.