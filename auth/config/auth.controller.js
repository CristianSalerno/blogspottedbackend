const User = require('./auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

exports.createUser = (req, res, next) => {
    const newUser = {
        name: res.body.name,
        email: res.body.email,
        password: res.body.password
    }

    User.create(newUser, (err, user) => {
        if (err) return res.status(500).send('server error');
        const expiresIn = 24 * 60 * 60;
        const acessToken = jwt.sign({ id: user.id },
            process.env.SECRET_KEY, {
            expiresIn: expiresIn
        })
        //Response  
        res.send({ user });
    })
}


exports.loginUser = (req, res, next) => {
    const userData = {
        email: req.body.email,
        password: req.body.password
    }
    User.findOne({ email: userData.email }, (err, user) => {
        if (err) return res.status(500).send('server error');

        if (!user) {
            //email doesn't exist   
            res.status(409).send({ message: 'Something is wrong' });
        } else {
            const resultPassword = userData.password;

            if (resultPassword) {
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: expiresIn });

                res.send(userData);
            } else {
                //wrong password
                res.status(409).send({ message: 'Something is wrong' });
            }
        }
    })
}