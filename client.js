const model = new falcor.Model({source: new falcor.HttpDataSource('/model.json')})

// model.get(['movies', {from: 0, to: 1}, ['name', 'description']])
model.get(['movies', 0 , 'title'])
  .then(function (response) {
    var movies = response.json.movies
    var source = document.getElementById('movie-template').innerHTML
    var template = Handlebars.compile(source)
    document.getElementById('data').innerHTML = template(movies)
  }, function (err) {
    console.log(err)
  })
