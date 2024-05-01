'use strict';
const path = require('path')
const { Restaurant } = require('../models');
const csvParse = require('../../helpers/parseCsvFile')
const csvPath = path.join(__dirname, '../../csvFiles/restaurantes.csv')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const restaurantsInfo = csvParse(csvPath)
    
    await Restaurant.bulkCreate(restaurantsInfo);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Restaurant", null, {});

  }
};
