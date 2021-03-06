const { Zipcode } = require('../models');

const zipcodeController = {
    // Get all zipcodes
    getAllZipcodes(req, res) {
        Zipcode.find()
            .select('-__v')
            .sort({ zipcode: 1 })
            .then((zipcodeData) => {
                res.json(zipcodeData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // Get one zipcode
    getOneZipcode(req, res) {
        Zipcode.findOne(
            { zipcode: req.params.zipcode }
        )
            .select('-__v')
            .then((zipcodeData) => {
                if (!zipcodeData) {
                    res.json({ message: 'This zipcode is not in our system.' });
                }

                res.json(zipcodeData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // Add a new zipcode
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
    // Delete zipcode
    deleteZipcode(req, res) {
        Zipcode.findOneAndDelete(
            { zipcode: req.params.zipcode },
        )
            .then((zipcodeData) => {
                if (!zipcodeData) {
                    res.json({ message: 'This zipcode is not in our system.' });
                }

                res.json(zipcodeData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
}

module.exports = zipcodeController;