import { Request, Response } from 'express';
import { getCustomRepository, IsNull, Not } from 'typeorm'
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository'


/**
 * What is NPS? 
 * 
 * Net Promoter Score (NPS) is a customer loyalty and satisfaction measurement
 * taken from asking customers how likely they are to recommend your product [...]
 * 
 * @see {@link https://www.hotjar.com/net-promoter-score/} for further information about.
 */


class NpsController {

  async execute(_request: Request, _response: Response) {
    const { survey_id } = _request.params

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

    /** @BusinessLogic **/
    const surveysUsers = await surveysUsersRepository.find({
      survey_id,
      value: Not(IsNull())
    })

    /** @BusinessLogic **/
    const detractors = surveysUsers.filter(
      survey => survey.value >= 0 && survey.value <= 6
    ).length
    const promotors = surveysUsers.filter(
      survey => survey.value >= 9 && survey.value <= 10
    ).length
    const passives = surveysUsers.filter(
      survey => survey.value >= 7 && survey.value <= 8
    ).length
    const totalAnswers = surveysUsers.length
    const calcFixed = Number(
      (((promotors - detractors) / totalAnswers) * 100).toFixed(2)
    )

    return _response.json({
      detractors,
      promotors,
      passives,
      totalAnswers,
      nps: calcFixed
    })
  }
}
export { NpsController }
