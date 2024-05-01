'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Restaurants', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      rating: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: true,
        validate: {
          min: 0,
          max: 4
        }
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      site: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      phone: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      street: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      city: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      state: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      lat: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      lng: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
      }
    })

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Restaurants');
  }
};
