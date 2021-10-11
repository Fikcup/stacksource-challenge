const router = require('express').Router();
const {

} = require('../../controllers/zipcode-controllers');

// route /api/zipcode
router.route('/');

// route /api/zipcode/:zipcodeId
router.route('/:zipcodeId');

module.exports = router;