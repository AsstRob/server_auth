const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

const authenticate   = require('../middleware/authentication');


router.get('/',authenticate, UserController.index);
router.post('/show', UserController.show);
router.post('/store', UserController.store);
router.post('/update', UserController.update);
router.post('/delete', UserController.destroy);

module.exports = router;


