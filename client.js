const dataSource = new falcor.HttpDataSource("/model.json");
var model = new falcor.Model({
    source: dataSource,
    catch: dataSource
}).batch();
model.get(['movies', {from: 0, to: 14}, ['title', 'image', 'rating']])
//model.get(['movies', {lenght : 15}, ['title', 'image', 'rating', 'releaseYear']])
//model.get(['movies', {to : 14}, ['title', 'image', 'rating', 'releaseYear']])

//model.get(['movies', 0 , 'title'])
//model.get('movies[0].title')
//model.get(['movies',{ to: 0} , ['title', 'image']])
//model.get('movies[0].title')
  .then(function (response) {
    const movies = response.json.movies
    const source = document.getElementById('movie-template').innerHTML
    const template = Handlebars.compile(source)
    console.log(movies)
    document.getElementById('data').innerHTML = template(movies)
  }, function (err) {
    console.log(err)
  })

  model.get('movies[0].releaseYear')
    .then(function (response) {
      const movies = response.json.movies
      console.log(movies)
      document.getElementById('data').innerHTML = template(movies)
    }, function (err) {
      console.log(err)
    })
