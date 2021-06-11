const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

module.exports = function () {
    router.post('/create', categoryController.createCategory);
    router.get('/', categoryController.getAllCategories);
    router.get('/:id', categoryController.getVehiclesForCategory);
    router.get('/calculate/:id&:duration', categoryController.calculateCharge);

    return router;
}

