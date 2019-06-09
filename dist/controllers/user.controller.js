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
const base_controller_1 = require("./base.controller");
const baseAPI_response_schema_1 = require("./schemas/baseAPI.response.schema");
const user_service_1 = require("../services/user.service");
const users_response_schema_1 = require("./schemas/users.response.schema");
const users_request_schema_1 = require("./schemas/users.request.schema");
let UserController = class UserController extends base_controller_1.BaseController {
    async getAllUsers(ctx) {
        let serviceResult = await user_service_1.getAllUsers();
        if (serviceResult) {
            ctx.body = serviceResult;
            ctx.status = 200;
            ctx.statusMessage = null;
        }
    }
    ;
    async updateUser(ctx) {
        let serviceResult = await user_service_1.updateUser(ctx.request.body.data);
        if (serviceResult) {
            ctx.status = 200;
            ctx.statusMessage = null;
        }
    }
    ;
    async insertUser(ctx) {
        let serviceResult = await user_service_1.insertUser(ctx.request.body.data);
        if (serviceResult) {
            ctx.status = 200;
            ctx.statusMessage = null;
        }
    }
    ;
};
__decorate([
    koa_joi_swagger_ts_1.get("/"),
    koa_joi_swagger_ts_1.response(200, { $ref: users_response_schema_1.UsersResponseSchema }),
    koa_joi_swagger_ts_1.response(400, { $ref: baseAPI_response_schema_1.BaseAPIResponseSchema }),
    koa_joi_swagger_ts_1.response(500, { $ref: baseAPI_response_schema_1.BaseAPIResponseSchema }),
    koa_joi_swagger_ts_1.tag("User"),
    koa_joi_swagger_ts_1.description("Returns list of all users"),
    koa_joi_swagger_ts_1.summary("Get all users"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    koa_joi_swagger_ts_1.post("/"),
    koa_joi_swagger_ts_1.parameter("body", { $ref: users_request_schema_1.UsersRequestSchema }, koa_joi_swagger_ts_1.ENUM_PARAM_IN.body),
    koa_joi_swagger_ts_1.response(200, { $ref: baseAPI_response_schema_1.BaseAPIResponseSchema }),
    koa_joi_swagger_ts_1.response(400, { $ref: baseAPI_response_schema_1.BaseAPIResponseSchema }),
    koa_joi_swagger_ts_1.response(500, { $ref: baseAPI_response_schema_1.BaseAPIResponseSchema }),
    koa_joi_swagger_ts_1.tag("User"),
    koa_joi_swagger_ts_1.description("Update user data"),
    koa_joi_swagger_ts_1.summary("Update user data"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    koa_joi_swagger_ts_1.put("/"),
    koa_joi_swagger_ts_1.parameter("body", { $ref: users_request_schema_1.UsersRequestSchema }, koa_joi_swagger_ts_1.ENUM_PARAM_IN.body),
    koa_joi_swagger_ts_1.response(200, { $ref: baseAPI_response_schema_1.BaseAPIResponseSchema }),
    koa_joi_swagger_ts_1.response(400, { $ref: baseAPI_response_schema_1.BaseAPIResponseSchema }),
    koa_joi_swagger_ts_1.response(500, { $ref: baseAPI_response_schema_1.BaseAPIResponseSchema }),
    koa_joi_swagger_ts_1.tag("User"),
    koa_joi_swagger_ts_1.description("Insert new user"),
    koa_joi_swagger_ts_1.summary("Insert new user"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "insertUser", null);
UserController = __decorate([
    koa_joi_swagger_ts_1.controller("/users")
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map