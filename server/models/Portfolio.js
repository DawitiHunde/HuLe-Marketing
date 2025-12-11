const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    industry: {
        type: String,
        required: true,
    },
    results: {
        type: String,
        required: true,
    },
    tools: [{
        type: String,
    }],
    liveLink: {
        type: String,
    },
}, {
    timestamps: true,
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;
