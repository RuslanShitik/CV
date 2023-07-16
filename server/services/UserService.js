import User from "../models/User.js";
import bcrypt from "bcrypt";
import AuthService from "./AuthService.js";
class UserService {
    async create(user){
        const createdUser = await User.create(user)
        const token = await AuthService.generateToken(createdUser._id)
        const responseUser = {
            fullName: createdUser.fullName,
            login: createdUser.login,
            token: token
        };

        return responseUser;
    }
    async getAll() {
        const users = User.find()
        return users
    }
    async login(login, password){
        const user = await User.findOne({login})
        // TODO: убрать уточнение почему не залогинился
        if (!user?._doc){
            throw new Error('User not found!')
        }
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword){
            throw new Error('wrong password!')
        }
        return user
    }
}

export default new UserService()