import sql from './db.js'

async function testConnection() {
  try {
    const result = await sql`SELECT NOW()`
    console.log('✅ Connected to database:', result)
  } catch (err) {
    console.error('❌ Database connection failed:', err)
  }
}

testConnection()
