import { Request as req, Response as res } from "express";

// User controller functions
export const registerUser = async(req: req, res: res) => {
    try{
        const userData = req.body;
        // Save userData to database
        res.status(201).json({message: 'User registered succesfully'})
    }
    catch(error){
        return res.status(500).json({message: "Error registering user"});
    }
    finally{
        // Any cleanup operations can go here
    }
    
}

export const loginUser = async(req: req, res: res)=> {
    try{
        const loginData= req.body;
        // Validate user credentials
        res.status(200).json({message: "User logged in succesfully"})
}
catch(error){
        res.status(500).json({message: "Error logging in user"});   }
        finally{
        // Any cleanup operations can go here
        }
    }
    

export const getUsers = async( req: req, res: res) => {
    try{
        const users = await /* fetch users from database */ [];
        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json({message: "Error fetching users"});
    }
    finally{
        // Any cleanup operations can go here
    }
}