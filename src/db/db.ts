import { drizzle } from 'drizzle-orm/neon-http';


const db_conn = process.env.DATABASE_URL || '127.0.0.1';

export const db = drizzle(db_conn);





