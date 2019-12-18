var express = require('express');
var router = express.Router();
const app = express();
const User = require ('./../models/index').User;
router.use(express.json());
//Import controllers
const userController = require('../controllers/user');
const planController = require('../controllers/planning');
const templateController = require('../controllers/template');
const calendaryController = require('../controllers/calendary');

//USER ROUTES;
router.get('/api/user', userController.get);
router.post('/api/user', userController.create);
router.put('/api/user/:id', userController.update);
router.delete('/api/user/:id', userController.deleted);

//PLANNING ROUTES

router.get('/api/planning', planController.get);
//router.post('/api/planning', planController.create);
//router.put('/api/planning/:id', usercontroller.update);
//router.delete('/api/planning/:id', usercontroller.deleted);

//TEMPLATES ROUTES

router.get('/api/template', templateController.get);
router.post('/api/template', templateController.create);
router.put('/api/template/:id', templateController.update);
router.delete('/api/template/:id', templateController.deleted);
router.post('/api/template/changeFavorite/:id', templateController.favoriteChange);
router.get('/api/template/getOneTemplate/:id', templateController.getOneTemplate);
router.get('/api/template/favTemplate' , templateController.getFavorite);
//Calendary ROUTES

router.get('/api/academicCalendar' ,calendaryController.get);
router.post('/api/academicCalendar' ,calendaryController.create);


module.exports = router;
