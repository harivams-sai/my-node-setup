import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev')); // logger

app.get('/', async (req, res) => {
  res.json({ hello: 'world' });
});

const port = Number(process.env.PORT || 8080);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening at http://localhost:${port}`);
});
