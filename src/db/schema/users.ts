import { varchar } from "drizzle-orm/pg-core";
import { pgTable, uuid } from "drizzle-orm/pg-core";

const Tables = {
    Users: "users",
}

export const UserTable = pgTable(Tables.Users, {
    user_id: uuid().primaryKey().defaultRandom(),
    user_name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
});




