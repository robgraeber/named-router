Named-Router
=================
Express 4 middleware for named routes.

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

2\. Create a template helper for your favorite templating engine. For hbs:
```
var hbs = require('hbs');

hbs.registerHelper('link_to', function(name, params) {
    if (typeof params === 'string')
        params = JSON.parse(params);
    return router.build(name, params);
});
```
3\. Profit!
```
<a href="{{link_to 'home'}}">Home</a>
```

####Credit 
Credit to Allube's [named-routes](https://github.com/alubbe/named-routes) and antitoxic's [node-reversable-router](https://github.com/web-napopa/node-reversable-router). They did all the hard work, I just wrapped it up.
