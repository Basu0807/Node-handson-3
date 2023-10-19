const { log } = require("console");

const middleware1=(req,res,next)=>{
const age = req.params.age
if (age>=18) {
    console.log('you are good to go')
} 
else {
    console.log('Sorry you are underage')
}
next();
 }
 
 const middleware2=(req,res,next)=>{
    console.log('All Clear');
    next();
     }

 module.exports={middleware1,middleware2}