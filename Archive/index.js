require("dotenv").config()

const express = require("express")
const app = express()

require("./app/database/knex")

const userRouter = require("./app/router/userRouter")

app.use(express.json())

app.use("/api", userRouter)

app.listen(process.env.PORT, ()=>{
 console.log("Server running on port", process.env.PORT || 5000)
})