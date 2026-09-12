
import { pipe, email, string, nonEmpty, minLength, maxLength, object, uuid, omit } from "valibot"

import type { User } from "./types.js";

const EmailSchema = pipe(string(), nonEmpty("Please enter your email"), email("Please enter a valid email"));

const PasswordSchema = pipe(string(), nonEmpty("Please enter your password"), minLength(8, "Password must be min 8 characters"), maxLength(20, "Password must be max 20 characters"));

const UserNameSchema = pipe(string(), nonEmpty("Please enter an user name"), minLength(3, "User name must be atleast 3 characters"));

const UserIdSchema = pipe(string(), nonEmpty("User Id cannot be empty"), uuid("User Id must be a uuid"));


export const UserSchema = object({
    user_id: UserIdSchema,
    email: EmailSchema,
    password: PasswordSchema,
    user_name: UserNameSchema
});

export const NewUserSchema = omit(UserSchema, ['user_id']);



