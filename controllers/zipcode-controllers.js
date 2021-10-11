const { Zipcode } = require('../models');

const zipcodeController = {
    getAllZipcodes(req, res) {
        Zipcode.find()
            .select('-__v')
            .then((zipcodeData) => {
                res.json(zipcodeData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    createZipcode(req, res) {
        Zipcode.create(req.body)
            .then((zipcodeData) => {
                res.json(zipcodeData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    deleteZipcode(req, res) {
        Zipcode.findOneAndDelete(
            { zipcode: req.params.zipcode },
        )
            .then((zipcodeData) => {
                res.json(zipcodeData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
}

module.exports = zipcodeController;