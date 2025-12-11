const TeamMember = require('../models/TeamMember');

const getTeam = async (req, res) => {
    const team = await TeamMember.find({});
    res.json(team);
};

const getTeamMemberById = async (req, res) => {
    const member = await TeamMember.findById(req.params.id);
    if (member) res.json(member);
    else res.status(404).json({ message: 'Member not found' });
};

const createTeamMember = async (req, res) => {
    const member = await TeamMember.create(req.body);
    res.status(201).json(member);
};

const updateTeamMember = async (req, res) => {
    const member = await TeamMember.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (member) res.json(member);
    else res.status(404).json({ message: 'Member not found' });
};

const deleteTeamMember = async (req, res) => {
    const member = await TeamMember.findById(req.params.id);
    if (member) {
        await member.deleteOne();
        res.json({ message: 'Member removed' });
    } else {
        res.status(404).json({ message: 'Member not found' });
    }
};

module.exports = { getTeam, getTeamMemberById, createTeamMember, updateTeamMember, deleteTeamMember };
