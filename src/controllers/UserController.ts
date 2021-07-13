import { request, Request, response, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../repositories/UserRepository'
import * as yup from 'yup'
import { CustomHTTPError } from '../Utils'

class UserController {

  async create(_request: Request, _response: Response) {
    const { name, email } = _request.body

    /** @BusinessLogic_Validation **/
    const userSchema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required()
    })
    try {
      await userSchema.validate(_request.body, { abortEarly: false })
    } catch (error) {
      throw new CustomHTTPError(error)
    }

    const userRepository = getCustomRepository(UserRepository)

    /** @BusinessLogic_Response **/
    /* SELECT * FROM USERS WHERE EMAIL = "EMAIL" */
    const userAlreadyExists = await userRepository.findOne({ email })
    if (userAlreadyExists) {
      throw new CustomHTTPError('User already exist!')
    }

    /** @BusinessLogic_Response **/
    const userBeingCreated = userRepository.create({ name, email })
    await userRepository.save(userBeingCreated)
    return _response
      .status(201)
      .json(userBeingCreated)
  }

  async getAll(_request: Request, _response: Response) {
    const userRepository = getCustomRepository(UserRepository)
    const allUsers = await userRepository.find()
    return _response
      .status(200)
      .json(allUsers)
  }
}

export { UserController }
