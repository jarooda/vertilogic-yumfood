'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Restaurants', [
      {
        name: 'KFC',
        logo: 'kfc.png',
        TagId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Burger King',
        logo: 'bk.png',
        TagId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nasi Pecel Bu Jum',
        logo: 'pecel-bu-jum.png',
        TagId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Restaurants', null, {})
  }
};
