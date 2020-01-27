const Sequelize = require('sequelize');
const db = require('./db');

const MagicHuman = db.define('magicHuman', {
  name: Sequelize.STRING,
  year: Sequelize.INTEGER
});

module.exports = MagicHuman;
