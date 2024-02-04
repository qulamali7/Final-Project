import express from "express";
import { verifyAuth, restrict } from "../auth/verifyToken.js"
import { getAllUser, getUser, updateUser, deleteUser, createUser } from "../controllers/userController.js";

const router = express.Router()

router.post("/", createUser)
router.get("/:id", verifyAuth, restrict(["patient"]), getUser)
router.get("/", verifyAuth, restrict(["admin"]), getAllUser)
router.put("/:id", verifyAuth, restrict(["patient"]), updateUser)
router.delete("/:id", verifyAuth, restrict(["patient"]), deleteUser)

export default router


