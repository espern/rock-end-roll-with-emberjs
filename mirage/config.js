import Response from 'ember-cli-mirage/response'

export default function() {
  this.get('/bands', function(schema, request) {
    if (!request.requestHeaders.authorization) {
      return new Response(401)
    }

    return schema.bands.all()
  })
  this.post('/bands')
  this.get('/bands/:id')
  this.get('/bands/:id/songs', function(schema, request) {
    let { id } = request.params
    return schema.songs.where({ bandId: id })
  })
  this.post('/users')
  this.post('/token', function(schema, request) {
    let { username: email, password }
      = JSON.parse(request.requestBody)
    let users = schema.users.where({ email, password })
    if (users.length === 1) {
      return {
        token: 'a.signed.jwt',
        userEmail: email
      }
    }
  })

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
