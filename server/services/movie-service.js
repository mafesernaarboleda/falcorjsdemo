const Movie = require('../models/movie-model')
const Genre = require('../models/genre-model')

const mongoose = require('mongoose')

mongoose.connect('mongodb://admin:admin@ds015478.mlab.com:15478/falcorjsdemo')
const db = mongoose.connection
mongoose.Promise = global.Promise

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected to MongoDB')
})

module.exports = {
  getMovies: function () {
    return Movie.find(function (err, movies) {
      if (err)
        return err
      return movies
    })
  },
  getGenres: function () {
    return Genre.find(function (err, genres) {
      if (err)
        return err
      return genres
    })
  }

}
