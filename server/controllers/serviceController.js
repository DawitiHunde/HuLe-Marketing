const Service = require('../models/Service');

// @desc    Get all services
// @route   GET /api/services
// @access  Public
const getServices = async (req, res) => {
    const services = await Service.find({});
    res.json(services);
};

// @desc    Get single service
// @route   GET /api/services/:id
// @access  Public
const getServiceById = async (req, res) => {
    const service = await Service.findById(req.params.id);

    if (service) {
        res.json(service);
    } else {
        res.status(404).json({ message: 'Service not found' });
    }
};

// @desc    Create a service
// @route   POST /api/services
// @access  Private/Admin
const createService = async (req, res) => {
    const { title, icon, description, benefits, price, category } = req.body;

    const service = new Service({
        title,
        icon,
        description,
        benefits,
        price,
        category,
    });

    const createdService = await service.save();
    res.status(201).json(createdService);
};

// @desc    Update a service
// @route   PUT /api/services/:id
// @access  Private/Admin
const updateService = async (req, res) => {
    const { title, icon, description, benefits, price, category } = req.body;

    const service = await Service.findById(req.params.id);

    if (service) {
        service.title = title;
        service.icon = icon;
        service.description = description;
        service.benefits = benefits;
        service.price = price;
        service.category = category;

        const updatedService = await service.save();
        res.json(updatedService);
    } else {
        res.status(404).json({ message: 'Service not found' });
    }
};

// @desc    Delete a service
// @route   DELETE /api/services/:id
// @access  Private/Admin
const deleteService = async (req, res) => {
    const service = await Service.findById(req.params.id);

    if (service) {
        await service.deleteOne();
        res.json({ message: 'Service removed' });
    } else {
        res.status(404).json({ message: 'Service not found' });
    }
};

module.exports = {
    getServices,
    getServiceById,
    createService,
    updateService,
    deleteService,
};
