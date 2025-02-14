const math=require('./second') 
console.log(math.add(2,5))
console.log(math.sub(9,5))

Non-Blocking 
const { error } = require("console")
const fs=require("fs")
console.log("Before function")
const log1=fs.readFileSync('first.txt','utf-8')      
console.log(log1)

const log2=fs.writeFileSync('first1.txt','Hello world') 
console.log(log2)
fs.readFile("first.txt",'utf-8',(error,data)=>{
    console.log(error,data)
    console.log('Ok!, it is executed')
})
console.log("After function")

//Working with Server
// const http = require('http')
// const fs = require("fs")
// const url = require("url")
// const path = require("path")
// const revr = require('revr')
// const myServer = http.createServer((req,res)=>{
//     const log = `${new Date()}:${req.url}:${req.method}requested\n`
//     fs.appendFile('log.txt',log,()=>{}) 
//     console.log("requested")
//     switch(req.url)
//     {
//         case '/':
//             if(req.method=='GET')
//             {
//             fs.readFile(path.join(__dirname,'index.html'),(err,content)=>{res.end(content)})
//             }
//             else if(req.method=='POST')
//             {
//                 res.end('post method execution')
//             }
//             else if(req.method=='PUT')
//             {
            
//             }
//         case'/about':
//             res.end('Hello, I am Soundharya')
//             break;
//         default:
//             res.end('404 Page Not Found')
//     }
// })
// myServer.listen(8001,()=>(console.log("server created")))
// revr.listen(8001,()=>(console.log("localhost:8001")))


const express = require('express')
const app = express()
const mongoose = require('mongoose')
const user = require('./schema')
mongoose.connect('mongodb://127.0.0.1:27017/CSE3')
.then(()=>{console.log('MongoDB Connected')})
.catch((err)=>console.log('MongoDB Connection Error',err))
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.get('/',(req,res)=>{
    return res.sendFile(__dirname+'/public/index.html')
})
app.use((req,res,next)=>{
    console.log('User trying to access middle 1')
    res.send('Welcome')
    next()
})
app.use((req,res,next)=>{
    console.log('User trying to access middle 2')
    res.send('Welcome')
    next()
})
app.get('/',(req,res)=>{
    console.log('requested')
    res.send("Now i have started using express")
    next()
})
app.get('about',(req,res)=>{
    res.send('Here you are at About page')
})
app.get('/register',(req,res)=>{
    return res.sendFile(__dirname+'/public/register.html')
})
app.post('/register',(req,res)=>{
    const Newuser = new user({
        Name : req.body.Name,
        Email : req.body.Email
    })
    Newuser.save()
    .then(()=>{res.send('User saved successfully')})
    .catch(err=>res.status(500))
})
app.listen(8000,()=>{
    console.log('http://localhost:8000')
})
