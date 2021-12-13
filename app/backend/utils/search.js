const Sequelize = require('sequelize');

module.exports = function (query) {
    query = (query === undefined) ? '' : query;
    return Sequelize.where(
        Sequelize.fn('lower', Sequelize.col('name')),
        {
            [Sequelize.Op.like]: `%${query.toLowerCase()}%`
        }
    )
}