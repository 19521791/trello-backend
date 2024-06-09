import express from 'express'
import { columnValidation } from '../../validations/column.validation.js'
import { columnController } from '../../controllers/column.controller.js'

const Router = express.Router()

Router.route('/')
  .post(columnValidation.createNew, columnController.createNew)

Router.route('/:id')
  .put(columnValidation.update, columnController.update)
  .delete(columnValidation.deleteItem, columnController.deleteItem)

export const columnRoute = Router