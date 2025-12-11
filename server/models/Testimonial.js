const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    company: {
        type: String,
    },
    image: {
        type: String,
    },
    text: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        default: 5,
    },
}, {
    timestamps: true,
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
