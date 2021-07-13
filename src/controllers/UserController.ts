import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../repositories/UserRepository'

class UserController {
  async create(_request: Request, _response: Response) {
    const { name, email } = _request.body

    const userRepository = getCustomRepository(UserRepository)

    /* SELECT * FROM USERS WHERE EMAIL = "EMAIL" */
    const userAlreadyExists = await userRepository.findOne({ email })
    if (userAlreadyExists) {
      return _response
        .status(400)
        .json({
          error: 'User already exist!'
        })
    }

    const userBeingCreated = userRepository.create({ name, email })
    await userRepository.save(userBeingCreated)

    return _response.send(userBeingCreated)
  }
}

export { UserController }
