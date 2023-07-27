# Sequalize Migrations
Based on this pagehttps://sequelize.org/docs/v6/other-topics/migrations/

## From scratch commands (Already done here)
```shell
npm install --save-dev sequelize-cli
npx sequelize-cli init
npm install pg pg-hstore

# This generates the following
# |_ config/config.json
# |_ migrations/
# |_ models/
# |_ seeders/
npx sequelize-cli init
```
https://sequelize.org/docs/v6/other-topics/migrations/#project-bootstrapping

### The config for development environment
```json
{
  "development": {
    "username": "node_application",
    "password": null,
    "database": "my_app_development",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  }
}
```

## Generating the User and migration (Already done here)
```shell
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
# This generates the following
# |_ models/20230722142141-create-user.js
# |_ models/user.js
```
https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-model-and-migration

## Setup Postgres Database
```shell
# connect to your local postgres server
psql -U postgres -p 5432 -h localhost 

# create database and user
CREATE USER node_application; # links with development.username
CREATE DATABASE my_app_development;  # links with development.database

# give permissions
\c my_app_development
GRANT ALL ON SCHEMA public TO node_application;
```

## Run the migration
```shell
npx sequelize-cli db:migrate
```

## Finally...
The database table has been created for you :)
A lot of work for 1 table but we are doing enterprise grade where you can have 100s table. This how they scale