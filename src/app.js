//? Dependencies
const express= require('express')

const usersRouter=require('./users/users.router')

//? Initial config
const app=express()
const port=9000


//? json request available
app.use(express.json())


//? start server
app.get('/',(req,res)=>{
    res.status(200).json({message:'OK'})
})

app.use('/',usersRouter)





//? start server
app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})