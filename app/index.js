/* dotenv */
import 'dotenv/config'

/* express */
import express from 'express'

/* initialing server */
const app = express()


app.listen(process.env.PORT || 5555, () => console.log(`app running in port ${process.env.PORT} 🚀🚀🚀🚀🚀`))