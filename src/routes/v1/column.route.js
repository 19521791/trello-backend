import express from 'express'
import { columnValidation } from '../../validations/column.validation.js'
import { columnController } from '../../controllers/column.controller.js'

const Router = express.Router()

Router.route('/')
  .post(columnValidation.createNew, columnController.createNew)

export const columnRoute = Router