import { Router, Request, Response } from 'express';
import ClerkAccountWebhook from '../../controllers/auth/ClerkWebhook.js';

const router = Router();

router.post('/webhook/clerk', ClerkAccountWebhook.handleWebhook);



export default router;