import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

    if(!token){
        return res.status(403).json("Unauthotized");
    }

    try {
        const decoded = jwt.decode(token, 'secretkeyrusik')
        req.userId = decoded._id
        next()
    }
    catch (e){
        return res.status(403).json("Unauthotized");
    }
}