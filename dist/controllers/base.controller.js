"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_joi_swagger_ts_1 = require("koa-joi-swagger-ts");
const apiInfo_response_schema_1 = require("./schemas/apiInfo.response.schema");
let BaseController = class BaseController {
    async index(ctx) {
        console.log("GET /api/v1/");
        ctx.status = 200;
        ctx.body = {
            code: 200,
            data: {
                appVersion: "1.0.0",
                build: "1001",
                apiVersion: 1,
                reqHeaders: ctx.request.headers,
                apiDoc: "/api/v1/swagger.json"
            }
        };
    }
    ;
};
__decorate([
    koa_joi_swagger_ts_1.get("/"),
    koa_joi_swagger_ts_1.response(200, { $ref: apiInfo_response_schema_1.ApiInfoResponseSchema }),
    koa_joi_swagger_ts_1.tag("GET"),
    koa_joi_swagger_ts_1.description("Returns text info about version of API"),
    koa_joi_swagger_ts_1.summary("Show API index page"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "index", null);
BaseController = __decorate([
    koa_joi_swagger_ts_1.controller("/api/v1")
], BaseController);
exports.BaseController = BaseController;
//# sourceMappingURL=base.controller.js.map