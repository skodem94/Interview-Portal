const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome.')
})

app.listen(3000, function () {
  console.log('Web app service listening on port 3000!')
})
