require('dotenv').config()
const fs = require('fs')
const https = require('https')

const express = require('express')
const bodyParser = require('body-parser')

// Create express app
const app = express()

// POST Request with parameters
app.use(bodyParser.json())

// Host files from public folder
app.use(express.static(process.env.PUBLIC_PATH))

// Create https server
const httpsServer = https.createServer({
  key: fs.readFileSync(process.env.KEY_PATH),
  cert: fs.readFileSync(process.env.CERT_PATH)
}, app)

// Start Listening
httpsServer.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))