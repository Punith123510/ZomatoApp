const express = require('express');

// importing all the controllers to handle requests 
var cityController = require('../Controllers/City');
var mealTypeController = require('../Controllers/mealtype');
var restaurantController = require('../Controllers/Restaurant');
var userController = require('../Controllers/users');
var locationsController=require('../controllers/Locations');
var paymentGetwayController = require('../Controllers/PaymentGetway');

// initializing and resigtering express routers 
const router = express.Router();

// registering all the routes - API endpoints 
router.get('/cityList', cityController.getCityList);
router.get('/getRestaurantsbycity/:cityId', restaurantController.getRestaurantByCity);
router.get('/mealtype', mealTypeController.getMealType);
router.post('/restaurantfilter', restaurantController.filterSearch);
router.get('/getResById/:resId', restaurantController.getRestaurantById);
router.get('/getItemsbyrestaurant/:resId', restaurantController.getItemsByRestaurant);
router.post('/signup', userController.signUp);
router.get('/login', userController.login);
router.get('/getAllLocations',locationsController.getAllLocations)
router.post('/payment', paymentGetwayController.payment);
router.post('/callback', paymentGetwayController.callback);


router.post('/addcityList', cityController.addCityList);
router.post('/addmealtype', mealTypeController.addMealType);
router.post('/addRestaurantList', restaurantController.addRestaurantList);

// exporting the router
module.exports = router;
