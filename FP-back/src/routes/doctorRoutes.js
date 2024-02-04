import express from "express";
import { createDoctor, deleteDoctor, getAllDoctor, getDoctor, updateDoctor } from "../controllers/doctorController.js";
import { verifyAuth,restrict } from "../auth/verifyToken.js";

const router=express.Router()

router.post('/',createDoctor)
router.get("/:id",verifyAuth,restrict(["doctor"]),getDoctor)
router.get("/",verifyAuth,restrict(["admin"]),getAllDoctor)
router.put("/:id",verifyAuth,restrict(["doctor"]),updateDoctor)
router.delete("/:id",verifyAuth,restrict(["doctor"]),deleteDoctor)

export default router
