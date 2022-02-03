const { Sequelize } = require("sequelize");

module.exports = new Sequelize("db", "mysqluser", "attic-humorous-stylishly", {
    host: "20.113.56.213",
    port: 3306,
    dialect: "mysql",
});
