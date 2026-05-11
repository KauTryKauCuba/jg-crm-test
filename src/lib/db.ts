import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '@/db/schema';

// For edge environments (like Vercel Edge), we would use a different driver.
// But for local development and standard Node.js, postgres.js is excellent.

const connectionString = process.env.DATABASE_URL!;

// Disable prefetch as it is not supported for "transaction" pool mode 
// (though we aren't using a pooler yet, it's a safe default for modern setups)
export const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client, { schema });
