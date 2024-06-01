import express from 'express'
import { cardValidation } from '../../validations/card.validation.js'
import { cardController } from '../../controllers/card.controller.js'

const Router = express.Router()

Router.route('/')
  .post(cardValidation.createNew, cardController.createNew)

export const cardRoute = Router