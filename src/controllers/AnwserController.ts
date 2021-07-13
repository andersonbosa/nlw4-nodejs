import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';


class AnwserController {

  async execute(_request: Request, _response: Response) {
    const { value } = _request.params
    const { u: userId } = _request.query

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

    const surveyUser = await surveysUsersRepository.findOne({
      id: String(userId)
    })

    /** @BusinessLogic **/
    if (!surveyUser) {
      return _response
        .status(400)
        .json({
          error: 'Survey User don\'t exists.'
        })
    }
    /** @BusinessLogic */
    surveyUser.value = Number(value)
    await surveysUsersRepository.save(surveyUser)
    return _response
      .status(200)
      .json({ surveyUser })
  }
}
export { AnwserController };

