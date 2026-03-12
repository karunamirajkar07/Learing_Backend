const User = require("../model/user")

exports.createUser = async (req, res, next)=>{
    try{
        const user = await User.query().insert(req.body)
        res.status(200).send("Data created Successfully.")
    }catch(error){
        res.status(500).json(error.message)
    }
}

exports.getUser = async(req,res, next)=>{
    try{
        const GetUSer = await User.query()
        res.status(200).json({
            code:200,
            data:GetUSer,
            message: "Data Fetch successfully."
        })
    }catch(error){
        res.status(500).json(error)
    }
} 

exports.getUserById= async(req,res, next)=>{
    console.log("sdfd",req)
    try{
        const getByIdUser = await User.query().findById(req.params.id)
        res.status(200).json({
            code:200,
            data:getByIdUser,
            message:"Data fetch by ID"
        })

    }catch(error){
        res.status(200).json({
            code:400,
            message:error
        })
    }
}