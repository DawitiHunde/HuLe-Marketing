const Portfolio = require('../models/Portfolio');

const getPortfolio = async (req, res) => {
    const items = await Portfolio.find({});
    res.json(items);
};

const getPortfolioById = async (req, res) => {
    const item = await Portfolio.findById(req.params.id);
    if (item) res.json(item);
    else res.status(404).json({ message: 'Item not found' });
};

const createPortfolio = async (req, res) => {
    const item = await Portfolio.create(req.body);
    res.status(201).json(item);
};

const updatePortfolio = async (req, res) => {
    const item = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (item) res.json(item);
    else res.status(404).json({ message: 'Item not found' });
};

const deletePortfolio = async (req, res) => {
    const item = await Portfolio.findById(req.params.id);
    if (item) {
        await item.deleteOne();
        res.json({ message: 'Item removed' });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
};

module.exports = { getPortfolio, getPortfolioById, createPortfolio, updatePortfolio, deletePortfolio };
