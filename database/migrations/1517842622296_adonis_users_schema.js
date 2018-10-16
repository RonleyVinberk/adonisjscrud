'use strict'

const Schema = use('Schema')

class AdonisUsersSchema extends Schema {
  up () {
    this.create('adonis_users', (table) => {
      table.increments()
      table.string('nama_lengkap')
      table.string('jenis_kelamin')
      table.timestamps()
    })
  }

  down () {
    this.drop('adonis_users')
  }
}

module.exports = AdonisUsersSchema
