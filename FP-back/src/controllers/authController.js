import UserModel from "../models/UserModel.js"
import DoctorModel from "../models/DoctorModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


const getToken = user => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT)
}

export const register = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body
    try {
        const user = null

        if (role === "patient") {
            user = await UserModel.findOne({ email })
        }
        else if (role === 'doctor') {
            user = await DoctorModel.findOne({ email })
        }

        if (user) {
            return res.status(400).json({ message: "User already exist" })
        }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        if (role === "patient") {
            user = new UserModel({ email, password: hash, name, role, photo })
        }
        if (role === "doctor") {
            user = new DoctorModel({ email, password: hash, name, role, photo })
        }

        await user.save()
        res.status(200).json({ success: true, message: "User successfully created" })


    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error, Try again" })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        let user = null
        const patient = await UserModel.findOne({ email })
        const doctor = await DoctorModel.findOne({ email })

        if (patient) {
            user = patient
        }
        if (doctor) {
            user = doctor
        }

        if (!user) {
            return res.status(404).json({ message: 'User Not Found!' })
        }

        const checkPassword = await bcrypt.compare(req.body.password, user.password)

        if (!checkPassword) {
            return res.status(404).json({ status: false, message: 'Invalid credentials!' })
        }

        const token = getToken(user)


        const { password, role, appointments, ...rest } = user._doc
        res.status(200).json({ status: true, message: 'Successfully login', token, data: { ...rest }, role })

    } catch (error) {
        res.status(500).json({ status: false, message: 'Failed Login!' })
    }
}