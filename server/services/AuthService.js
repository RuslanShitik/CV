import jwt from 'jsonwebtoken'
import User from "../models/User.js";
import bcrypt from "bcrypt";

class AuthService {
    generateToken(userId) {
        return jwt.sign({ _id: userId }, 'secretkeyrusik', { expiresIn: '30d' });
    }
}

export default new AuthService
