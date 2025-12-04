// src/routes/userRoutes.ts
import { Router } from "express"; // Import Router
import { registerUser, loginUser, getUsers } from "../controllers/userController"; // Import controller functions

const router = Router(); // Create a router instance

// Define routes
router.post("/register", registerUser); // POST /api/users/register
router.post("/login", loginUser);       // POST /api/users/login
router.get("/", getUsers);      // GET /api/users

export default router; // Export router for server.ts
