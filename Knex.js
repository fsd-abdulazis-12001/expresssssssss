const KnexConfig = require('./knexfile')
const knex = require('knex')(process.env.NODE_ENV || KnexConfig['development'])

module.exports = knex