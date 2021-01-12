'use strict'
const User=use('App/Models/Empleado')
const Hash=use('Hash')
const { validate } = use('Validator')


class UserController {

  async  index ({response}){
        const users = await User.all()

        response.status(200).json({
            message:'Here are your customers. ',
            data:users
        })
    }

 async update({request,response,params}){
     const user= await User.find(params.id)

     if(user){
         user.merge(request.post())
        user.save()
     }
     response.status(200).json(user);


 }

 async store({request,response}){
    const rules = {
        username:'required',
        email: 'required|email',
        edad: 'required'
      }

      const validation = await validate(request.all(), rules)

        if (validation.fails()) {
                return response.json({
                    message:"Verifica tus datos deben estar completos..."
                })
        }else{
        const {username,email,edad}=request.post()

        const user= await User.create({username,email,edad})
        response.status(201).json({message:'Successfully created a new user',data:user})
            }  
 }

 async show({request,response,params}){
    const user= await User.find(params.id)

    if(user){
        response.status(200).json(user)
    }else{
        response.status(200).json({message:'No se encontro el usuario'})
    }
    
 }

 async delete({request,response,params}){
    const user= await User.find(params.id)

    if(user){
        await user.delete()
        response.status(200).json({
            mesage:'Usuario Eliminado....',
        user:user})
    }else{
        response.status(200).json({message:'No se encontro el usuario'})
    }
 }
}

module.exports = UserController
