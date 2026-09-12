

import { Router } from "express";
import { create } from "./users.controller.js";
import multer from "multer";

const mul = multer();


const router = Router();


router.post('/', mul.none(), create);


export default router;
