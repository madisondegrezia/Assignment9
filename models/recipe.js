"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipe.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: { len: 3 },
        validate: {
          checkLength(value) {
            if (value.length < 3) {
              throw new Error("Title length must be at least 3 characters.");
            }
          },
        },
      },
      description: {
        type: DataTypes.TEXT,
        validate: {
          len: {
            args: [1, 500],
            msg: "Description length can't exceed 500 characters.",
          },
        },
      },
      ingredients: {
        type: DataTypes.TEXT,
        validate: {
          len: {
            args: [1, 1000],
            msg: "Ingredients length can't exceed 1000 characters.",
          },
        },
      },
      instructions: {
        type: DataTypes.TEXT,
        validate: {
          len: {
            args: [1, 5000],
            msg: "Instructions length can't exceed 5000 characters.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Recipe",
      tableName: "recipes",
      underscored: true, // this option converts camelCased columns to snake_case in the DB
    }
  );
  return Recipe;
};
