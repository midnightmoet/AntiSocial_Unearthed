import jwt from 'jsonwebtoken';


export const verifyToken = (req, res, next) => {
    try {
        let token = req.header("Authorization");

        if(!token){ 
            return res.status(403).send("Unauthorized");
        } // if there is no token, return an error

        if(token.startsWith("Bearer ")){
            token = token.slice(7, token.length).trimLeft();
        } // remove the Bearer from the token

        const verified = jwt.verify(token, process.env.JWT_SECRET); // verify the token
        req.user = verified; // set the user to the verified user
        next(); // move on to the next middleware
         
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};