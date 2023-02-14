const express = require('express')
const app = express()
const port = 3000

// respond with "hello world" when a GET request is made to the homepage
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`App running at http://localhost:${port} or https://viable.com`)
  })