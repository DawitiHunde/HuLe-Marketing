const QuoteRequest = require('../models/QuoteRequest');

const getQuotes = async (req, res) => {
    const quotes = await QuoteRequest.find({});
    res.json(quotes);
};

const getQuoteById = async (req, res) => {
    const quote = await QuoteRequest.findById(req.params.id);
    if (quote) res.json(quote);
    else res.status(404).json({ message: 'Quote not found' });
};

const createQuote = async (req, res) => {
    const quote = await QuoteRequest.create(req.body);
    res.status(201).json(quote);
};

const updateQuote = async (req, res) => {
    const quote = await QuoteRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (quote) res.json(quote);
    else res.status(404).json({ message: 'Quote not found' });
};

const deleteQuote = async (req, res) => {
    const quote = await QuoteRequest.findById(req.params.id);
    if (quote) {
        await quote.deleteOne();
        res.json({ message: 'Quote removed' });
    } else {
        res.status(404).json({ message: 'Quote not found' });
    }
};

module.exports = { getQuotes, getQuoteById, createQuote, updateQuote, deleteQuote };
