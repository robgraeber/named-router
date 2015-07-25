Named-Router
=================
Express 4 middleware for named routes. Extended from Express's built-in router module.

####Install

```
npm install named-router
```

####How to use

1\. First setup your router with all your routes:
```
var express = require('express'),
    app = express(),
    Router = require('named-router'),
    router = new Router();

router.get('/', 'home', function(req, res) {
    res.render('home', { title: 'Funky Town' });
});
    
app.use(router);
```

2\. Configure your template engine. For nunjucks:
```
var Nunjucks = require('nunjucks');

var env = Nunjucks.configure(__dirname+'/templates', {
    autoescape: true,
    express: app
});
env.addGlobal('linkTo', name => Router.build(name, arguments));
```
3\. Profit!
```
<a href="{{ linkTo('home') }}">Home</a>
```

####Credit 
Credit to Allube's [named-routes](https://github.com/alubbe/named-routes) and antitoxic's [node-reversable-router](https://github.com/web-napopa/node-reversable-router).
