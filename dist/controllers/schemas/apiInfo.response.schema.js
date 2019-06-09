"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const koa_joi_swagger_ts_1 = require("koa-joi-swagger-ts");
const baseAPI_response_schema_1 = require("./baseAPI.response.schema");
let ApiInfoResponseSchema = class ApiInfoResponseSchema extends baseAPI_response_schema_1.BaseAPIResponseSchema {
    constructor() {
        super(...arguments);
        this.data = Joi.object({
            appVersion: Joi.string()
                .description("Current version of application")
                .required(),
            build: Joi.string().description("Current build version of application"),
            apiVersion: Joi.number()
                .positive()
                .description("Version of current REST api")
                .required(),
            reqHeaders: Joi.object().description("Request headers"),
            apiDoc: Joi.string()
                .description("URL path to swagger document")
                .required()
        }).required();
    }
};
ApiInfoResponseSchema = __decorate([
    koa_joi_swagger_ts_1.definition("ApiInfo", "Information data about current application and API version")
], ApiInfoResponseSchema);
exports.ApiInfoResponseSchema = ApiInfoResponseSchema;
//# sourceMappingURL=apiInfo.response.schema.js.map