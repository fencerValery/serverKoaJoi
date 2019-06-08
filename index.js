var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'Hello World!';
});



app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3001)