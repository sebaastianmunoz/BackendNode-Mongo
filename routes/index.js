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
const dayOffChileController = require('../controllers/dayoff');
const courseController = require('../controllers/course');
const dateController = require('../controllers/dateController');
//USER ROUTES;

router.get('/api/user', userController.get);
router.post('/api/user', userController.create);
router.put('/api/user/:id', userController.update);
router.delete('/api/user/:id', userController.deleted);
router.post('/api/user/addSchedule' ,userController.addSchedule);

//PLANNING ROUTES

router.get('/api/planning', planController.get);
//router.get('/api/planning/:id' ,planController.getOnePlanning);
router.post('/api/planning', planController.create);
//router.put('/api/planning/:id', usercontroller.update);
//router.delete('/api/planning/:id', usercontroller.deleted);
router.get('/api/planning/schedule/:id' ,planController.getClassDate);
//TEMPLATES ROUTES

router.get('/api/template', templateController.get);
router.post('/api/template', templateController.create);
router.put('/api/template/:id', templateController.update);
router.delete('/api/template/:id', templateController.deleted);
router.post('/api/template/changeFavorite/:id', templateController.favoriteChange);
router.get('/api/template/getOneTemplate/:id', templateController.getOneTemplate);
router.get('/api/template/favTemplate' , templateController.getFavorite);

//Calendary ROUTES

router.get('/api/academicCalendar/getAll' ,calendaryController.get);
router.post('/api/academicCalendar' ,calendaryController.create);
router.put('/api/academicCalendar/:id' ,calendaryController.update);
router.delete('/api/academicCalendar/:id' ,calendaryController.deleted);
router.get('/api/academicCalendar/:id' ,calendaryController.getOne);
//datechile
router.get('/api/dayOffChile', dayOffChileController.get);
router.post('/api/dayOffChile', dayOffChileController.getDayOffChile);

//Course School
router.get('/api/course' ,courseController.get);
router.post('/api/course' ,courseController.create);
router.put('/api/course/:id' ,courseController.update);
router.delete('/api/course/:id' ,courseController.deleted);

//getDate Calendary Teacher

router.get('/api/getCalendaryTeacher' ,dateController.getDates);
module.exports = router;
