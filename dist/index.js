"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const routing_1 = require("./routing");
const SERVER_PORT = 3002;
(async () => {
    const app = new Koa();
    const router = routing_1.loadRoutes();
    app.use(bodyParser());
    app
        .use(router.routes())
        .use(router.allowedMethods());
    app.listen(SERVER_PORT);
    console.log(`Server listening on http://localhost:${SERVER_PORT} ...`);
})();
//# sourceMappingURL=index.js.map