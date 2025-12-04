// src/routes/userRoutes.ts
import { Router } from "express"; // Import Router
import { createProduct, getProducts } from "../controllers/productController"; // Import controller functions

const router = Router(); // Create a router instance

// Define routes
router.get("/", getProducts); // POST /api/users/register
router.post("/", createProduct);       // POST /api/users/login

export default router; // Export router for server.ts
