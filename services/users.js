const { faker } = require('@faker-js/faker')

class UsersService {

  constructor() {
    this.users = []
    this.generate()
  }

  generate() {
    const limit = 20
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        image: faker.image.url()
      });
    }
  }

  create(data) {
    const newUser = {
      id: faker.string.uuid(),
      ...data
    }
    this.users.push(newUser)
    return newUser
  }
  find() {
    return this.users
  }
  findOne(id) {
    return this.users.find(item => item.id === id)
  }
  update(id, changes) {
    const index = this.users.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error('Product not found')
    }
    const user = this.users[index]
    this.users[index] = {
      ...user,
      ...changes,
    };
    return this.users[index]
  }
  delete(id) {
    const index = this.users.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error('user not found')
    }
    this.users.splice(index, 1)
    return {id}
  }
}

module.exports = UsersService
