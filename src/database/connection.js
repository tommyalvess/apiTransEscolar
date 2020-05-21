const knex = require('knex');
const configuration = require('../../knexfile');

const config = procress.env.NODE_ENV == 'test' ? configuration.test : configuration.staging

const connection = knex(config);

module.exports = connection;