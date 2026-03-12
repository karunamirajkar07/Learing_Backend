const { Model } = require("objection")

class User extends Model {

 static get tableName() {
  return "User"
 }

 static get idColumn() {
  return "id"
 }

 static get jsonSchema() {
  return {
   type: "object",
   required: ["name","surname"],

  }
 }

}

module.exports = User