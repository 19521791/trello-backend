import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardValidation } from '../../validations/board.validation.js'
import { boardController } from '../../controllers/board.controller.js'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'GET: API get list boards' })
  })

  .post(boardValidation.createNew, boardController.createNew)

Router.route('/:id')
  .get(boardController.getDetails)
  .put()

export const boardRoutes = Router