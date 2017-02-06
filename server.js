const express = require('express')
const app = express()
const path = require('path')

app.get('opossum.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'node_modules', 'opossum', 'dist', 'opossum-min.js'))
})

app.get('jquery.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'node_modules', 'jquery', 'dist', 'jquery.min.js'))
})


app.get('/success', (req, res) => {
  res.end()
})

app.get('/fail', (req, res) => {
  res.status(500)
  res.end()
})

app.get('/flaky', (req, res) => {
  if (Math.random() > 0.5) {
    res.status(500)
  }
  res.end()
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})
app.listen(PORT, () => {
  console.log(`listening to port *:${PORT}. press ctrl + c to cancel.`)
})