import express from 'express';
// import usersRouter from './routes/users';

const app = express();

// app.use('/api/users', usersRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listning on port ${PORT}`);
});
