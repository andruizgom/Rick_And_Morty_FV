const express = require('express');
const router = express.Router();

const {getCharById} = require('../controllers/getCharById');
const {login} = require('../controllers/login');
const {postFav} = require('../controllers/postFav');
const {deleteFav} = require('../controllers/deleteFav');
const {postUser} = require('../controllers/postUser');


router.get('/login', (req, res) => {
    login(req, res);
})

router.post('/login', (req, res) => {
    postUser(req, res);
})

router.post('/fav', (req, res) => {
    postFav(req, res);
})

router.delete('/fav/:id', (req, res) => {
    deleteFav(req, res);
})

router.get('/character/:id', (req, res) => {
    getCharById(req, res);
})
//THIS IS THE SHORT WAY:
//router.get('/character/:id', getCharById);



module.exports = router;