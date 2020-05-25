const express = require('express');
const router = express.Router();

const UserController = require('../controller/UserController');
const UserValidation = require('../middleware/UserValidation');

router.post('/', UserController.create);
router.delete('/:id', UserController.delete);
router.put('/:id', UserController.update);
router.get('/:id', UserController.findOne);
router.get('/all', UserController.all);



module.exports = router;