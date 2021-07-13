import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { SurveyRepository } from '../repositories/SurveyRepository'

class SurveysController {

  async create(_request: Request, _response: Response) {
    const { title, description } = _request.body
    const surveysRepository = getCustomRepository(SurveyRepository)
    const survey = surveysRepository.create({
      title,
      description
    })
    await surveysRepository.save(survey)

    return _response
      .status(201)
      .json(survey)
  }

  async getAll(_request: Request, _response: Response) {
    const surveysRepository = getCustomRepository(SurveyRepository)
    const allSurveys = await surveysRepository.find()
    return _response.json(allSurveys)
  }
}

export { SurveysController }
