// Update with your config settings.

module.exports = {
  development: {
    //rdbms
    client: "sqlite3",
    connection: {
      filename: "./data/produce.db3",
    },
    useNullAsDefault: true,

    migrations: {
      //this folder will be build automatically
      directory: "./data/migrations",
    },
    seeds: {
      //this folder will be build automatically
      directory: "./data/seeds",
    },
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }
};
