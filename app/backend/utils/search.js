const Sequelize = require("sequelize");

module.exports = function (query, columnName) {
    query = query === undefined ? "" : query;
    return Sequelize.where(Sequelize.fn("lower", Sequelize.col(columnName)), {
        [Sequelize.Op.like]: `%${query.toLowerCase()}%`,
    });
};
