import postgres from "postgres";
import * as fs from "fs";
import * as path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

// ✅ Fix for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const schemaPath = path.resolve(__dirname, "../../schema.sql");
const schema = fs.readFileSync(schemaPath, "utf8");

const sql = postgres(process.env.DATABASE_URL!, { ssl: "require" });

(async () => {
  try {
    console.log("🟡 Running schema on Supabase...");
    await sql.unsafe(schema);
    console.log("✅ Database schema created successfully!");
  } catch (err) {
    console.error("❌ Failed to run schema:", err);
  } finally {
    await sql.end();
  }
})();
