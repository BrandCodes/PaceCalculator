import { Router } from 'express';
import { registerUser } from '../controllers/user.controller';
import { validateUser } from "../middleware/validateUser";

const router = Router();

router.post('/register', validateUser, registerUser);

export default router;
