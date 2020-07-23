//this is a helper file
// const knex = require("knex");
// const config = require("../knexfile.js");

// module.exports = knex(config.development);
//=============================================
// get the knex method. This will be used to create an object that can be used
// to access the database.
const knex = require("knex");

// get a configuration object out of knexfile.js. Knesfile.js must export an
// object. That object will typically have multiple properties on it, one per
// "environment". Remember that when dealing with databases, different
// environments may have different database setups (i.e. file location, server
// IP address, authentication data, etc.) But each one should have the exact
// same schema... this is what migrations are for!
const config = require("../knexfile.js");

// export the knex database object, which is returned by calling the knex()
// method, and passing in the configuration object we want. In this case, we are
// passing in the development object. You could put logic in here to key off of
// an environment variable (remember dotenv and .env?), and export the database
// object based on the config that matches the environment variable. Maybe the
// environment variable name could be something like "KNEXCONFIG". What??? It
// could happen!!!
module.exports = knex(config.development);
