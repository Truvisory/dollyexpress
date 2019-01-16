const express = require('express')
const app = express()
const port = 3002

const data = require('./data.json')

app.use(express.static('public'))

app.get('/', (req, res, next) => {
  res.status(200)
  res.send(data)
})

app.get('/:tag', (req, res, next) => {
  const tag = req.params.tag
  const songs = data.songs.filter(song => song.tags.includes(tag))
  data.tags.includes(tag)
    ? res.send(songs)
    : res.status(404).send('Tag not Matched')
})

const listener = () => console.log(`Listening on port ${port}!`)
app.listen(port, listener)