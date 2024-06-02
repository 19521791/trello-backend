/* eslint-disable no-useless-catch */
import { slugify } from '../utils/formatters.js'
import { boardModel } from '../models/board.model.js'
import ApiError from '../utils/apiError.js'
import { StatusCodes } from 'http-status-codes'
import pkg from 'lodash'

const { cloneDeep } = pkg

const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }

    const createdBoard = await boardModel.createNew(newBoard)

    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId.toString())

    return getNewBoard
  } catch (error) { throw error }
}

const getDetails = async (boardId) => {
  try {
    const board = await boardModel.getDetails(boardId)

    if (!board) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Board not found!')
    }

    const resBoard = cloneDeep(board)

    resBoard.columns.forEach(column => {
      column.cards = resBoard.cards.filter(card => card.columnId.equals(column._id))
    })

    return resBoard
  } catch (error) { throw error }
}

export const boardService = {
  createNew,
  getDetails
}