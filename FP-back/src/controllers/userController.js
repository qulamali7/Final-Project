import UserModel from "../models/UserModel.js";

export const createUser=async (req,res)=>{
    try {
        const newUser = new UserModel(req.body)
        await newUser.save()
        res.status(200).json({ success: true, message: "Successfully created", data: newUser })
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const updateUser=async(req,res)=>{
    const {id}=req.params
    try {
        const user=await UserModel.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).json({success:true,message:"Successfully updated",data:user})
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to updated"})
    }
}

export const getAllUser=async(req,res)=>{
    try {
        const users=await UserModel.find({})
        res.status(200).json({success:true,message:"Users Found",data:users})
    } catch (error) {
        res.status(500).json({success:false,message:"Users Not Found"})
    }
}

export const getUser=async(req,res)=>{
    const {id}=req.params
    try {
        const user=await UserModel.findById(id)
        res.status(200).json({success:true,message:"User Found",data:user})
    } catch (error) {
        res.status(500).json({success:false,message:"User Not Found"})
    }
}

export const deleteUser=async(req,res)=>{
    const {id}=req.params
    try {
        const user=await UserModel.findByIdAndDelete(id)
        res.status(200).json({success:true,message:"Successfully deleted"})
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to deleted"})
    }
}