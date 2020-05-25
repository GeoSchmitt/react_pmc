const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const PlantaSchema = new Schema({
    title: {type: String, require: true},
    address: {type: String, require: true},
    property: {type: Number, require: true},
    yearRelease: {type: Number, require: true},
    size: {type: Number, require: true},
    stuck: {type: Number, require: true},
    license: {type: Number, require: true},
    create: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('Planta', PlantaSchema)