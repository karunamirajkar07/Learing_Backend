const { Model } = require("objection")
const knex = require("knex")
const knexConfig = require("../../knexfile")

const db = knex(knexConfig.deployment)

Model.knex(db)

module.exports = db