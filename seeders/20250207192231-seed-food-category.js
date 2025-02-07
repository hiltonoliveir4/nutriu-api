"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      { schema: "food", tableName: "category" },
      [
        { id: 1, name: "Cereais e derivados", createdAt: new Date(), updatedAt: new Date() },
        { id: 2, name: "Verduras, hortaliças e derivados", createdAt: new Date(), updatedAt: new Date() },
        { id: 3, name: "Frutas e derivados", createdAt: new Date(), updatedAt: new Date() },
        { id: 4, name: "Gorduras e óleos", createdAt: new Date(), updatedAt: new Date() },
        { id: 5, name: "Pescados e frutos do mar", createdAt: new Date(), updatedAt: new Date() },
        { id: 6, name: "Carnes e derivados", createdAt: new Date(), updatedAt: new Date() },
        { id: 7, name: "Leite e derivados", createdAt: new Date(), updatedAt: new Date() },
        { id: 8, name: "Bebidas (alcoólicas e não alcoólicas)", createdAt: new Date(), updatedAt: new Date() },
        { id: 9, name: "Ovos e derivados", createdAt: new Date(), updatedAt: new Date() },
        { id: 10, name: "Produtos açucarados", createdAt: new Date(), updatedAt: new Date() },
        { id: 11, name: "Miscelâneas", createdAt: new Date(), updatedAt: new Date() },
        { id: 12, name: "Outros alimentos industrializados", createdAt: new Date(), updatedAt: new Date() },
        { id: 13, name: "Alimentos preparados", createdAt: new Date(), updatedAt: new Date() },
        { id: 14, name: "Leguminosas e derivados", createdAt: new Date(), updatedAt: new Date() },
        { id: 15, name: "Nozes e sementes", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete({ schema: 'food', tableName: 'category' }, null, {});
  },
};
