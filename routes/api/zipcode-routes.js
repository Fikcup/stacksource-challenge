const router = require('express').Router();
const {
    getAllZipcodes,
    getOneZipcode,
    createZipcode,
    deleteZipcode,
} = require('../../controllers/zipcode-controllers');

// route /api/zipcode
router.route('/').get(getAllZipcodes).post(createZipcode);

// route /api/zipcode/:zipcodeId
router.route('/:zipcode').get(getOneZipcode).delete(deleteZipcode);

module.exports = router;