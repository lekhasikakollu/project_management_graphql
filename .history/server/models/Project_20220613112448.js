const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Prpgress', 'Completed']
    }
});

module.exports = mongoose.model('Client',ClientSchema);