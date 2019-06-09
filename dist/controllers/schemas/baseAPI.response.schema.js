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
let BaseAPIResponseSchema = class BaseAPIResponseSchema {
    constructor() {
        this.code = Joi.number()
            .required()
            .strict()
            .only(200, 400, 500)
            .example(200)
            .description("Code of operation result");
        this.message = Joi.string().description("message will be filled in some causes");
    }
};
BaseAPIResponseSchema = __decorate([
    koa_joi_swagger_ts_1.definition("BaseAPIResponse", "Base response entity with base fields")
], BaseAPIResponseSchema);
exports.BaseAPIResponseSchema = BaseAPIResponseSchema;
//# sourceMappingURL=baseAPI.response.schema.js.map