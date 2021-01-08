const { Router } = require('express');
const User = require('./auth.controller');
module.exports = (router) => {
    router.post('/register', Users.createUser);
    router.post('/login', Users.loginUser);
}