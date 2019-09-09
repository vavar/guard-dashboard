'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      repositoryName: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      findings: {
        type: Sequelize.JSONB
      },
      queuedAt: {
        type: Sequelize.DATE
      },
      scanningAt: {
        type: Sequelize.DATE
      },
      finishedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Results');
  }
};