const Sequelize = require('sequelize');

 export const sequelize = new Sequelize('example_users', 'root', 'fencer', {
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
