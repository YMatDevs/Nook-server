import { db } from '../db/db.js';

import { eq } from 'drizzle-orm';

import type { User, NewUser, user_id } from './types.js';

import { UserTable } from '../db/schema/index.js';

export async function addUser(user: NewUser) {
    return db.insert(UserTable).values(
        { 
            user_name: user.user_name,
            email: user.email,
            password: user.password,
        }
    ).returning({ user_id: UserTable.user_id });
}


export async function getUser(user_id: user_id) {
    return db.select().from(UserTable).where(eq(UserTable.user_id, user_id));
}

