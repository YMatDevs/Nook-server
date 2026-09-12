
import type { NewUser } from "./types.js";

import type { Request, Response } from "express";

import { NewUserSchema } from "./validation.js";
import { flatten, safeParse } from "valibot";
import type { ApiResponse } from "../utils/api.js";
import { HTTPStatus } from "../constants/api.js";


export function create(req: Request, res: Response) {

    console.log("Body: ",req.body);

    const result = safeParse(NewUserSchema, req.body);

            if(!result.success) return res.status(HTTPStatus.BadRequest).json({
                error: "invalid data",
                details: flatten(result.issues),
            })


            return res.status(HTTPStatus.CreatedSuccessfully).json({
                data: 1
            })
}