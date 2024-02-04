import express from 'express'
import { CONNECT_DB } from './config/mongodb.js'
import { env } from './config/environment.js'
import { APIs_V1 } from './routes/v1/index.js'

const START_SERVER = () => {
  const app = express()

  app.use(express.json())

  app.use('/v1', APIs_V1)

  app.use((err, req, res) => {
    res.status(500).send('Something broke!')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`App is listening at port ${env.APP_PORT}`)
  })

  app.get('/', async (req, res) => {
    res.end('<h1>Douglus Nguyen</h1>')
  })
}

CONNECT_DB()
  .then(() => console.log('Connected to MongoDB!'))
  .then(() => START_SERVER())
  .catch(error => {
    console.error(error)
    process.exit(0)
  })


