const express = require('express');
const router = express.Router();
const { getPortfolio, getPortfolioById, createPortfolio, updatePortfolio, deletePortfolio } = require('../controllers/portfolioController');

router.route('/').get(getPortfolio).post(createPortfolio);
router.route('/:id').get(getPortfolioById).put(updatePortfolio).delete(deletePortfolio);

module.exports = router;
