const Brand = require("../models/Brand");

exports.createBrand=async(req,res,next)=>{
        try {
            const result=await Brand.create(req.body);

            res.status(201).json({
                ststus:"Success",
                message:"Brand data inserted successfull",
                data:result
            })
        } catch (error) {
        res.status(400).json({
            status:'failed',
            message:"Couldn't create the brand",
            error:error.message
        })    
        }
};

exports.getBrand=async(req,res,next)=>{
        try {
            const result=await Brand.find({});

            res.status(200).json({
                ststus:"Success",
                message:"Brand data get successfull",
                data:result
            })
        } catch (error) {
        res.status(400).json({
            status:'failed',
            error:"Couldn't find the brand"
        })    
        }
};

exports.getBrandById=async(req,res,next)=>{
        try {
            const {id}=req.params;
            const result=await Brand.findOne({_id:id});

            res.status(200).json({
                ststus:"Success",
                message:"Get brand detail by Id",
                data:result
            })
        } catch (error) {
        res.status(400).json({
            status:'failed',
            error:"Couldn't get detail the brand",
            error:error.message
        })    
        }
};

exports.updateBrandById=async(req,res,next)=>{
        try {
            const {id}=req.params;
            const result=await Brand.updateOne({_id:id},req.body);

            res.status(200).json({
                ststus:"Success",
                message:"Brand data update successfull",
                data:result
            })
        } catch (error) {
        res.status(400).json({
            status:'failed',
            error:"Couldn't update the brand"
        })    
        }
};

exports.deleteBrand=async(req,res,next)=>{
        try {
            const {id}=req.params;
            const result=await Brand.deleteOne({_id:id});

            if(!result.deletedCount){
                return res.status(400).json({
                    status: "fail",
                    error: "Couldn't delete the product"
                })
            }

            res.status(200).json({
                ststus:"Success",
                message:"Successfully deleted the product",
                data:result
            })
        } catch (error) {
        res.status(400).json({
            status:'failed',
            error:"Couldn't delete the product"
        })    
        }
};