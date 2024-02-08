import express from "express";
import { authenticate, restrict } from "../auth/verifyToken.js"
import { getAllUser, getUser, updateUser, deleteUser, createUser } from "../controllers/userController.js";

const router = express.Router()

router.post("/", createUser)
router.get("/:id", authenticate, restrict(["patient"]), getUser)
router.get("/", authenticate, restrict(["admin"]), getAllUser)
router.put("/:id", authenticate, restrict(["patient"]), updateUser)
router.delete("/:id", authenticate, restrict(["patient"]), deleteUser)

export default router


