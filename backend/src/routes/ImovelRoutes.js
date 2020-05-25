const express = require('express');
const router = express.Router();

const ImovelController = require('../controller/ImovelController');

router.post('/', ImovelController.create);
router.get('/:id', ImovelController.findOne);
router.get('/filter/Casa', ImovelController.casa);
router.get('/filter/Apartamento', ImovelController.apartamento);
router.get('/filter/Todos', ImovelController.all);



module.exports = router;