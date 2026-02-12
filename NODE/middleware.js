import jwt from 'jsonwebtoken';


const authMiddleware = (req,res,next) =>{
    const secret = 'devan';
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({message:"Token not provided"})
    }
    const token = authHeader.split(" ")[1];
    if(!token){
        return res.status(401).json({message:"Invalid token format"});
    }
    try {
        const decoded = jwt.verify(token,secret);
        req.user = decoded;
        next()
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }

}