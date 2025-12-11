const express = require('express');
const router = express.Router();
const { getPricingPlans, getPricingPlanById, createPricingPlan, updatePricingPlan, deletePricingPlan } = require('../controllers/pricingController');

router.route('/').get(getPricingPlans).post(createPricingPlan);
router.route('/:id').get(getPricingPlanById).put(updatePricingPlan).delete(deletePricingPlan);

module.exports = router;
