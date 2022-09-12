/**
 * name:Priya Prasad Patra
 * date:29/4/2021
 * version:1.0.0
 *
 * POST /api/v1/attendance/create
 */

import { Router } from 'express';
import * as attendanceController from '../controller/attendance';
import tokenVerify from '../middleware/verifyToken';
const router = Router();

/**
 * POST /api/v1/attendance/create
 */
router.post('/create',tokenVerify,attendanceController.create);

/**
  * PUT /api/v1/attendance/update
  */
router.put('/update',tokenVerify,attendanceController.update);

/**
  * GET /api/v1/attendance/getAll
  */
router.get('/getall', attendanceController.getAll);

/**
  * GET /api/v1/attendance/get
  */
router.get('/get', attendanceController.get);

/**
  * DELETE /api/v1/attendance/delete
  */
router.delete('/delete', attendanceController.attendanceDelete);


export default router;


