import jwt from "jsonwebtoken";
import DoctorModel from "../models/DoctorModel.js";
import UserModel from "../models/UserModel.js";

export const authenticate = async (req, res, next) => {
    const verifyAuth = req.headers.authorization

    if (!verifyAuth || !verifyAuth.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: "No Token" })
    }

    try {
        consttoken = verifyAuth.splice(" ")[1]

        const decoded = jwt.verify(token, process.env.JWT)

        req.userId = decoded.id
        req.role = decoded.role


        next()
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token is Expired" })
        }
        return res.status(401).json({ success: false, message: "Invalid token" })
    }
}

export const restrict = async (req, res, next) => {
    const userId = req.userId

    let user

    const patient = await UserModel.findById(userId)
    const doctor = await DoctorModel.findById(userId)

    if (patient) {
        user = patient
    }

    if (doctor) {
        user = doctor
    }

    if (!roles.includes(user.role)) {
        return res.status(401).json({ success: false, message: "You are not authorized" })
    }
    next()
}