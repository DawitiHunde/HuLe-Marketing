const ContactMessage = require('../models/ContactMessage');

const getMessages = async (req, res) => {
    const messages = await ContactMessage.find({});
    res.json(messages);
};

const getMessageById = async (req, res) => {
    const message = await ContactMessage.findById(req.params.id);
    if (message) res.json(message);
    else res.status(404).json({ message: 'Message not found' });
};

const createMessage = async (req, res) => {
    const message = await ContactMessage.create(req.body);
    res.status(201).json(message);
};

const updateMessage = async (req, res) => {
    const message = await ContactMessage.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (message) res.json(message);
    else res.status(404).json({ message: 'Message not found' });
};

const deleteMessage = async (req, res) => {
    const message = await ContactMessage.findById(req.params.id);
    if (message) {
        await message.deleteOne();
        res.json({ message: 'Message removed' });
    } else {
        res.status(404).json({ message: 'Message not found' });
    }
};

module.exports = { getMessages, getMessageById, createMessage, updateMessage, deleteMessage };
