const PricingPlan = require('../models/PricingPlan');

const getPricingPlans = async (req, res) => {
    const plans = await PricingPlan.find({});
    res.json(plans);
};

const getPricingPlanById = async (req, res) => {
    const plan = await PricingPlan.findById(req.params.id);
    if (plan) res.json(plan);
    else res.status(404).json({ message: 'Plan not found' });
};

const createPricingPlan = async (req, res) => {
    const plan = await PricingPlan.create(req.body);
    res.status(201).json(plan);
};

const updatePricingPlan = async (req, res) => {
    const plan = await PricingPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (plan) res.json(plan);
    else res.status(404).json({ message: 'Plan not found' });
};

const deletePricingPlan = async (req, res) => {
    const plan = await PricingPlan.findById(req.params.id);
    if (plan) {
        await plan.deleteOne();
        res.json({ message: 'Plan removed' });
    } else {
        res.status(404).json({ message: 'Plan not found' });
    }
};

module.exports = { getPricingPlans, getPricingPlanById, createPricingPlan, updatePricingPlan, deletePricingPlan };
