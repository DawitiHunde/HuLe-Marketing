const Testimonial = require('../models/Testimonial');

const getTestimonials = async (req, res) => {
    const testimonials = await Testimonial.find({});
    res.json(testimonials);
};

const getTestimonialById = async (req, res) => {
    const testimonial = await Testimonial.findById(req.params.id);
    if (testimonial) res.json(testimonial);
    else res.status(404).json({ message: 'Testimonial not found' });
};

const createTestimonial = async (req, res) => {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json(testimonial);
};

const updateTestimonial = async (req, res) => {
    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (testimonial) res.json(testimonial);
    else res.status(404).json({ message: 'Testimonial not found' });
};

const deleteTestimonial = async (req, res) => {
    const testimonial = await Testimonial.findById(req.params.id);
    if (testimonial) {
        await testimonial.deleteOne();
        res.json({ message: 'Testimonial removed' });
    } else {
        res.status(404).json({ message: 'Testimonial not found' });
    }
};

module.exports = { getTestimonials, getTestimonialById, createTestimonial, updateTestimonial, deleteTestimonial };
