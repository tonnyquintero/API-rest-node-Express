const { faker, th } = require('@faker-js/faker')

class ProductsService {

  constructor() {
    this.products = []
    this.generate()
  }

  generate() {
    const limit = 20
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.url()
      });
    }
  }

  create() {

  }
  find() {
    return this.products
  }
  findOne(id) {
    return this.products.find(item => item.id === id)
  }
  update() {

  }
  delete() {

  }
}

module.exports = ProductsService
