import { WHITELIST_DOMAINS } from '../utils/constants.js'
import { env } from './environment.js'
import { StatusCodes } from 'http-status-codes'
import ApiError from '../utils/apiError.js'

export const corsOptions = {
  origin: function (origin, callback) {
    if (!origin && env.BUILD_MODE === 'dev') {
      return callback(null, true)
    }

    if (WHITELIST_DOMAINS.includes(origin)) {
      return callback(null, true)
    }

    return callback(new ApiError(StatusCodes.FORBIDDEN, `${origin} not allowed by ours CORS Policy.`))
  },

  optionsSuccessStatus: 200,

  credentials: true
}