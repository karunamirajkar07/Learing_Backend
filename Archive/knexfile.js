require("dotenv").config()

module.exports = {
  deployment: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    pool: {
      min: 0,
      max: 5
    }
  }
}