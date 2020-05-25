const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ImovelSchema = new Schema({
    star: {type: Number, required: true},
    title: {type: String, require: true},
    address: {type: String, require: true},
    property: {type: Number, require: true},
    bedroom: {type: Number, require: true},
    bathroom: {type: Number, require: true},
    suite: {type: Number, require: true},
    size: {type: Number, require: true},
    balcony: {type: Number, require: true},
    grill: {type: Number, require: true},
    create: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('Imovel', ImovelSchema)