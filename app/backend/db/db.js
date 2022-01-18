const { Sequelize } = require("sequelize");

module.exports = new Sequelize("db", "mysqluser", "attic-humorous-stylishly", {
    host: "20.113.25.17",
    port: 3306,
    dialect: "mysql",
});

// My Local
// module.exports = new Sequelize("dbgdsd", "root", "sysadm", {
//     host: "localhost",
//     port: 3306,
//     dialect: "mysql",
// });
