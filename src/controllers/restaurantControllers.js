const { DbResturants } = require("../database/dbControllers")
const HttpError = require('../errors/httpErrors')

const controllers = {
    getAllRestaurants: async function (req, res) {
        try {
            const { param, value } = req.query
            let result = null

            if (param && value) {
                result = await DbResturants.getRestaurantByParam(param, value)
            } else {
                result = await DbResturants.getAllRestaurants()
            }

            res.json({
                status: 200,
                data: result
            })

        } catch (error) {
            console.log(error.message);
        }
    },
    getRestaurantById: async function (req, res) {
        try {
            const { id } = req.params

            if (!id) throw new HttpError(400, "Debe proporcionar un id")

            const restaurant = await DbResturants.getRestaurantById(id)

            res.json({
                status: 200,
                data: restaurant
            })

        } catch (error) {
            console.log(error.message);
        }
    },
    createRestaurant: async function (req, res) {
        try {
            const { rating, name, site, email, phone, street, city, state, lat, lng } = req.body

            const data = { 
                rating: Number(rating)? Number(rating) : null , 
                name: name? String(name) : null, 
                site: site? String(site) : null, 
                email: email? String(email) : null, 
                phone: phone? String(phone) : null, 
                street: street? String(street) : null, 
                city: city? String(city) : null, 
                state: state? String(state) : null, 
                lat: Number(lat)? Number(lat) : null , 
                lng: Number(lng)? Number(lng) : null  
            }

            const restaurant = await DbResturants.createRestaurant(data)

            res.json({
                status: 200,
                data: restaurant
            })

        } catch (error) {
            console.log(error.message);
        }
    },
    updateRestaurant: async function (req, res) {
        try {
            const {id, rating, name, site, email, phone, street, city, state, lat, lng } = req.body

            if (!id) throw new HttpError(400, 'Debe proporcionar un id en el body')

            const data = { 
                id: String(id),
                rating: Number(rating)? Number(rating) : 0 , 
                name: name? String(name) : null, 
                site: site? String(site) : null, 
                email: email? String(email) : null, 
                phone: phone? String(phone) : null, 
                street: street? String(street) : null, 
                city: city? String(city) : null, 
                state: state? String(state) : null, 
                lat: Number(lat) && Number(lat) === 0? Number(lat) : null , 
                lng: Number(lng) && Number(lng) === 0? Number(lng) : null  
            }

            const isUpdated = await DbResturants.updateRestaurant(data)

            let updatedRestaurant = []
            if (isUpdated[0]) {
                updatedRestaurant = await DbResturants.getRestaurantById(id)
            }

            res.json({
                status: 200,
                data: updatedRestaurant
            })

        } catch (error) {
            console.log(error.message);
        }
    },
    deleteRestaurant: async function (req, res) {
        try {
            const { id } = req.params
            

            const deleteRestaurant = await DbResturants.deleteRestaurant(id)


            res.json({
                status: 200,
                data: deleteRestaurant
            })

        } catch (error) {
            console.log(error.message);
        }
    },

}

module.exports = controllers