const Cinema=require('../models/cinema')

const {validationResult}=require('express-validator')

const cinema=async(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors)
      return next({
          status:400,
          errors:errors.array()
      })
    }

    const cinemas=new Cinema(req.body)

    cinemas.adminId=req.user.id
    
    await cinemas.save()
    res.status(200).json({msg:"your cinemaHall is added..."})
    
}
module.exports={cinema}
