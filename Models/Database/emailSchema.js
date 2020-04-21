const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email address'],
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    }
}, {
    timestamps: true,
    versionKey: false
})

// TODO test unique validator plugin
emailSchema.plugin(uniqueValidator, {
    type: 'Failed unique validator'
})

module.exports = mongoose.model('Email', emailSchema);