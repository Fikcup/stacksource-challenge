const { Schema, model } = require('mongoose');

const zipcodeSchema = new Schema(
    {
        zipcode: {
            type: Number,
            minlength: 5,
            maxlength: 5,
            unique: true,
            required: true,
        }
    }
);

const Zipcode = model('Zipcode', zipcodeSchema);

module.exports = Zipcode;