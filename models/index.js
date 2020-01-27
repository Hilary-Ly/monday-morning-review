const db = require('./db');
const Pet = require('./pet');
const MagicHuman = require('./magicHuman');

Pet.belongsTo(MagicHuman, { as: 'owner' });
MagicHuman.hasMany(Pet, { as: 'pets', foreignKey: 'ownerId' });

module.exports = { db, Pet, MagicHuman }
