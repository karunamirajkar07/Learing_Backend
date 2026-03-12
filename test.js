require("dotenv").config()
const postgres = require("postgres")

const sql = postgres(process.env.DATABASE_URL)

async function testDB() {
  try {
    const result = await sql`SELECT NOW()`
    console.log("Database connected:", result)
  } catch (error) {
    console.log("Database connection error:", error)
  }
}

testDB()