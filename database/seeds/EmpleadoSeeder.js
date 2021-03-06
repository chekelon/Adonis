'use strict'

/*
|--------------------------------------------------------------------------
| EmpleadoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database=use('Database')

class EmpleadoSeeder {
  static async run () {

    const usersArray = await Factory
      .model('App/Models/Empleado')
      .createMany(5)
  }
}

module.exports = EmpleadoSeeder
