const koa = require('koa');
const app = new koa();

const KoaRouter= require('koa-router');
const router = new KoaRouter({ prefix : '/api' });	// ({ prefix : '/prefix-uri/...'})

router.get("/done", ctx => {
	// Object.keys(ctx.request.query).forEach( element => console.log(element) );
	console.log("Query: " , ctx.request.query);			// shows Query's full object
	console.log("Query String : ", ctx.request.querystring);	// prints query string path without ? 
	console.log("Search : ", ctx.request.search);			// prints query string path with ?

	ctx.body = { message : "this is it" },
	ctx.status = 200;
});

app.use(router.routes());

app.listen(3000, () => console.log("Koa server running...") )