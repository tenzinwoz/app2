import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

// import env variables saved in ./config
import { PORT } from './config';

const app = express();
const port = PORT || 3002;

// Register middlewares on the app instance
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serving the index page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serving the about page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Create health check route
app.get('/health', (req: Request, res: Response) => {
  res.send('Yuuup! Server TWO still up and running 😄');
});

// Start up application server to listen on the Port
app.listen(port, () => console.log('Serveris running on port: ', PORT));
