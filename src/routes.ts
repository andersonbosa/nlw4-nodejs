import { Router } from 'express'
import { SendMailController } from './controllers/SendMailController'
import { SurveysController } from './controllers/SurveysController'
import { UserController } from './controllers/UserController'

const router = Router()

/** @InstantiatedControllers **/
const userController = new UserController()
const surveysController = new SurveysController()
const sendMailController = new SendMailController()

/** @Routes **/
router.post('/users', userController.create)
router.get('/users', userController.getAll)

router.post('/surveys', surveysController.create)
router.get('/surveys', surveysController.getAll)

router.post('/send-email', sendMailController.execute)

export { router }
