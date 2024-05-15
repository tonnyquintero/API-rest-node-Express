const express = require('express')
const { faker } = require('@faker-js/faker')

const router = express.Router()

// -----------QUERY PARAMS---------
router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No hay parametros')
  }
})


router.get('/:userId/products/:productId', (req, res) => {
  const { userId, productID } = req.params
  res.json({
    userId,
    productID,
    name: 'product 2',
    price: 2500
  })
})

module.exports = router
