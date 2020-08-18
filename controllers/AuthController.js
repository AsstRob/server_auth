const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jasonwebtoken');

const registration = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hasedPass){
        if(err){
            res.json({
                error: err
            })
        }
    })

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
}

module.exports = registration;