// Imports
import express, { type Express, type Request, type Response } from 'express';

import UserRoutes from './users/users.route.js';

const app: Express = express();



app.use('/user', UserRoutes);






app.listen(3000, () => console.log("Server started on port 3000"));

