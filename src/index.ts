import express, { Request, Response } from 'express';
// import usersRouter from './routes/users';

const app = express();

// app.use('/api/users', usersRouter);
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hi there');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listning on port ${PORT}`);
});
