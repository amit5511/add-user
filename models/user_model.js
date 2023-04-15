
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    phone: {
        type: String,
        required: [true, "Please Entre Phone Number"],
        minLength: [13, "Invalid Phone Number"],
        maxLength: [13, "Invalid Phone Number"],
        unique:[true,"Phone Number should unique"]
    },
    name: {
        type: String,
        trim: true,
        minLength: [4, "Name should minimum 4 character"],
        required: [true, "Please Entre name"],
    },
    email: {
        type: String,
        required: [true, "Please Entre email "],
        unique:[true,"Email Number should unique"]
        
    }
}


)

const User = mongoose.model("User", userSchema);
module.exports = User;