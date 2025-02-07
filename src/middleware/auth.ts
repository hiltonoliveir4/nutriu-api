import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { CustomJwtPayload } from '../types/express';

const authMiddleware = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      res.status(401).json({ message: 'No token provided' });
      return;
    }

    jwt.verify(token, process.env.JWT_SECRET!, (err: any, decoded: any) => {
      if (err) {
        res.status(403).json({ message: 'Forbidden' });
        return;
      }

      req.user = decoded as CustomJwtPayload;
      next();
    });
  };
};

export default authMiddleware;