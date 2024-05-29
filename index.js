const express = require('express')
const routerApi = require('./routes')
const cors = require('cors')

const { logErrors, errorHander, boomErrorHander } = require('./middlewares/errorHandler')

const app = express()
const port = 3000

app.use(express.json())

// INCLUYENDO LOS PUERTOS Y DOMINIOS QUE QUIERO PERMITIRLE ACCESO A MI API
const whiteList = ['http://localhost:3000/', 'http://localhost:8080', 'http://127.0.0.1:3000/']
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('No permitido por configuracion de cors en el api'))
    }
  }
}

app.use(cors(options))


app.get('/', (req, res) => {
  res.send('Hola mi server en express')
})

routerApi(app)

app.use(logErrors)
app.use(boomErrorHander)
app.use(errorHander)

app.listen(port, () => {
  console.log(`Mi port ${port}`);
})






