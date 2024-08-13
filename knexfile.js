// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

require("dotenv").config();
module.exports = {
 
  development: {
    client: 'pg',
    connection: {
      host : process.env.DB_HOST,
      port: 25060,
      database: process.env.DB_NAME,
      user:      process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
 

};
