// Imports
import express, { type Express, type Request, type Response } from 'express';
import morgan from 'morgan';

import UserRoutes from './users/users.route.js';

const app: Express = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


app.use('/users', UserRoutes);



app.listen(3000, () => console.log("Server started on port 3000"));

