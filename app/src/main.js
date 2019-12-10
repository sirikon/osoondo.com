const Koa = require('koa');
const koaStatic = require('koa-static');
const app = new Koa();
app.use(koaStatic('./static'));
app.listen(process.env.PORT || 80);

process.on('SIGTERM', () => {
    console.log('SIGTERM detected. Shutting down.');
    process.exit();
});
