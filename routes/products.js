const express = require('express')
const ProductsService = require('../services/products')


const router = express.Router()
const service = new ProductsService()

// Metodo GET
router.get('/', (req, res) => {
  const products = service.find()
  res.json(products)
})

// Metodo POST
  router.post('/', (req, res) => {
    const body = req.body;
    const newProduct = service.create(body)
    res.status(201).json(newProduct)
  })

// Metodo PATCH => Cambia de forma parcial algunas cosas
router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body;
  const product = service.update(id, body)
  res.json(product)
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
  const { id } = req.params
  const rta = service.delete(id)
  res.json(rta)
})


// OJOOO => los endpoints que tengas de forma especifica deben ir ANTES de los endpoints de forma dinámica
// Si este endpoint se coloca despues del dinámico de la línea 33 lo va a tomar como un id
router.get('/filter', (req, res) => {
  res.send('Esto es un filter')
})


// Metodo GET one product
router.get('/:id', (req, res) => {
  const {id} = req.params;
  const product = service.findOne(id)
  res.json(product)
});

module.exports = router
