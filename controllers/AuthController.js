const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registration = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hasedPass){
        if(err){
            res.json({
                error: err
            })
        }
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hasedPass,
            designation: req.body.designation,
            phone: req.body.phone,
        })

        user.save() 
        .then(user=> {
            res.json({
                message: "user added successfully!!!"
            })
        })
        .catch(error => {
            res.json({
                messsage: "An error occured!"
            })
        })
    })
}

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    console.log(username)
    console.log(password)

    User.findOne({$or: [{email:username}, {phone: username}]}) //submit the form username or phone number as username, find it
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password,  function(err, result) {
                if(err){
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({name: user.name},  'secretValue', {expiresIn: '1h'}) //create token using name and it expire in 1 hour
                    // verySecretValue is the identity of the token

                    res.json({
                        message: 'Login Successfull',
                        token: token
                    })
                }else{
                    res.json({
                        messahe: 'Password does not match '
                    })
                }
            })
        }else{
            res.json({
                message: 'User Not Found!'
            })
        }
    })
}

module.exports = {registration, login};