const express =require("express")
const userRoute = require("./UserModule/userlogin")
const { middleware1, middleware2 } = require("./Middleware/middlewares")
const dashboard = require("./UserModule/dashboardRoute")



const app = express()

const port =5000
app.use(middleware2) //this middleware for all routes

app.use('/user/:age',middleware1,userRoute)
app.use('/user/:age',middleware1,dashboard)





app.get('/',(req,res)=>{
    res.send('Welcome to the prepbytes')
})



app.listen(port,()=>{
    try {
      console.log(`Server is live at port no. ${port}`);  
    } 
    catch (error) {
        console.log(error);
    }
})