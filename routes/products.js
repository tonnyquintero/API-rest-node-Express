const express = require('express')
const ProductsService = require('../services/products')


const router = express.Router()
const service = new ProductsService()

// Metodo GET
router.get('/', async (req, res) => {
  const products = await service.find()
  res.json(products)
})

// Metodo POST
  router.post('/', async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body)
    res.status(201).json(newProduct)
  })

// Metodo PATCH => Cambia de forma parcial algunas cosas
router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const body = req.body;
    const product = await service.update(id, body)
    res.json(product)
  } catch (error) {
    next(error)
  }
})

// Metodo PUT
router.put('/:id', async (req, res) => {
  const id = req.params
  const body = req.body;
  res.json({
    message: "updated",
    data: body,
    id,
  })
})

// Metodo DELETE
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const rta = await service.delete(id)
    res.json(rta)
  } catch (error) {
    next(error)
  }
})


// OJOOO => los endpoints que tengas de forma especifica deben ir ANTES de los endpoints de forma dinámica
// Si este endpoint se coloca despues del dinámico de la línea 33 lo va a tomar como un id
router.get('/filter', (req, res) => {
  res.send('Esto es un filter')
})


// Metodo GET one product
router.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const product = await service.findOne(id)
    res.json(product)
  } catch (error) {
    next(error)
  }
});

module.exports = router
