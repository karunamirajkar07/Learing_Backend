const express = require("express")
const router = express.Router()

const userController = require("../controller/userController")

router.post("/User",userController.createUser)

router.get("/getUser",userController.getUser)

router.get("/getByIdUser/:id",userController.getUserById)

module.exports = router