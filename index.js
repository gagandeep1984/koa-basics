const koa = require('koa');
const app = new koa();
const dotenvConfig = require('dotenv').config();

const KoaRouter = require('koa-router');
const router = new KoaRouter();	// ({ prefix : '/prefix-uri/...'})
const router_events = require('./src/router');

const cors = require('@koa/cors');
const parser = require('koa-bodyparser');

app
	.use(parser())
	.use(cors());

// middleware to intercept the HTTP Request to print Query Strings to console 
// app.use(async (ctx, next) => {
// 	console.log("Inspect Query : ", ctx.request.query)
// 	await next();	// hops to the next middleware or Matching route 
// 	console.log("Returned back.. ");
// });

router.get("/done", ctx => {
	// Object.keys(ctx.request.query).forEach( element => console.log(element) );
	console.log("Query: ", ctx.request.query);			// shows Query's full object
	console.log("Query String : ", ctx.request.querystring);	// prints query string path without ? 
	console.log("Search : ", ctx.request.search);			// prints query string path with ?

	ctx.body = { message: "this is it" };
	ctx.status = 200;
});

router.get("/user/:id", async (ctx, next) => {
	console.log("Params : ", ctx.request.params);
	console.log("shorthand parmas : ", ctx.params);

	console.log("Query : ", ctx.query);
	console.log("Query String : ", ctx.querystring);
	console.log("Query Search : ", ctx.search);

	const { id } = ctx.request.params;
	ctx.status = 200;
	ctx.body = "Received " + id;
});

// Mouting Routers on Koa Server F 
app.use(router.routes());			// for root router 
app.use(router_events.routes())	// for child router .. namespaced with /api

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`🚀 Koa server running...http://localhost:${PORT}/`))