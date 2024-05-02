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
            if (error instanceof HttpError) {
                res.status(error.status).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
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
            if (error instanceof HttpError) {
                res.status(error.status).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    },
    createRestaurant: async function (req, res) {
        try {
            const { rating, name, site, email, phone, street, city, state, lat, lng } = req.body

            const data = {
                rating: Number(rating) ? Number(rating) : null,
                name: name ? String(name) : null,
                site: site ? String(site) : null,
                email: email ? String(email) : null,
                phone: phone ? String(phone) : null,
                street: street ? String(street) : null,
                city: city ? String(city) : null,
                state: state ? String(state) : null,
                lat: Number(lat) ? Number(lat) : null,
                lng: Number(lng) ? Number(lng) : null
            }

            const restaurant = await DbResturants.createRestaurant(data)

            res.json({
                status: 200,
                data: restaurant
            })

        } catch (error) {
            if (error instanceof HttpError) {
                res.status(error.status).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    },
    updateRestaurant: async function (req, res) {
        try {
            const { id, rating, name, site, email, phone, street, city, state, lat, lng } = req.body

            if (!id) throw new HttpError(400, 'Debe proporcionar un id en el body')

            const data = {
                id: String(id)
            }

            Number(rating) ? data.rating = Number(rating) : 0
            name ? data.name = String(name) : ""
            site ? data.site = String(site) : ""
            email ? data.email = String(email) : ""
            phone ? data.phone = String(phone) : ""
            street ? data.street = String(street) : ""
            city ? data.city = String(city) : ""
            state ? data.state = String(state) : ""
            Number(lat) ? data.lat = Number(lat) : ""
            Number(lng) ? data.lng = Number(lng) : ""

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
            if (error instanceof HttpError) {
                res.status(error.status).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
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
            if (error instanceof HttpError) {
                res.status(error.status).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    },
    statisticsRestaurants: async function (req, res) {
        try {
            const { latitude, longitude, radius } = req.query;

            if (!latitude || !longitude || !radius) throw new HttpError(400, 'Se requiere Latitude, longitude y radius')


            const result = await DbResturants.statisticsRestaurants(latitude, longitude, radius)

            res.json({
                status: 200,
                data: result
            })

        } catch (error) {
            if (error instanceof HttpError) {
                res.status(error.status).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    },

}

module.exports = controllers