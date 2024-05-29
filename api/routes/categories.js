const express = require('express')

const router = express.Router()

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productID } = req.params
  res.json({
    categoryId,
    productID,
    name: 'product 2',
    price: 2500
  })
})

module.exports = router
