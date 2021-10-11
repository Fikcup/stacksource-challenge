const { Zipcode } = require('../models');

const zipcodeController = {
    getAllZipcodes(req, res) {
        Zipcode.find()
            .then((zipcodeData) => {
                res.json(zipcodeData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    }
}

module.exports = zipcodeController;