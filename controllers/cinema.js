const Cinema=require('../models/cinema')
const User=require('../models/Users')
const validationResult=require('express-validator')

const cinema=async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors)
      return res.status(400).json({ msg:"checking...."});
    }
    const cinema=new Cinema(req.body)
    try {
        await cinema.save()
        res.status(200).json({msg:"your cinemaHall is added..."})
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: "server error" })
    }
}



module.exports={cinema}