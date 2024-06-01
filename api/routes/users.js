const express = require('express')
const UsersService = require('../services/users')

const router = express.Router()
const service = new UsersService()

// -----------QUERY PARAMS---------
// router.get('/', (req, res) => {
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset
//     })
//   } else {
//     res.send('No hay parametros')
//   }
// })

// Metodo GET
router.get('/', async (req, res, next) => {
  try {
    const users = await service.find()
    res.json(users)
  } catch (error) {
    next(error)
  }
})

// Metodo POST
  router.post('/', async (req, res) => {
    const body = req.body;
    const newUser = await service.create(body)
    res.status(201).json(newUser)
  })

// Metodo PATCH => Cambia de forma parcial algunas cosas
router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const body = req.body;
    const user = await service.update(id, body)
    res.json(user)
  } catch (error) {
    next(error)
  }
})

// Metodo PUT
router.put('/:id', async (req, res, next) => {
  try {
    const id = req.params
    const body = req.body;
    res.json({
      message: "updated",
      data: body,
      id,
  })
  } catch (error) {
    next(error)
  }
})

// Metodo DELETE
router.delete('/:id', async(req, res, next) => {
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
    const user = await service.findOne(id)
    res.json(user)
  } catch (error) {
    next(error)
  }
});

module.exports = router



module.exports = router
