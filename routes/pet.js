const router = require('express').Router();
const { MagicHuman, Pet } = require('../models');

router.get('/', async (req, res, next) => {
  try {
    const pets = await Pet.findAll({
      include: [
        { model: MagicHuman, as: 'owner' }
      ]
    })
    res.json(pets);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
