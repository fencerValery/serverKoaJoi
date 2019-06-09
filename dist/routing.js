"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const koa_joi_swagger_ts_1 = require("koa-joi-swagger-ts");
const base_controller_1 = require("./controllers/base.controller");
const baseAPI_response_schema_1 = require("./controllers/schemas/baseAPI.response.schema");
const apiInfo_response_schema_1 = require("./controllers/schemas/apiInfo.response.schema");
const user_controller_1 = require("./controllers/user.controller");
const users_response_schema_1 = require("./controllers/schemas/users.response.schema");
const users_request_schema_1 = require("./controllers/schemas/users.request.schema");
const transferObject_utils_1 = require("./utils/transferObject.utils");
const SERVER_PORT = 3002;
const controllerDecorator = async (controller, ctx, next, summary) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    ctx.body = null;
    ctx.status = 400;
    ctx.statusMessage = `Error while executing '${summary}'`;
    try {
        await controller(ctx);
    }
    catch (e) {
        console.log(e, `Error while executing '${summary}'`);
        ctx.status = 500;
    }
    ctx.body = transferObject_utils_1.TransferObjectUtils.createResponseObject(ctx.status, ctx.statusMessage, ctx.body);
};
exports.loadRoutes = () => {
    const router = new koa_joi_swagger_ts_1.KJSRouter({
        swagger: "2.0",
        info: {
            version: "1.0.0",
            title: "serverKoaJoi"
        },
        host: `localhost:${SERVER_PORT}`,
        basePath: "/api/v1",
        schemes: ["http"],
        paths: {},
        definitions: {}
    });
    router.loadDefinition(apiInfo_response_schema_1.ApiInfoResponseSchema);
    router.loadDefinition(baseAPI_response_schema_1.BaseAPIResponseSchema);
    router.loadDefinition(users_response_schema_1.UsersResponseSchema);
    router.loadDefinition(users_request_schema_1.UsersRequestSchema);
    router.loadController(base_controller_1.BaseController);
    router.loadController(user_controller_1.UserController, controllerDecorator);
    router.setSwaggerFile("swagger.json");
    router.loadSwaggerUI("/api/docs");
    return router.getRouter();
};
//# sourceMappingURL=routing.js.map