const { faker } = require('@faker-js/faker')
const boom = require('@hapi/boom')

class UsersService {

  constructor() {
    this.users = []
    this.generate()
  }

  async generate() {
    const limit = 20
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newUser = {
      id: faker.string.uuid(),
      ...data
    }
    this.users.push(newUser)
    return newUser
  }
  async find() {
    return this.users
  }
  async findOne(id) {
    const foundUser = this.users.findIndex(item => item.id === id)
    if (foundUser === -1) {
      throw boom.notFound('Usuario no encontrado')
    } else {
      return this.users[foundUser]
    }
  }
  async update(id, changes) {
    const index = this.users.findIndex(item => item.id === id)
    if (index === -1) {
      throw boom.notFound('Usuario no encontrado')
    }
    const user = this.users[index]
    this.users[index] = {
      ...user,
      ...changes,
    };
    return this.users[index]
  }
  async delete(id) {
    const index = this.users.findIndex(item => item.id === id)
    if (index === -1) {
      throw boom.notFound('Usuario no encontrado')
    }
    this.users.splice(index, 1)
    return {id}
  }
}

module.exports = UsersService
