const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const bcrypt = require('bcrypt')
const mongoose = require('mongoose')


const MONGO_URI = 'mongodb+srv://csalerno:Tecomiste7@blogspotted.mkux9.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const mongo_uri = ''

app.use(express.static(path.join(__dirname, '../blogspotted')));

app.get('/', (req, res) => {

})

app.listen(3000, () => {
    console.log('server started')
})

module.exports = app;