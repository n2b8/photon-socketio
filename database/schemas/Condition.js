var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ConditionSchema;

ConditionSchema = new Schema({
    temperature: [{
        value: Number,
        date: {
            type: Date,
            'default': Date.now
        }
    }],
    humidity: [{
        value: Number,
        date: {
            type: Date,
            'default': Date.now
        }
    }]
});


// model
module.exports = mongoose.model('Condition', ConditionSchema);