const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/wizarding-world', { logging: false });

module.exports = db;
