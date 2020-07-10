const express = require('express');
const router = express.Router();

const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

module.exports = function(){

    router.get('/', homeController.homeController);
    router.get('/nosotros',nosotrosController.infoNosotros);
    router.get('/viajes', viajesController.viajesController );
    router.get('/viajes/:id', viajesController.viajeController);
    router.get('/testimoniales',testimonialesController.obtenerController );
    router.post('/testimoniales',testimonialesController.agregarController);

    return router;
};