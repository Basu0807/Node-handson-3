const signupController =(req,res)=>{
    res.send('This is signup Page')

}

const loginController =(req,res)=>{
    res.send('This is login Page')
}

const passwordController =(req,res)=>{
    res.send('This is forget password Page')
}

const dashboardController =(req,res)=>{
    res.send('Welcome to the user dashboard')
}

module.exports={signupController,loginController,passwordController,dashboardController};