
export type user_id = string;

export type email = string;
export type password = string;
export type user_name = string;

import type { InferOutput } from "valibot";
import { UserSchema, NewUserSchema } from "./validation.js";

export type User = InferOutput<typeof UserSchema>;

export type NewUser = InferOutput<typeof NewUserSchema>;

