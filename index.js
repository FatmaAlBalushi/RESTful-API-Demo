const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}))

function checkUsername(username , password) { 
    if(username == 'telypay' && password == 'password123')
        return true; 
    else 
        return false; 
}

app.post('/user/signin', (req, res) => {
    const username = req.body.username; 
    const password = req.body.password; 
    const isUserValid  = checkUsername(username, password)
    if(password == undefined) { 
        res.json({
            message: 'Wrong Password'
    }).status(400)
}
    else if (isUserValid){
        res.json({
            message: 'success'
        }).status(200)
    }

    else 
    res.json({
            message: 'Error'
        }).status(500)
})

 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
