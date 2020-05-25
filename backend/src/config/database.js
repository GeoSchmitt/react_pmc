const mongoose = require('mongoose');

const url = 'mongodb+srv://geo:admin@cluster0-mqnuj.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;