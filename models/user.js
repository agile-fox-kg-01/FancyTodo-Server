'use strict';
const {
  Model
} = require('sequelize');

const { hashPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1 User memiliki banyak Todo
      User.hasMany(models.Todo)
    }
  };
  User.init({
    email: {
      type : DataTypes.STRING,
      validate:{
        isEmail : {
          args: true,
          msg: 'Format field nya harus email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Field Password wajib diisi'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    hooks : {
      beforeCreate : (user) => {
        user.password = hashPassword(user.password)
        user.role = 'Not Admin'
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};