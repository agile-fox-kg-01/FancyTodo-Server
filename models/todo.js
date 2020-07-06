'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToDo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ToDo.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "please fill the title field"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "please fill the description field"
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "please fill the status field"
        }
      }
    },
    due_date: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          args: true,
          msg: "please fill the due date field"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'ToDo',
  });
  return ToDo;
};