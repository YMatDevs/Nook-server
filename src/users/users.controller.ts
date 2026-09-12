
import type { NewUser } from "./types.js";

import type { Request, Response } from "express";


export function create(req: Request, res: Response) {

    const new_user: NewUser = req.body;

    
    
}