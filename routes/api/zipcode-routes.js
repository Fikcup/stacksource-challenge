const router = require('express').Router();
const {
    getAllZipcodes,
    createZipcode,
    deleteZipcode
} = require('../../controllers/zipcode-controllers');

// route /api/zipcode
router.route('/').get(getAllZipcodes).post(createZipcode);

// route /api/zipcode/:zipcodeId
router.route('/:zipcode').delete(deleteZipcode);

module.exports = router;