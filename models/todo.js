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
      allowNull : false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Field Title Cannot Be Empty!'
        },
        notNull:{
          msg: 'Field Title Null!'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Field Description Cannot Be Empty'
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Field Status Cannot Be Empty'
        }
      }
    },
    due_date: {
      type : DataTypes.DATE,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Field Due Date Cannot Be Empty'
        },
        isDate: {
          args: true,
          msg: 'Field Due Date Invalid Format'
        }
      }
    },
    place: {
      type: DataTypes.STRING,
    },
    UserId : {
      type : DataTypes.INTEGER
    }
  }, {
    hooks : {
      beforeCreate : (todo) =>{
        todo.due_date = new Date(todo.due_date)
        todo.place = todo.place ? todo.place : 'Not Set'
      }
    },
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};