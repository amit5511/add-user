
const User = require('../models/user_model')



//configure dot env
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });




const add_user_details = async (req, res) => {
    try {
        const {name,email,phone}=req.body;
        if (!name || !email||!phone) {

            throw new Error("All fildes require");
        } else {

           let user=await User.create(req.body)
            res.status(201).json({
            user,
            message: "User Details",
            success:true

            })



        }

    } catch (error) {
        res.status(401).json({
         
            success: false,
            message: error.message
        });
    }
}



const get_user_details = async (req, res) => {

    try {
        
       
        const user = await User.find({});
        res.status(201).json({
            user,
            success: true,
        })
    } catch (error) {
        // console.log(error);
        res.status(401).json({
            success: false,
            message: error.message
        });
    }
}





module.exports = {
    get_user_details,
    add_user_details

}