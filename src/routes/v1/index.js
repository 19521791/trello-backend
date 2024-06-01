import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRoute } from './board.route.js'
import { columnRoute } from './column.route.js'
import { cardRoute } from './card.route.js'

const Router = express.Router()

Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'APIs V1 are ready to use' })
})

Router.use('/boards', boardRoute)

Router.use('/columns', columnRoute)

Router.use('/cards', cardRoute)

export const APIs_V1 = Router