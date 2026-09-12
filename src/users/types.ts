
export type user_id = string;

export type email = string;
export type password = string;
export type user_name = string;


export type User = {
    user_id: user_id,
    user_name: user_name,
    email: email,
    password: password,
}

export type NewUser = Omit<User, 'user_id'>;
