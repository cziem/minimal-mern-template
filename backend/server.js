const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const router = express.Router()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// connect to DB
const options = { useNewUrlParser: true }
mongoose.connect('mongodb://localhost/mern_app', options)
  .then(() => console.log('connected to DB...'))
  .catch(err => console.log('Could not connect', err))

app.use('/details', (req, res) => {
  res.json({
    app_name: 'MERN App',
    developer: 'Fayvor George',
    aka: 'synthesis',
    info: 'This app is a demo on building mern stack applications with custom webpack and react setup. Have fun... Head over to the github page for more information'
  })
})

app.listen(PORT, () => console.log(`App is running on port ${PORT}`))