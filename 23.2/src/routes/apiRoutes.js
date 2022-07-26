const { Router } = require('express');
const apiController = require('../controllers/apiController');

const apiRoutes = Router();

apiRoutes.get('/ping', apiController.getPing);

module.exports = apiRoutes;