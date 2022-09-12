/**
 * name: Sk Inzamamuddin
 * date: 27/04/2021
 * version:1.0.0
 *
 * Contains all API routes for departments.
 */

import { Router } from 'express';
import * as departmentController from '../controller/departments';
import tokenVerify from '../middleware/verifyToken';
const router = Router();

/**
 * POST /api/v1/departments/create
 */
router.post('/create', tokenVerify, departmentController.create);
/**
 * PUT /api/v1/departments/update
 */
router.put('/update', tokenVerify, departmentController.update);

/**
 * GET /api/v1/departments/fetchone
 */
router.get('/fetchone', tokenVerify, departmentController.fetchOne);

/**
 * GET /api/v1/departments/fetchall
 */
router.get('/fetchall', departmentController.fetchAll);

/**
 * DELETE /api/v1/departments/delete
 */
router.delete('/delete', tokenVerify, departmentController.departmentDelete);

/**
 * GET /api/v1/departments/search
 */
router.get('/search', departmentController.search);

export default router;
