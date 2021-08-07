require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
var bodyParser = require('body-parser')
const LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage('./scratch');
const routes = require('./src/routes/routes')

// Setting
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send(process.env.API_RES_HOME_PAGE)
});

// Routes Api
app.use(routes);

// App run
const PORT = process.env.PORT
const APP_NAME = process.env.APP_NAME
app.listen(PORT, () => console.log(`Start ${APP_NAME} at ${PORT} `))
