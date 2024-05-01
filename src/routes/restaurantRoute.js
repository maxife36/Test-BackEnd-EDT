const express = require("express")
const router = express.Router()

const { restaurantControllers: controllers } = require("../controllers")

router.get('/', controllers.getAllRestaurants)
router.get('/:id', controllers.getRestaurantById)

router.post('/', controllers.createRestaurant)

router.put('/', controllers.updateRestaurant)

router.delete('/:id', controllers.deleteRestaurant)

module.exports = router