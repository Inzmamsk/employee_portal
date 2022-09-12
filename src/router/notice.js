/**
 * name: Sk Inzamamuddin
 * date: 28/04/2021
 * version:1.0.0
 * 
 * Contains all API routes for notice.
 */

import { Router } from 'express';
import * as noticeController from '../controller/notice';
import tokenVerify from '../middleware/verifyToken';
const router = Router();

/**
 * POST /api/v1/notice/create
 */
router.post('/create', tokenVerify, noticeController.create);

/**
 * PUT /api/v1/notice/update
 */
router.put('/update', tokenVerify, noticeController.update);

/**
 * GET /api/v1/notice/fetchone
 */
router.get('/fetchone', tokenVerify, noticeController.fetchOne);

/**
 * GET /api/v1/notice/fetchall
 */
router.get('/fetchall', noticeController.fetchAll);

/**
 * DELETE /api/v1/notice/delete
 */
router.delete('/delete', tokenVerify, noticeController.noticeDelete);


export default router;