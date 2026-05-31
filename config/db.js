const mongoose = require("mongoose")


const connecteDB = async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/BackendEvaluation")
        console.log("DB connected")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connecteDB