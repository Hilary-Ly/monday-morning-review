const router = require('express').Router();
const { MagicHuman, Pet } = require('../models');

router.get('/', async (req, res, next) => {
  try {
    const people = await MagicHuman.findAll({
      include: [
        { model: Pet, as: 'pets' }
      ]
    })

    const ginny = await MagicHuman.findByPk(3);
    const pets = await ginny.getPets();

    res.json(pets);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
