import express from "express";
import { createDoctor, deleteDoctor, getAllDoctor, getDoctor, updateDoctor } from "../controllers/doctorController.js";
import { authenticate,restrict } from "../auth/verifyToken.js";

const router=express.Router()

router.post('/',createDoctor)
router.get("/:id",authenticate,restrict(["doctor"]),getDoctor)
router.get("/",authenticate,restrict(["admin"]),getAllDoctor)
router.put("/:id",authenticate,restrict(["doctor"]),updateDoctor)
router.delete("/:id",authenticate,restrict(["doctor"]),deleteDoctor)

export default router
