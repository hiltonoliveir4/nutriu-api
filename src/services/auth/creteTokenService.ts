import User from "../../models/user"
import jwt from 'jsonwebtoken';

export default function createTokenService(user: User){
    try {
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET!, {
            expiresIn: '12h',
        });

        return token
    } catch ($err) {
        console.log($err)
        return ""
    }
}