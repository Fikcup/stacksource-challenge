const router = require('express').Router();
const zipcodeRoutes = require('./zipcode-routes');

// route /api/zipcode
router.use('/zipcode', zipcodeRoutes);

module.exports = router;