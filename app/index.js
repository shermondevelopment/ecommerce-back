/* dotenv */
import 'dotenv/config';

/* express */
import express, { json } from 'express';

/* cors */
import cors from 'cors';

/* connect db */
import ConnectDb from './database/index.js';

/* routes */
import router from './routes/index.js';
import authRouter from './routes/auth.js';

/* initialing server */
const app = express();

/* setting server */
app.use(json());
app.use(cors());
app.use(router);
app.use(authRouter);

/*
/* before starting to run the application I make the connection to the database
*/

ConnectDb.then(() =>
  app.listen(process.env.PORT || 5500, () =>
    console.log(`app running in port ${process.env.PORT} 🚀🚀🚀🚀`)
  )
).catch(() => console.log('Ops você não tem uma conexão com banco...😵😵❌❌'));
