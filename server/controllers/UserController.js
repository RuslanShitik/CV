import UserService from "../services/UserService.js"
import AuthService from "../services/AuthService.js";
class UserController{
    async create(req, res){
        try{
            const createdUser = await UserService.create(req.body)
            const token = AuthService.generateToken(createdUser._id)
            res.json({...createdUser._doc, token})
        }
        catch (e){
            console.log(e);
            res.status(500).json({message:"register error"})
        }
    }
    async getAll (req, res){
        try{
            const users = await UserService.getAll()
            return res.json(users)
        }
        catch (e){
            console.log(e);
            res.status(500).json(e)
        }
    }
    async login(req, res){
        try{
            const user = await UserService.login(req.body.login, req.body.password)
            const token = await AuthService.generateToken(user._id)
            return res.json({user, token})
        }
        catch (e){
            console.log(e);
            res.status(500).json(e)
        }
    }
}

export default new UserController