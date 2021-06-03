const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

module.exports = function () {
    router.post('/create', categoryController.createCategory);
    router.get('/', categoryController.getAllCategories);
    router.get('/:id', categoryController.getVehiclesForCategory);
    return router;
}

//localhost:8080/category/60b1ffe17b0c7c16479cad43

// localhost:8080/course/60b126ed339bb10f9fbc620c
//localhost:8080/course/amount/60b126ed339bb10f9fbc620c