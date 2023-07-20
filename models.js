let sequelize = require("sequelize");
let { Sequelize, DataTypes } = sequelize;

async function main() {
  /////////////////////////////////////////
  // Migrations done
  /////////////////////////////////////////
  const sequelizeInstance = new Sequelize("sqlite::memory:");
  const User = sequelizeInstance.define("User", {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  });
  const Pet = sequelizeInstance.define("User", {
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
  });
  await User.sync();

  ///////////////////////
  // Insert
  ///////////////////////
  await User.create({
    username: "janedoe",
    birthday: new Date(1980, 6, 20),
  });
  await User.create({
    username: "tony",
    birthday: new Date(1978, 6, 20),
  });

  await User.create({
    username: "jarrod",
    birthday: new Date(1178, 6, 20),
  });

  await Pet.create({
    username: "fido",
    birthday: "dog",
  });
  let users = await User.findAll();
  console.log(users);
}

main();
