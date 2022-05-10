/* dotenv */
import 'dotenv/config'

/* express */
import express, { json } from 'express'

/* initialing server */
const app = express()

/* setting server */
app.use(json())


app.listen(process.env.PORT || 5555, () => console.log(`app running in port ${process.env.PORT} 🚀🚀🚀🚀🚀`))