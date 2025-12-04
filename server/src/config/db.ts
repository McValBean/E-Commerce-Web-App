// src/config/db.ts
import 'dotenv/config'
import postgres from 'postgres'

// Check for env variable
const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error('❌ DATABASE_URL is not defined in environment variables')
}

// Create the SQL client
const sql = postgres(connectionString, {
  ssl: 'require', // Supabase requires SSL
})

export default sql
// Now you can use `sql` to interact with your PostgreSQL database