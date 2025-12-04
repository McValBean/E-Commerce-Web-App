import {Request as req, Response as res} from "express";

// Product controller functions
export const createProduct = async (req: req, res: res)=>{
    try{
        const productData =req.body;
        // Save productData to database
        res.status(201).json({message: "Product created successfully"});
    }
    catch(error){
        res.status(500).json({message: "Error creating product"});
    }
    finally{
        // Any cleanup operations can go here
    }
}

export const getProducts = async( req: req, res: res) => {
    try{
        const products = await /* fetch products from database */ [];
        res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({message: "Error fetching products"});
    }
    finally{
        // Any cleanup operations can go here
    }
}