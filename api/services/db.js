const models = require('../models');

async function init() {
    await models.sequelize.authenticate();
    return models.sequelize.sync();
}

module.exports = {
    init,
    Result: models.sequelize.models.Result,
};
