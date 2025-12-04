// src/routes/orderRoutes.ts
import { Router } from "express";
import { getOrders, createOrder } from "../controllers/orderController";

const router = Router();

router.get("/", getOrders);    // GET /api/orders
router.post("/", createOrder); // POST /api/orders

export default router;
