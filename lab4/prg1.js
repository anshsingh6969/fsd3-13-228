import express from 'express'


const app = express()
//request goes here
app.get("/",(req,res)=>{
    res.send("<h1>HELLLLOOOOOOOOOOO</h1>")
})

app.listen(3333,()=>console.log('prg1 is runninggggggggg at 3333'));