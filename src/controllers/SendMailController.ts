import { Request, Response } from 'express'
import { resolve } from 'path'
import { getCustomRepository } from 'typeorm'
import { SurveyRepository } from '../repositories/SurveyRepository'
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository'
import { UserRepository } from '../repositories/UserRepository'
import SendEmailService from '../services/SendEmail.service'
import { CustomHTTPError } from '../Utils'

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

    /** @BusinessLogic_ErrorResponse **/
    const user = await usersRepository.findOne({ email })
    if (!user) {
      throw new CustomHTTPError('Users does not exists')
    }

    /** @BusinessLogic_ErrorResponse **/
    const survey = await surveysRepository.findOne({ id: survey_id })
    if (!survey) {
      throw new CustomHTTPError('Survey does not exists')
    }

    /** @BusinessLogic_Response **/
    const templatePath = resolve(__dirname, '..', 'views', 'emails', 'firstTemplate.hbs')
    const variables = {
      name: user.name,
      title: survey.title,
      description: survey.description,
      id: '',
      link: `${process.env.URL_MAIL}`
    }

    /** @BusinessLogic_Response **/
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

    /** @BusinessLogic_Response **/
    /* Store data into surveyUser table */
    const surveyUser = surveysUsersRepository.create({
      user_id: user.id,
      survey_id
    })
    await surveysUsersRepository.save(surveyUser)

    /** @BusinessLogic_Response **/
    /* Send email to user */
    variables.id = surveyUser.id
    await SendEmailService.execute(email, survey.title, variables, templatePath)
    return _response
      .status(201)
      .json(surveyUser)
  }
}

export { SendMailController }
