const router = require('express').Router();
const { MagicHuman, Pet } = require('../models');

router.get('/', async (req, res, next) => {
  try {
    const people = await MagicHuman.findAll({
      include: [
        { model: Pet, as: 'pets' }
      ]
    })
    res.json(people);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
