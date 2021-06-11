const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicle.controller');

module.exports = function () {
    router.post('/create', vehicleController.createVehicle);
    router.get('/', vehicleController.getAllVehicles);
    return router;
}

