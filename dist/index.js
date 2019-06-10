"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const routing_1 = require("./routing");
const dadtabase_1 = require("./dadtabase");
const SERVER_PORT = 3002;
(async () => {
    const app = new Koa();
    const router = routing_1.loadRoutes();
    app.use(bodyParser());
    app
        .use(router.routes())
        .use(router.allowedMethods());
    app.listen(SERVER_PORT, async () => {
        await dadtabase_1.sequelize.authenticate()
            .then(() => {
            console.log('Connection has been established successfully.');
        })
            .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    });
    console.log(`Server listening on http://localhost:${SERVER_PORT} ...`);
})();
//# sourceMappingURL=index.js.map