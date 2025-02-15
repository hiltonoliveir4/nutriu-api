import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    await User.create({ name, email, password: hashedPassword, role: "admin" });
    req.body.email = email;
    req.body.password = password;

    loginUser(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.scope('withPassword').findOne({ 
        where: { email }, 
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET!, {
      expiresIn: '12h',
    });

    const { password: _, ...userWithoutPassword } = user.toJSON();

    res.status(200).json({ message: 'Authenticated', token, user: userWithoutPassword});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error during login', error });
  }
};
