const router = require('express').Router();
const {get_user_details,
    add_user_details,
    
   
}=require('../controller/userController');


router.route('/add-details').post(add_user_details);

//load user
router.route('/get-details').get(get_user_details);





module.exports=router