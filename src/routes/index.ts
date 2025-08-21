import { Router } from 'express';
import { helloController } from '@/controllers/hello.controller';
import { validateHello } from '@/validators/hello.validator';

export const router = Router();

router.get('/hello', helloController.getHello);
router.post('/hello', validateHello, helloController.createHello);
