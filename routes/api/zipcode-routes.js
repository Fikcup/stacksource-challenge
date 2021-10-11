const router = require('express').Router();
const {
    getAllZipcodes,
} = require('../../controllers/zipcode-controllers');

// route /api/zipcode
router.route('/').get(getAllZipcodes);

// route /api/zipcode/:zipcodeId
router.route('/:zipcodeId');

module.exports = router;