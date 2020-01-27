const Sequelize = require('sequelize');
const db = require('./db');

const Pet = db.define('pet', {
  name: Sequelize.STRING,
  type: Sequelize.STRING
})

module.exports = Pet;
