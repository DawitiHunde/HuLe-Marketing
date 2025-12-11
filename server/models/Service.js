const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    icon: {
        type: String, // Store icon name or URL
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    benefits: [{
        type: String,
    }],
    price: {
        type: String, // e.g., "Starting at $500"
    },
    category: {
        type: String,
        required: true,
        enum: ['Digital Marketing', 'Web Development', 'Design', 'Other'],
    },
}, {
    timestamps: true,
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
