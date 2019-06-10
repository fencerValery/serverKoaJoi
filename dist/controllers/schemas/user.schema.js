"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.UserSchema = Joi.object().keys({
    id: Joi.number()
        .integer()
        .positive()
        .description("User ID")
        .example(5)
        .required(),
    login: Joi.string()
        .description("User login")
        .example("user5")
        .required(),
    email: Joi.string()
        .email()
        .description("User email")
        .example("user5@mail.com")
        .required(),
    birthYear: Joi.number()
        .integer()
        .min(1900)
        .max(2101)
        .description("Year of birthday of user")
        .example(1999),
    gender: Joi.string()
        .strict()
        .only("male", "female")
        .description("User gender")
        .example("male"),
    password: Joi.string()
        .min(6)
        .required()
        .description("User password min 6 symbols")
        .example("secret"),
});
//# sourceMappingURL=user.schema.js.map