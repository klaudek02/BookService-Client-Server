const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);

router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/username/:id', ctrlUser.user_read);
router.put('/update/liked', ctrlUser.updateLikedBooks);
router.put('/update/observed',ctrlUser.updateObservedUsers);
router.put('/ban', ctrlUser.banUser);
module.exports = router;



