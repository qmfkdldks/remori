const routes = require('next-routes')

module.exports = routes()
.add('index', '/:lang')
.add('bloghome', '/:lang/blog')
.add('blogpost', '/:lang/blog/:uid')
.add('notfound', '/*')