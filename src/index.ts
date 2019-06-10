import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import { loadRoutes } from "./routing";
import {sequelize} from "./dadtabase";

const SERVER_PORT = 3002;

(async () => {
  const app = new Koa();
  const router = loadRoutes();

  app.use(bodyParser());

  app
    .use(router.routes())
    .use(router.allowedMethods());

  app.listen(SERVER_PORT, async () => {
    await sequelize .authenticate()
        .then(() => {
          console.log('Connection has been established successfully.');
        })
        .catch(err => {
          console.error('Unable to connect to the database:', err);
        });
  });
  console.log(`Server listening on http://localhost:${SERVER_PORT} ...`);
})();
