const { faker } = require('@faker-js/faker')

class ProductsService {

  constructor() {
    this.products = []
    this.generate()
  }

  async generate() {
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

  async create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }
  async find() {
    return this.products
  }
  async findOne(id) {
    const foundProduct = this.products.findIndex(item => item.id === id)
    if (foundProduct === -1) {
      throw new Error('Product not found')
    } else {
      return this.products[foundProduct]
    }
  }
  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error('Product not found')
    }
    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index]
  }
  async delete(id) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error('Product not found')
    }
    this.products.splice(index, 1)
    return {id}
  }
}

module.exports = ProductsService
