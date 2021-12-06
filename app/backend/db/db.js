const {Sequelize} = require('sequelize');

module.exports = new Sequelize('db', 'mysqluser', 'attic-humorous-stylishly', {
    host: '20.113.25.17', port: 3306, dialect: 'mysql'
});
