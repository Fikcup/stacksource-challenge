const router = require('express').Router();
const {
    getAllZipcodes,
    createZipcode,
} = require('../../controllers/zipcode-controllers');

// route /api/zipcode
router.route('/').get(getAllZipcodes).post(createZipcode);

// route /api/zipcode/:zipcodeId
router.route('/:zipcode');

module.exports = router;