import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from './environment.js'

let instance = null
const uri = env.MONGODB_URI
const db_name = env.DATABASE_NAME

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  await client.connect()

  instance = client.db(db_name)
}

export const GET_DB = () => {
  if (!instance) throw new Error('Must connect to Database first!')
  return instance
}