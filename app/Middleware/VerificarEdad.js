'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const user = use('App/Models/Empleado')
const Database = use('Database')

class VerificarEdad {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({request,response},next) {
    const {username,email,edad}=request.post()

    if(edad > 18){
      await next()
    }else{
      return response.json({mensaje:"Lo sentimos, no cuentas con la edad suficiente para registrarte"})
    }
  
  }
}

module.exports = VerificarEdad
