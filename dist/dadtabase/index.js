"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
exports.sequelize = new Sequelize('example_users', 'root', 'fencer', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 15,
        min: 5,
        idle: 20000,
        evict: 15000,
        acquire: 30000
    },
});
//# sourceMappingURL=index.js.map