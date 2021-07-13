import { Router } from 'express'
import { AnwserController } from './controllers/AnwserController'
import { NpsController } from './controllers/NpsController'
import { SendMailController } from './controllers/SendMailController'
import { SurveysController } from './controllers/SurveysController'
import { UserController } from './controllers/UserController'

const router = Router()

/** @InstantiatedControllers **/
const userController = new UserController()
const surveysController = new SurveysController()
const sendMailController = new SendMailController()
const answerController = new AnwserController()
const npsController = new NpsController()

/** @Routes **/
router.post('/users', userController.create)
router.get('/users', userController.getAll)

router.post('/surveys', surveysController.create)
router.get('/surveys', surveysController.getAll)

router.post('/send-email', sendMailController.execute)

router.get('/answers/:value', answerController.execute)

router.get('/nps/:survey_id', npsController.execute)

export { router }
