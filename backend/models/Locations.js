const mongoose = require('mongoose');

// Initialising the mongoose Schema
const Schema = mongoose.Schema;

// Registering the City Schema
const LocationsSchema = new Schema({
    _id:{
        type:String
    },
    name: {
        type: String,
        required: true
    },
    city_id: {
        type: String
    },
    location_id: {
        type: String
    },
    city:{
        type:String
    },
    country_name: {
        type: String,
        required: true
    }
})
module.exports = mongoose.models.Locations || mongoose.model('locations',LocationsSchema);
//module.exports = mongoose.model('Locations', LocationsSchema);   // exporting the model 