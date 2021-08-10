module.exports = (req,res,next) => {
    
    const isAdmin = req.user.isAdmin;
    if(!isAdmin){
        const err = {status:401,msg:'No token,you are not an Admin'}
        return next(err)
    }
    next()
}