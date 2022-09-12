/**
 * name:Priya Prasad Patra
 * date:3/6/2021
 * version:1.0.0
 *
 */

import { Router } from 'express';
import * as holidayListController from '../controller/holidayList';
const router = Router();

/**
 * POST /api/v1/holidaylist/create
 */
router.post('/create',holidayListController.create);

/**
  * GET /api/v1/holidaylist/getall
  */
router.get('/getall', holidayListController.getAll);


export default router;