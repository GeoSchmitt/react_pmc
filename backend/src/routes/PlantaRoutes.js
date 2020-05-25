const express = require('express');
const router = express.Router();

const PlantaController = require('../controller/PlantaController');

router.post('/', PlantaController.create);
router.get('/:id', PlantaController.findOne);
router.get('/filter/Todos', PlantaController.all);



module.exports = router;