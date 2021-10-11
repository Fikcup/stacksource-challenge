const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_DB || 'mongodb://localhost/stacksource', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;