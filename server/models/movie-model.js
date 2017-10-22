const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
  id:String,
  title: String,
  image: String,
  rating: Number,
  releaseYear: Number
})

module.exports = mongoose.model('Movie', movieSchema)
