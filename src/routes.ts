import { Router } from 'express'
import { SurveysController } from './controllers/SurveysController'
import { UserController } from './controllers/UserController'

const router = Router()

/** @Controllers **/
const userController = new UserController()
const surveysController = new SurveysController()

/** @Routes **/
router.post('/users', userController.create)
router.get('/users', userController.getAll)

router.post('/surveys', surveysController.create)
router.get('/surveys', surveysController.getAll)

export { router }
