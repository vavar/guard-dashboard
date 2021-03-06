module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Results', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        repositoryName: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.STRING,
        },
        findings: {
            type: Sequelize.JSONB,
        },
        queuedAt: {
            type: Sequelize.DATE,
        },
        scanningAt: {
            type: Sequelize.DATE,
        },
        finishedAt: {
            type: Sequelize.DATE,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('Results'), // eslint-disable-line no-unused-vars
};
