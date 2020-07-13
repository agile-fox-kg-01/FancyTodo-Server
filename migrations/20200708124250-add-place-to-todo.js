'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.addColumn('Todos', 'place' , {type : Sequelize.STRING})
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.removeColumn('Todos','place',{})
  }
};
