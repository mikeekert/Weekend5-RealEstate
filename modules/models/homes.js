var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var homeSchema = new Schema({
    cost: Number,
    rent: Number,
    sqft: Number,
    city: String,
    image: String
});
var Homes = mongoose.model('listings', homeSchema);
module.exports = Homes;