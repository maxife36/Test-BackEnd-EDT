const { Restaurant } = require('../models');
const HttpError = require('../../errors/httpErrors')
const { v4: uuid } = require('uuid')
const Validator = require('../../validators/restaurantValidations');
const { where } = require('sequelize');

module.exports = class DbResturants {
    static async getAllRestaurants() {
        try {
            const restaurants = await Restaurant.findAll()

            if (!restaurants || !restaurants.length) throw new HttpError(404, "No se encontraros registros en la DB")

            return restaurants
        } catch (error) {
            throw error
        }
    }
    static async getRestaurantById(id) {
        try {
            const restaurant = await Restaurant.findByPk(id)

            if (!restaurant) throw new HttpError(404, `No se encontró un restaurant con el id ${id}`)

            return restaurant
        } catch (error) {
            throw error
        }
    }
    static async getRestaurantByParam(param, value) {
        try {
            const restaurant = await Restaurant.findOne({
                where: {
                    [param]: value
                }
            })

            if (!restaurant) throw new HttpError(404, `No se encontró un restaurant con ${param} = ${value}`)

            return restaurant
        } catch (error) {
            throw error
        }
    }
    static async createRestaurant(data) {
        try {      
            const { rating, name, site, email, phone, street, city, state, lat, lng } = data
    
            /* Validacion */
            const resultValidation = Validator.dataValidation(data)
            if(resultValidation !== true) throw new HttpError(400, resultValidation)
        
            const newRestaurant = {
                id: uuid(),
                rating, 
                name, 
                site, 
                email, 
                phone, 
                street, 
                city, 
                state, 
                lat, 
                lng
            }

            return await Restaurant.create(newRestaurant)
        } catch (error) {
            throw error
        }
    }
    static async updateRestaurant(data) {
        try {      
            const {id, rating, name, site, email, phone, street, city, state, lat, lng } = data
    
            /* Validacion */

            if (!id) throw new HttpError(400, 'Debe proporcionar un id')

            const resultValidation = Validator.dataValidation(data)
            if(resultValidation !== true) throw new HttpError(400, resultValidation)
        
            const updatedRestaurant = {
                rating, 
                name, 
                site, 
                email, 
                phone, 
                street, 
                city, 
                state, 
                lat, 
                lng
            }

            return await Restaurant.update(updatedRestaurant,{
                where:{id}
            })
        } catch (error) {
            throw error
        }
    }
    static async deleteRestaurant(id) {
        try {      
            return await Restaurant.destroy({
                where:{id}
            })
        } catch (error) {
            throw error
        }
    }

}
