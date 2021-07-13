import express from 'express'
import 'express-async-errors'
import 'reflect-metadata'
import createConnection from './database'
import { router } from './routes'
import { ErrorHandler } from './Utils'

/** @description Create connection with Database **/
createConnection()


/** @see {@link -} to express documentation */
const App = express()


/** @description Allows JSON in API. */
App.use(express.json())


/** @see Middlewares in documentation */
App.use(router)
App.use(ErrorHandler)


export { App }
