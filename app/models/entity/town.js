//town.js

var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var productSchema = new Schema({
    name         : String,
    description  : String,
    state  		 : String,
    food         : String,
    manners      : String,
    frontimage   : String,
    images       : [],
    latitude     : String,
    longitude    : String,
    video        : String

});


module.exports = mongoose.model('Town', productSchema);

