import { Request, response, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { SurveyRepository } from '../repositories/SurveyRepository'
import { SurveyUserRepository } from '../repositories/SurveysUsersRepository'
import { UserRepository } from '../repositories/UserRepository'
import SendEmailService from '../services/SendEmail.service'

class SendMailController {
  async execute(_request: Request, _response: Response) {
    const { email, survey_id } = _request.body

    const usersRepository = getCustomRepository(UserRepository)
    const surveysRepository = getCustomRepository(SurveyRepository)
    const surveysUserRepository = getCustomRepository(SurveyUserRepository)

    const userAlreadyExists = await usersRepository.findOne({ email })
    if (!userAlreadyExists) {
      return _response
        .status(400)
        .json({
          error: 'Users does not exists'
        })
    }

    const survey = await surveysRepository.findOne({ id: survey_id })
    if (!survey) {
      return _response
        .status(400)
        .json({
          error: 'Survey does not exists'
        })
    }

    const surveyUser = surveysUserRepository.create({
      user_id: userAlreadyExists.id,
      survey_id
    })

    await surveysUserRepository.save(surveyUser)

    await SendEmailService.execute(
      email, survey.title, survey.description
    )

    return _response
      .status(201)
      .json(surveyUser)
  }
}

export { SendMailController }
