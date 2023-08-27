
const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
    name: String,
    image: String,
    description: String,
})


exports.Place = mongoose.model('Place', placeSchema);
