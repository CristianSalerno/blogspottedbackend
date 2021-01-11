const User = require('./auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const salt = 10;
require('dotenv').config();

exports.createUser = (req, res, next) => {

    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, salt)
    }

    User.create(newUser, (err, user) => {
        if (err && err.code === 11000) return res.status(409).send('Email already exists');
        if (err) return res.status(500).send('server error');
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: user.id },
            process.env.SECRET_KEY, {
            expiresIn: expiresIn
        })

        const dataUser = {
            name: user.name,
            email: user.email,
            accessToken: accessToken,
            expiresIn: expiresIn
        }


        //Response  
        res.send({ dataUser });
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
            const resultPassword = bcrypt.compareSync(userData.password, user.password)

            if (resultPassword) {
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: expiresIn });

                const dataUser = {
                    name: user.name,
                    email: user.email,
                    accessToken: accessToken,
                    expiresIn: expiresIn
                }
                
                res.send(dataUser);
            } else {
                //wrong password
                res.status(409).send({ message: 'Something is wrong' });
            }
        }
    })
}