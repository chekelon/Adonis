'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const UserSeeder=use('./UserSeeder')
const EmpleadoSeeder=use('./EmpleadoSeeder')

class DatabaseSeeder {
  async run () {
    await EmpleadoSeeder.run();

  }
}

module.exports = DatabaseSeeder
