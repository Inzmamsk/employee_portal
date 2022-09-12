/**
 * name:Priya Prasad Patra
 * date:10/6/2021
 * version:1.0.0
 *
 */

import { Router } from 'express';
import * as blogController from '../controller/blog';
import tokenVerify from '../middleware/verifyToken';
const router = Router();

/**
 *  POST /api/v1/blog/create
 */
router.post('/create',tokenVerify,blogController.create);

/**
  * PUT /api/v1/blog/update
  */
router.put('/update',blogController.update);

/**
  * GET /api/v1/blog/getall
  */
router.get('/getall', blogController.getAll);

/**
  * GET /api/v1/blog/get
  */
router.get('/get', blogController.get);

/**
  * DELETE /api/v1/blog/delete
  */
router.delete('/delete', blogController.blogDelete);

/**
 * GET /api/v1/blog/search
 */
router.get('/search', blogController.search);

export default router;