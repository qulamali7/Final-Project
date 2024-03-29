import express from 'express'
import mongoose from 'mongoose'
import cors from "cors";
import 'dotenv/config'
import authRoutes from "./src/routes/authRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import doctorRoutes from "./src/routes/doctorRoutes.js";
const app = express()

app.use(cors())
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/doctors',doctorRoutes )


mongoose.connect(process.env.KEY)
    .then(() => console.log('Connected!'))
    .catch(() => console.log('Not Connected!'))

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})