const express = require('express')
const { faker } = require('@faker-js/faker')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola mi server en express')
})


app.get('/products', (req, res) => {
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

// OJOOO => los endpoints que tengas de forma especifica deben ir ANTES de los endpoints de forma dinámica
// Si este endpoint se coloca despues del dinámico de la línea 33 lo va a tomar como un id
app.get('/products/filter', (req, res) => {
  res.send('Esto es un filter')
})


app.get('/products/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'product 2',
    price: 2500
  })
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productID } = req.params
  res.json({
    categoryId,
    productID,
    name: 'product 2',
    price: 2500
  })
})


app.get('/users/:userId/products/:productId', (req, res) => {
  const { userId, productID } = req.params
  res.json({
    userId,
    productID,
    name: 'product 2',
    price: 2500
  })
})

// -----------QUERY PARAMS---------
app.get('/users', (req, res) => {
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

app.listen(port, () => {
  console.log(`Mi port ${port}`);
})
