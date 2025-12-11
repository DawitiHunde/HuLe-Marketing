const express = require('express');
const router = express.Router();
const { getTeam, getTeamMemberById, createTeamMember, updateTeamMember, deleteTeamMember } = require('../controllers/teamController');

router.route('/').get(getTeam).post(createTeamMember);
router.route('/:id').get(getTeamMemberById).put(updateTeamMember).delete(deleteTeamMember);

module.exports = router;
