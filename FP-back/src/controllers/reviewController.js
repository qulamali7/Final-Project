import DoctorModel from "../models/DoctorModel";
import ReviewModel from "../models/ReviewModel";

export const getAllReview = async (req, res) => {
    try {
        const reviews = await ReviewModel.find({})
        res.status(200).json(reviews)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

export const createReview = async (req, res) => {
    try {
        const reviews = await ReviewModel.find({})
        res.status(200).json(reviews)
    } catch (error) {
        res.status(404).json(error.message)
    }
}