const KnexConfig = require('./knexfile')
import knex from 'knex'
 

module.exports = knex(KnexConfig['development'])