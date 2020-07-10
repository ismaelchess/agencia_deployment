const Sequelize = require('sequelize');
require('dotenv').config({path: '.env'})


module.exports = new Sequelize(process.env.db_name,process.env.db_user,process.env.db_pass, {
    host: process.env.db_host,
    port:process.env.db_port,
    dialect:'mysql',
    define : {
        timestamps: false
    },
    pool : {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
})