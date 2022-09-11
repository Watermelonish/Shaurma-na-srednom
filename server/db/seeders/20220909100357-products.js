'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const products = [
      {
        name: 'Мини с курицей и сыром',
        img_url: '',
        price: 300,
        ingredients: 'Лаваш, шашлык из курицы, фирменный соус, лук, ароматная зелень (петрушка, укроп), свежие томаты, огурцы, капуста, болгарский перец, морковь и сыр.',
        category: 'Шаурма',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Мини с курицей',
        img_url: '',
        price: 300,
        ingredients: 'Лаваш, шашлык из курицы, фирменный соус, лук, ароматная зелень (петрушка, укроп), свежие томаты, огурцы, капуста, болгарский перец, морковь и сыр.',
        category: 'Шаурма',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Шаурма и сыром',
        img_url: '',
        price: 300,
        ingredients: 'Лаваш, шашлык из курицы, фирменный соус, лук, ароматная зелень (петрушка, укроп), свежие томаты, огурцы, капуста, болгарский перец, морковь и сыр.',
        category: 'Шаурма',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Мини с курицей и говядиной',
        img_url: '',
        price: 300,
        ingredients: 'Лаваш, шашлык из курицы, фирменный соус, лук, ароматная зелень (петрушка, укроп), свежие томаты, огурцы, капуста, болгарский перец, морковь и сыр.',
        category: 'Шаурма',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]

    const users = [{
      role: 'adimn',
      password: '$2b$10$zhl.tQ//Hfp8jn0gWkAEMu2di0ioFWQVf59K9lltWBEFGKVoEQmDC',
      email: 'shawaowner@mail.ru',
      name: 'Rayan',
      address: 'Улица Пушкина',
      phone_number: 87776662,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]
      await queryInterface.bulkInsert('products', products)
      await queryInterface.bulkInsert('users', users)
  },


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
