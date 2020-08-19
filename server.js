const express = require('express');
const mongoose = require('mongoose'); // connect with mongodb
const morgan = require('morgan'); // required for login console
const bodyParser = require('body-parser');
const UserRouter = require('./routes/UsersRouter');
const AuthRouter = require('./routes/AuthRoute');

mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', (err)=>{
    console.log(err)
});

db.once('open', ()=>{
    console.log('db connection established')
});

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`) 
});

app.use('/api/user', UserRouter);
app.use('/api', AuthRouter);