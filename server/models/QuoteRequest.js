const mongoose = require('mongoose');

const quoteRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    businessName: {
        type: String,
    },
    service: {
        type: String,
        required: true,
    },
    budget: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['new', 'contacted', 'closed'],
        default: 'new',
    },
}, {
    timestamps: true,
});

const QuoteRequest = mongoose.model('QuoteRequest', quoteRequestSchema);

module.exports = QuoteRequest;
