import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const helloSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
});

export const validateHello = (req: Request, res: Response, next: NextFunction) => {
  const result = helloSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ errors: result.error.message });
  }

  next();
};
