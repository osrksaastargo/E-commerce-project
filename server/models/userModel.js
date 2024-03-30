const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("furniture", "root", "root1234", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define(
  "user",
  {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    verifyToken: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
  },
  {
    timestamps: true,
    sequelize,
    modelName: "User",
  }
);

module.exports = { User, sequelize };
