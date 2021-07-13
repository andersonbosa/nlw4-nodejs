import 'reflect-metadata'
import express from 'express'
import './database'
import { router } from './routes'


/** @see {@link -} to express documentation */
const App = express()


/** @description Allows JSON in API. */
App.use(express.json())


/** @see Middlewares */
App.use(router)


export { App }