'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1 todo dimiliki 1 user
      Todo.belongsTo(models.User)
    }
  };
  Todo.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Field Title wajib diisi'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'description cannot be empty'
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'status cannot be empty'
        }
      }
    },
    due_date: {
      type : DataTypes.DATE,
      validate: {
        notEmpty: {
          args: true,
          msg: 'due date cannot be empty'
        },
        isDate: {
          args: true,
          msg: 'invalid due date format'
        }
      }
    },
    UserId : {
      type : DataTypes.INTEGER
    }
  }, {
    hooks : {
      beforeCreate : (todo) =>{
        todo.due_date = new Date(todo.due_date)
      }
    },
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};