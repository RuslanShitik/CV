import User from "../models/User.js";
import bcrypt from "bcrypt";
class UserService {
    async create(user){
        const createdUser = User.create(user)
        return createdUser
    }
    async getAll() {
        const users = User.find()
        return users
    }
    async login(login, password){
        const user = await User.findOne({login})
        // TODO: убрать уточнение почему не залогинился
        if (!user?._doc){
            return throw new Error('User not found!')
        }
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword){
            return throw new Error('wrong password!')
        }
        return user
    }
}

export default new UserService()