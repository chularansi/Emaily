"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import usersRouter from './routes/users';
const app = (0, express_1.default)();
// app.use('/api/users', usersRouter);
app.get('/', (req, res) => {
    res.status(200).send('Hi there');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listning on port ${PORT}`);
});
