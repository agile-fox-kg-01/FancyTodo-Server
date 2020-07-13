'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TodoLists', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      due_date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: null
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TodoLists');
  }
};