import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { rateLimiter } from '@/middlewares/rate-limiter';
import { router } from '@/routes';

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(rateLimiter);

// Routes
app.use('/api', router);

export default app;
