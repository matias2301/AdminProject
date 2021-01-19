const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { check } = require('express-validator');

router.post('/',
    [        
        check('email', 'Enter a valid email').isEmail(),
        check('password','Password must has at least six characters').isLength({ min: 6 })
    ],
    authController.authenticateUser);

module.exports = router;