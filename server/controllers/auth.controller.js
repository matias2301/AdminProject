const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.authenticateUser = async (req, res) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ) return res.status(400).json({ errors: errors.array() });    

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if( !user ) return res.status(400).json({ msg: "Verify Email and Password" });

            const comparePass = await bcryptjs.compare(password, user.password);

        if( !comparePass ) return res.status(400).json({ msg: "Verify Email and Password" });


        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, process.env.SECRET_WORD, {
            expiresIn: 3600
        }, (error, token) => {
            if( error ) throw error;

            res.json({ token });
        });


        res.json({ msg: 'User created successfully' });

    } catch (error) {
        console.log(error);
        res.status(400).send('An error has ocurred');
    }

}