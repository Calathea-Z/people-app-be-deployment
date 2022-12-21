const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const peopleController = require('./controllers/people_controller')

require('dotenv').config();
require('./config/db.connection')   

const { PORT } = process.env;

//middleware

app.use(cors()); //allows for cross origin requests;

app.use(morgan("dev")); //allows for easy logging for devlopment

app.use('/people', peopleController);

app.get('/', (req,res) => { res.redirect('/people')});

app.listen(PORT, () =>console.log(`Listening on port: ${PORT}`));