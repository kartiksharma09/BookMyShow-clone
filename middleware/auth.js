const jwt=require('jsonwebtoken')

const config =require('config')

module.export=(req,res,next)=>{
    const Token=req.header('x-auth-token')

    // check if token is not there
    if (!Token){
        return res.status(401).json({msg:"Token not found "});
    }
    

    // verifying the token

    try {
        const decoded=jwt.verify(token,config.get("jwtsecret"))
        req.user=decoded.user
        next();   
    } catch (err) {
        res.status(401).json({msg:"your Token is not valid"})
    }

}
