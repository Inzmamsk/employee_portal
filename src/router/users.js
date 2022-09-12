import { Router } from 'express';
import * as userController from '../controller/users';
import tokenVerify from '../middleware/verifyToken';
const router = Router();

/**
 * POST /api/v1/users/register
 */
router.post('/register', userController.create);

/**
 * POST /api/v1/users/authenticate
 */
router.post('/authenticate', userController.authenticate);

/**
 * GET /api/v1/users/fetchall
 */
router.get('/fetchall', userController.fetchAll);

/**
 * GET /api/v1/users/me
 */
router.get('/me', tokenVerify, userController.fetchOne);

/**
 * PUT /api/v1/users/update
 */
router.put('/update', tokenVerify, userController.update);

/**
 * DELETE /api/v1/users/delete
 */
router.delete('/delete', tokenVerify, userController.userDelete);

/**
 * GET /api/v1/users/search
 */
router.get('/search', userController.search);

/**
 * GET /api/v1/users/fetchuserbydeptid
 */
router.get('/fetchuserbydeptid', tokenVerify, userController.fetchuserbydeptid);

/**
 * GET /api/v1/users/searchby
 */
router.get('/searchby', userController.searchBy);


export default router;
