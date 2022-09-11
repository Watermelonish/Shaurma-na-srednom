const express = require('express');
const { product } = require('../../db/models');

const router = express.Router();

router.post('/getAll', async (req, res) => {
  try {
    const items = await product.findAll({ raw: true });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось получить данные, попробуйте еще раз' });
    console.log(error.message);
  }
});

module.exports = router;
