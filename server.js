const express = require('express');
const app = express();
const peopleController = require('./controllers/people_controller')

require('dotenv').config();
require('./config/db.connection')   

const { PORT } = process.env;

//middleware

app.use('/people', peopleController);

app.get('/', (req,res) => {
    res.redirect('/people')
});

app.listen(PORT, () =>console.log(`Listening on port: ${PORT}`));