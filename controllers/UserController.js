const User = require('../models/User');
const { response } = require('express');

// show the registered users
const index = (req, res, next)=>{
    User.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message: 'An error Occured!'
        })
    })
};

// show single employee
const show = (req, res, next)=>{
    let employeeID = req.body.employeeID
    User.findById(employeeID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => { 
        res.json({
            message: 'An error Occured!'
        })
    })
}

// store a user
const store = (req, res, next) =>{
    let user = new User({
        name: res.body.name,
        designation: res.body.designation,
        email: res.body.email,
        phone: res.body.phone,
    })
    user.save()
    .then(response => {
        res.json({
            message: 'User added successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
};

// update an user
const update = (req, res, next => {
    let userID = req.body.userID

    let updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone
    }

    User.findByIdAndUpdate(userID, {$set: updateData})
    .then(()=>{
        res.json({
            message: 'User updated successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
})

// delete an employee
const destroy = (req, res, next) => {
    let userID = req.body.userID

    User.findByIdAndRemove(userID)
    .then(()=> {
        res.json({
            message: 'User deleted successfully'
        })
    })
    .catch(() => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

module.exports = {index, show, store, update, destroy}