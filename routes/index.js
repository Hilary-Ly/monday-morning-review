const router = require('express').Router();

router.use('/magicHumans', require('./magicHuman'));
router.use('/pets', require('./pet'));
router.use((req, res, next) => {
  next();
})

module.exports = router;
