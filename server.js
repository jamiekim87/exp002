const express = require('express')
const { join } = require('path')

const app = express()

app.get('/movies', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'movies.html'))
})

app.get('/songs', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'songs.html'))
})

app.get('/food', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'food.html'))
})

app.get('/games', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'games.html'))
})

app.post('/movies', (req, res) => {
    res.send('POST request')
})

app.listen(3000)

