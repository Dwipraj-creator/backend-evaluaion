require("dotenv")
const express = require("express")
const cors = require("cors")
const connecteDB = require("./config/db")
const PORT = process.env.PORT || 4000


const app = express()
connecteDB()
app.use(cors())
app.use(express.json())




app.get("/",(req,res)=>{
    res.send("<h1>Api is running </h1")
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})