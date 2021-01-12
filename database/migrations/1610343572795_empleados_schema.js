'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpleadosSchema extends Schema {
  up () {
    this.create('empleados', (table) => {
      table.increments()
      table.string('username',80).notNullable()
      table.string('email',80).notNullable().unique()
      table.integer('edad')
      table.timestamps()
    })
  }

  down () {
    this.drop('empleados')
  }
}

module.exports = EmpleadosSchema
