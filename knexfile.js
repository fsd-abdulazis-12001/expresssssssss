// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : 'db-postgresql-sgp1-74178-do-user-17224431-0.h.db.ondigitalocean.com',
      port: 25060,
      database: 'defaultdb',
      user:     'doadmin',
      password: 'AVNS_AI05TUfmKKLHuK3LMKy',
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
