import { Request, Response } from 'express'
import { resolve } from 'path'
import { getCustomRepository } from 'typeorm'
import { SurveyRepository } from '../repositories/SurveyRepository'
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository'
import { UserRepository } from '../repositories/UserRepository'
import SendEmailService from '../services/SendEmail.service'

/**
 * @todo:
 * [ ] split business logics
*/
class SendMailController {
  async execute(_request: Request, _response: Response) {
    const { email, survey_id } = _request.body

    const usersRepository = getCustomRepository(UserRepository)
    const surveysRepository = getCustomRepository(SurveyRepository)
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

    /** @BusinessLogic **/
    const user = await usersRepository.findOne({ email })
    if (!user) {
      return _response
        .status(400)
        .json({
          error: 'Users does not exists'
        })
    }

    /** @BusinessLogic **/
    const survey = await surveysRepository.findOne({ id: survey_id })
    if (!survey) {
      return _response
        .status(400)
        .json({
          error: 'Survey does not exists'
        })
    }

    /** @BusinessLogic **/
    const templatePath = resolve(__dirname, '..', 'views', 'emails', 'firstTemplate.hbs')
    const variables = {
      name: user.name,
      title: survey.title,
      description: survey.description,
      id: '',
      link: `${process.env.URL_MAIL}`
    }

    /** @BusinessLogic **/
    const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
      where: { user_id: user.id, value: null },
      relations: ['user', 'survey']
    })
    if (surveyUserAlreadyExists) {
      variables.id = surveyUserAlreadyExists.id
      await SendEmailService.execute(email, survey.title, variables, templatePath)
      return _response
        .status(200)
        .json(surveyUserAlreadyExists)
    }

    /** @BusinessLogic **/
    /* Store data into surveyUser table */
    const surveyUser = surveysUsersRepository.create({
      user_id: user.id,
      survey_id
    })
    await surveysUsersRepository.save(surveyUser)

    /** @BusinessLogic **/
    /* Send email to user */
    variables.id = surveyUser.id
    await SendEmailService.execute(email, survey.title, variables, templatePath)
    return _response
      .status(201)
      .json(surveyUser)
  }
}

export { SendMailController }
