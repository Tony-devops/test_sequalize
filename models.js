// import { Sequelize, DataTypes } from "sequelize";
let sequelize = require("sequelize");
const sequelizeTwo = new sequelize.Sequelize("sqlite::memory:");
const User = sequelizeTwo.define("User", {
  username: sequelize.DataTypes.STRING,
  birthday: sequelize.DataTypes.DATE,
});
User.sync().then(() => {
  User.create({
    username: "janedoe",
    birthday: new Date(1980, 6, 20),
  });
});

// const users = await User.findAll();
// console.log(user);
