/**
 * name:Priya Prasad Patra
 * date:28/4/2021
 * version:1.0.0
 *
 */

import { Router } from 'express';
import * as assignmentController from '../controller/assignment';
const router = Router();

/**
 *  POST /api/v1/assignment/create
 */
router.post('/create',assignmentController.create);

/**
  * PUT /api/v1/assignment/update
  */
router.put('/update',assignmentController.update);

/**
  * GET /api/v1/assignment/get
  */
router.get('/get', assignmentController.get);

/**
  * GET /api/v1/assignment/getAll
  */
router.get('/getall', assignmentController.getAll);

/**
  * DELETE /api/v1/assignment/delete
  */
router.delete('/delete', assignmentController.assignmentDelete);


export default router;