const path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars').engine
const app = express()
const port = 3000

const route = require('./routes/index')
const db = require('./config/db');

db.connect();


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'data')))
app.use(express.urlencoded())


// HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', exphbs({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views'))

// Routes
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})