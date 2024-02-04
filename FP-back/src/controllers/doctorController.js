import DoctorModel from "../models/DoctorModel.js";

export const createDoctor=async (req,res)=>{
    try {
        const newDoctor = new DoctorModel(req.body)
        await newDoctor.save()
        res.status(200).json({ success: true, message: "Successfully created", data: newDoctor })
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const updateDoctor = async (req, res) => {
    const { id } = req.params
    try {
        const doctor = await DoctorModel.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json({ success: true, message: "Successfully updated", data: doctor })
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to updated" })
    }
}

export const getAllDoctor = async (req, res) => {
    try {
        const {query}=req.query
        let doctors;
        if (query) {
            doctors=await DoctorModel.find({isApproved:"approved",$or:[
                {name:{$regex:query,$options:"i"}},
                {specialization:{$regex:query,$options:"i"}}
            ]})
        }else{
            const Alldoctor = await DoctorModel.find({isApproved:"approved"})
        }
        res.status(200).json({ success: true, message: "doctors Found", data: Alldoctor })
    } catch (error) {
        res.status(500).json({ success: false, message: "doctors Not Found" })
    }
}

export const getDoctor = async (req, res) => {
    const { id } = req.params
    try {
        const doctor = await DoctorModel.findById(id)
        res.status(200).json({ success: true, message: "Doctor Found", data: doctor })
    } catch (error) {
        res.status(500).json({ success: false, message: "Doctor Not Found" })
    }
}

export const deleteDoctor = async (req, res) => {
    const { id } = req.params
    try {
        const doctor = await DoctorModel.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "Successfully deleted" })
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to deleted" })
    }
}