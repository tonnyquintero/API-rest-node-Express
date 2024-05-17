const express = require('express')
const { faker } = require('@faker-js/faker')

const router = express.Router()

// Metodo GET
router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.url()
    });
  }
  res.json(products)
})

// Metodo POST
  router.post('/', (req, res) => {
    const body = req.body;
    res.json({
      message: "created",
      data: body
    })
  })

// Metodo PATCH => Cambia de forma parcial algunas cosas
router.patch('/:id', (req, res) => {
  const id = req.params
  const body = req.body;
  res.json({
    message: "partial updated",
    data: body,
    id,
  })
})

// Metodo PUT
router.put('/:id', (req, res) => {
  const id = req.params
  const body = req.body;
  res.json({
    message: "updated",
    data: body,
    id,
  })
})

// Metodo DELETE
router.delete('/:id', (req, res) => {
  const id = req.params
  res.json({
    message: "deleted",
    id,
  })
})


// OJOOO => los endpoints que tengas de forma especifica deben ir ANTES de los endpoints de forma dinámica
// Si este endpoint se coloca despues del dinámico de la línea 33 lo va a tomar como un id
router.get('/filter', (req, res) => {
  res.send('Esto es un filter')
})


router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'product 2',
    price: 2500
  })
});

module.exports = router
