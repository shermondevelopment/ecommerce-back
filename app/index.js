/* dotenv */
import 'dotenv/config'

/* express */
import express, { json } from 'express'

/* cors */
import cors from 'cors'

/* connect db */
import ConnectDb from './database/index.js'

/* initialing server */
const app = express()

/* setting server */
app.use(json())
app.use(cors())

/*
/* before starting to run the application I make the connection to the database
*/
ConnectDb.then(() =>
  app.listen(process.env.PORT || 5555, () =>
    console.log(`app running in port ${process.env.PORT} 🚀🚀🚀🚀`)
  )
).catch(() => console.log('Ops você não tem uma conexão com banco...😵😵❌❌'))
