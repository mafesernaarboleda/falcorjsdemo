const falcor = require('falcor')
const falcorExpress = require('falcor-express')
const Router = require('falcor-router')
const express = require('express')
const _ = require('lodash')
const app = express()
const moviesServices = require('./services/movie-service')

app.use(express.static('.'))

app.use('/model.json', falcorExpress.dataSourceRoute(function (req, res) {
  return new Router([
    {
      route: 'movies',
      get: function () {
        return moviesServices.getMovies().then(function (movies) {
          return {
            path: ['movies'],
            value: movies
          }
        })
      }
    }
  ])
}))

app.listen(3000)
console.log('Listening on http://localhost:3000')
