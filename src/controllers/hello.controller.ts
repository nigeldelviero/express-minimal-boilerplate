import { Request, Response } from 'express';

export const helloController = {
  getHello: (req: Request, res: Response) => {
    res.json({ message: 'Hello from Boilerplate API!' });
  },

  createHello: (req: Request, res: Response) => {
    res.json({ message: `Hello, ${req.body.name}!` });
  },
};
