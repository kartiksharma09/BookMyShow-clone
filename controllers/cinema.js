const Cinema=require('../models/cinema')
const User=require('../models/Users')
const {validationResult}=require('express-validator')

const cinema=async(req,res)=>{
    console.log(req.body,"djkjd")
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors)
      return res.status(400).json({ msg:"checking"});
    }

    const cinemas=new Cinema(req.body)

    console.log(cinemas)
    try {
       

        cinemas.adminId=req.user.id
        
        await cinemas.save()
        res.status(200).json({msg:"your cinemaHall is added..."})
        
       
       
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: "server error....." })
    }
}



module.exports={cinema}