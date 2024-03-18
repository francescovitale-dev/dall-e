import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';

import connectDB from './mongodb/connect.js';
import dalleRoutes from './routes/dalleRoutes.js';
import postRoutes from './routes/postRoutes.js';

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use(cors());
app.use(express.json());

app.use('/api/v1/dalle', dalleRoutes);
app.use('/api/v1/post', postRoutes);

app.get('/', (req, res) => {
  res.send('Hello from DALL-E!');
});

const startServer = () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log('Server started on port http://localhost:8080'))
  } catch (error) {
    console.log(error);
  }
};

startServer()